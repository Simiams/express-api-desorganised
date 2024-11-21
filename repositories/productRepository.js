import {db} from "../configurations/databaseConfiguration.js";

export const getProduct = (callback) => {
     db.all('SELECT * FROM products', callback);
 }
export const postProduct = (callback) => {
     db.all('INSERT INTO products(name, price) VALUES (?, ?)', callback);
 }