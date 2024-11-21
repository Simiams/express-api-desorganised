import {db} from "../configurations/databaseConfiguration.js";

const getProduct = () => {
     db.all('SELECT * FROM products', (err, rows) => {
         if (err) {
             console.error(err.message);
             res.status(500).send('Internal server error');
         } else {
             res.send(rows);
         }
     });
 }