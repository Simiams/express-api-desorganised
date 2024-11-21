import {getProduct} from "../repositories/productRepository.js";
import {db} from "../configurations/databaseConfiguration.js";
import express from "express";

export const productRouter = express.Router();

productRouter.get('/products', (req, res) => {
    getProduct((err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
        } else {
            res.send(rows);
        }
    })
});

productRouter.post('/products', (req, res) => {
    console.log(req.body)
    const { name, price } = req.body;
    if (!name || !price) {
        res.status(400).send('Name and price are required');
    } else {
        const sql = 'INSERT INTO products(name, price) VALUES (?, ?)';
        db.run(sql, [name, price], function(err) {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal server error');
            } else {
                const id = this.lastID;
                res.status(201).send({ id, name, price });
            }
        });
    }
});