import app from "../app.js";

app.get('/products', (req, res) => {
    // db.all('SELECT * FROM products', (err, rows) => {
    //     if (err) {
    //         console.error(err.message);
    //         res.status(500).send('Internal server error');
    //     } else {
    //         res.send(rows);
    //     }
    // });
});