const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    price: {type: number, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true},
    Modepayment: {type: String, required: true}
});

module.exports = mongoose.model('Order', schema);