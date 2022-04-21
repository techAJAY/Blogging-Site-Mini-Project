const req = require("express/lib/request")
const productModel = require("../models/productModel")
const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel2")

const createorder = async function (req, res) {
    let u = req.body
    let s = req.headers.isfreeappuser
    console.log(s);
    let q = await userModel.findOne({ _id: u.userId })
    let r = await productModel.findOne({ _id: u.productId })
    if (q && r) {
        if (req.headers.isfreeappuser === "true") {
            u["amount"] = 0;
            u["isfreeappuser"] = true;
            let c = await orderModel.create(req.body)
            res.send({ data: c })
        }
        else {
            let z = await userModel.findById({ _id: u.userId }).select({ balance: 1, _id: 0 })
            console.log(z.balance);
            let y = await productModel.findById({ _id: u.productId }).select({ price: 1, _id: 0 })
            console.log(y.price);
            if (z.balance > y.price) {
                let k = z.balance - y.price
                console.log(k);
                let o = await userModel.updateOne(
                    { _id: u.userId },
                    { $set: { balance: k } }
                );
            }
            else {
                res.send({ msg: "users don't have sufficint balance" })
            }
        }
    } else if (!q) {
        res.send({ msg: "userid is not a valid id" })
    } else if (!r) {
        res.send({ msg: "productid is not a valid id" })
    }
}


module.exports.createorder = createorder