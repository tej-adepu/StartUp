const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = 'yourSecretKey'; // Store this securely in env for production

// REGISTER CONTROLLER
const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        console.log("Register Request Body:", req.body);

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: { name: user.name, email: user.email }
        });
    } catch (err) {
        console.error('Register Error:', err.message);
        next(err);
    }
};

// LOGIN CONTROLLER
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log("Login Email:", email);
        console.log("Login Password (raw):", password);

        const user = await User.findOne({ email });
        console.log("User found in DB:", user);

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials - No user' });
        }

        console.log("Stored Hashed Password:", user.password);

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password Match:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials - Wrong password' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({
            message: 'Login successful',
            token,
            user: { name: user.name, email: user.email }
        });
    } catch (err) {
        console.error('Login Error:', err.message);
        next(err);
    }
};



module.exports = { register, login };
