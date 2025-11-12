const testModel = require("../services/test.service");

module.exports.testService = async (req, res, next) => {
    try {
        const { fullName } = req.body;  

        if (!fullName) {
            return res.status(400).json({ message: "fullName is required" });
        }

        const test = await testModel.createSample({
            fullName: fullName,
        });

        return res.status(201).json({ message: "Created successfully", data: test });

    } catch (error) {
        next(error);
    }
};
