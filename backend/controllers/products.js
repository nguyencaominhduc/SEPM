const Product = require('../model/Product')

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(201).json({
            success: true,
            count: products.length,
            data: products
        })
    } catch (err) {
        res.status(400).json({
            success: false
        })
    }
}

// @desc    Get single product
// @route   GET /api/v1/products/:id
// @access  Public
exports.getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        // Check the format of the id input
        if (!product) {
            return res.status(400).json({ success: false })
        }
        // Return the value
        res.status(201).json({
            success: true,
            data: product
        })
    } catch (err) {
        res.status(400).json({
            success: false
        })
    }
}

// @desc    Get single product
// @route   POST /api/v1/products
// @access  Private
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({
            success: true,
            data: product
        })
    } catch (err) {
        res.status(400).json({
            success: false
        })
    }
}

// @desc    Get single product
// @route   PUT /api/v1/products/:id
// @access  Private
exports.updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidator: true
        });
        // Check the format of the id input
        if (!product) {
            return res.status(400).json({ success: false })
        }
        // Return the value
        res.status(201).json({
            success: true,
            data: product
        })
    } catch (err) {
        res.status(400).json({
            success: false
        })
    }
}

// @desc    Get single product
// @route   DELETE /api/v1/products/:id
// @access  Private
exports.deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        // Check the format of the id input
        if (!product) {
            return res.status(400).json({ success: false })
        }
        // Return the value
        res.status(201).json({
            success: true,
            msg: "Product deleted"
        })
    } catch (err) {
        res.status(400).json({
            success: false
        })
    }
}

// @desc    Search for products based on name or category
// @route   DELETE /api/v1/products/search/:query
// @access  Private
exports.searchProduct = async (req, res, next) => {
    Product.find({
            $or: [
                { name: { $regex: new RegExp(req.params.query, 'i') } },
                { category: { $regex: new RegExp(req.params.query, 'i') } }
            ]
        },
        function(err, result) {
            res.send(result)
        })
}

