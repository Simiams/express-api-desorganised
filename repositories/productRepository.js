import {db} from "../configurations/databaseConfiguration.js";

export const getProduct = (callback) => {
     db.all('SELECT * FROM products', callback);
 }