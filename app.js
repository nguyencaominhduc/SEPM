var express = require('express');

var app = express();

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var fetch = require('node-fetch');

app.use(bodyParser.json())

mongoose.connect('mongodb+srv://minh:XwGJ9gaBIZI4mLX4@cluster0-fj6og.mongodb.net/mydb?retryWrites=true&w=majority')

var ItemSchema = new mongoose.Schema({
    product_name: String,
    price: String,
    shopid: String,
    platform: String,
    store_URL: String,
    image_URL: String,
},
    { versionKey: false });

var Item = mongoose.model('items', ItemSchema)

function handleError(err) {
    console.log(err)
}

app.get('/fetch/:keyword', function (req, res) {
    let settings = { method: "Get" }
    let url = "https://shopee.vn/api/v2/search_items/?by=relevancy&keyword='" + req.params.keyword + "'&limit=100&newest=0&order=desc&page_type=search&version=2";
    console.log(url)
    items = [];
    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            items = json['items']
            for (var item of items) {
                platform = "Shopee"
                store_URL = "";
                let url2 = "https://shopee.vn/api/v2/item/get?itemid=" + item.itemid + "&shopid=" + item.shopid
                fetch(url2, settings)
                    .then(response => response.json())
                    .then((json) => {
                        image_URL = "https://cf.shopee.vn/file/" + json.item.image
                        Item.create({ product_name: json.item.name, price: json.item.price, shopid: json.item.shopid, platform: platform, store_URL: store_URL, image_URL: image_URL })
                    })
            }
        })
    res.send(items);
});

app.listen(9000)

