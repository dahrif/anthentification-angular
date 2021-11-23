const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// define User Schema
const UserSchema = new Schema({
    username: { type: String, required: true },

    email : { type: String, required: true, unique: true },

    hashed_password: { type: String, default: ''
    }
});

// Virtuals
UserSchema
    .virtual('password')
    // set methods
    .set(function (password) {
        this._password = password;
    });

UserSchema.pre("save", function (next) {
    // store reference
    const user = this;
    if (user._password === undefined) {
        return next();
    }
    bcrypt.genSalt(function (err, salt) {
        if (err) console.log(err);
        // hash the password using our new salt
        bcrypt.hash(user._password, salt, function (err, hash) {
            if (err) console.log(err);
            user.hashed_password = hash;
            next();
        });
    });
});


module.exports = mongoose.model('User', UserSchema);
