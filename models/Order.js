// const db = require('../config/db');
// exports.createOrder = (menuItemId, price) => {
//     return db.tx(async (t) => {
//         const order = await t.one(
//             'INSERT INTO orders (menu_item_id, quantity, price_at_order) VALUES ($1, 1, $2) RETURNING *',
//             [menuItemId, price]
//         );
//         await t.none('UPDATE menu_items SET times_ordered = times_ordered + 1 WHERE id = $1', [menuItemId]);
//             return order;
//         });
//     };
//     exports.getOrderById = (id) => {
//         return db.oneOrNone(
//             `SELECT orders.*, menu_items.name AS item_name
//             FROM orders
//             JOIN menu_items ON orders.menu_item_id = menu_items.id
//             WHERE orders.id = $1`,
//             [id]
//         );
//     };