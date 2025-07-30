const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
    problem: { type: String, required: true },
    solution: { type: String, required: true },
    targetMarket: { type: String, required: true },
    team: { type: String, required: true },
    businessModel: { type: String, required: true },
    uniqueness: { type: String, required: true },
    revenueModel: { type: String, required: true },
    score: { type: Number, required: true },
    feedback: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Idea', ideaSchema);
