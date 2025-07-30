const Idea = require('../models/Idea');
const { calculateScore } = require('../utils/scoring');

// Helper to trim and validate strings
const sanitizeInput = (value) => typeof value === 'string' ? value.trim() : value;

const submitIdea = async (req, res, next) => {
    try {
        const {
            problem,
            solution,
            targetMarket,
            team,
            businessModel,
            uniqueness,
            revenueModel
        } = req.body;

        // ✅ Validate required fields
        if (
            !problem || !solution || !targetMarket || !team ||
            !businessModel || !uniqueness || !revenueModel
        ) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // 🔒 Sanitize input (basic trimming)
        const ideaData = {
            problem: sanitizeInput(problem),
            solution: sanitizeInput(solution),
            targetMarket: sanitizeInput(targetMarket),
            team: sanitizeInput(team),
            businessModel: sanitizeInput(businessModel),
            uniqueness: sanitizeInput(uniqueness),
            revenueModel: sanitizeInput(revenueModel)
        };

        const { score, feedback } = calculateScore(ideaData);

        const newIdea = new Idea({ ...ideaData, score, feedback });
        await newIdea.save();

        res.status(201).json({ message: 'Idea Submitted', score, feedback });
    } catch (err) {
        console.error('Error in submitIdea:', err);
        next(err);
    }
};

const getIdea = async (req, res, next) => {
    try {
        const idea = await Idea.findById(req.params.id);
        if (!idea) return res.status(404).json({ message: 'Idea not found' });

        res.json(idea);
    } catch (err) {
        console.error('Error in getIdea:', err);
        next(err);
    }
};

module.exports = { submitIdea, getIdea };
