let axios = require('axios');
require('dotenv').config();

module.exports = async function() {
    let search = '{"apidate":"'+process.env.apicontent+'"}';
    let path = 'treetruck?search='+search;
    //console.log(path);
    let setorigin = await axios.get(process.env.APIURL2 + path)
        .then(function (response) {
            //console.log(response.data);
            return response.data;
        })
        .catch(function(error) {
            console.log(error)
            return {}
        })
    console.log("data to get")
    let finaldata = await axios.get(setorigin[0]["urlbase"] + setorigin[0]["sheetbase"])
        .then(function (response) {
            //console.log(response.data);
            return response.data;
        })
        .catch(function(error) {
            console.log(error)
            return {}
        })
    return finaldata
}