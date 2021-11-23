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

UserSchema.methods = {
    comparePassword: function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    }
}


module.exports = mongoose.model('users', UserSchema);
