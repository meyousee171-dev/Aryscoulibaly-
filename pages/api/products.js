// pages/api/products.js

import db from '../../../lib/db'; // Adjust the path as necessary

export default async function handler(req, res) {
    try {
        const products = await db('products').select('*'); // Fetch all products from the database
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
}