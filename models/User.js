const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Email is not valid!"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: validator.isStrongPassword
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        validate: validator.isAlpha
    }
})

//Hash the password before saving in database
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;