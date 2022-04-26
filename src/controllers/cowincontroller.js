const axios = require('axios')
// const res = require('express/lib/response')

let getsession = async function (req, res) {

    try {
        let district = req.query.district_id
        let date = req.query.date

        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log("error", err.message)
        res.status(500).send({ msg: err.message })
    }
}

// Sorted Cites temperature
let sortedweather = async (req, res) => {
    try {
        let cityName = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow", "Rewa"];
        let cityInArray = [];

        for (let cities of cityName) {
            let object = { city: cities };
            let options = {
                method: "get",
                url: `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=7f185e29ba2cd81c4a90da6b8f9ce338`
            };

            let result = await axios(options);
            object.temp = result.data.main.temp;

            // console.log(result.data.main.temp);
            cityInArray.push(object);
        }

        let sorted = cityInArray.sort((a, b) => a.temp - b.temp);
        res.status(200).send({ message: sorted, status: true })


    } catch (error) {
        res.status(500).send({ message: error.message })

    }
}

// 1. Get all the memes at Postman (https://api.imgflip.com/get_memes)

let getAllMems = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/get_memes`
        };

        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

// 2. Pick a memeId you want (Eg 129242436) for the POST request

let pickMemId = async function (req, res) {
    try {
        let memeId = req.body.memes
        let options = {
            method: 'post',
            url: `https://api.imgflip.com/get_memes`,
            data: "memeId"
        };

        let result = await axios(options);
        let data = result.data;
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};


let createMemes = async function (req, res) {
    try {

        let template = req.query.template_id;
        let text0 = req.query.text0;
        let text1 = req.query.text1;
        let username = req.query.username;
        let password = req.query.password
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
            data:template
        };



        let result = await axios(options);
        let data = result.data;
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};





module.exports.getsession = getsession
module.exports.sortedweather = sortedweather
module.exports.getAllMems  = getAllMems
module.exports.pickMemId = pickMemId
module.exports.createMemes = createMemes