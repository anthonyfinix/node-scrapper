const fs = require('fs');
const getLaptopSchematics = require('./laptopSchematics');
module.exports = (req,res)=>{
    getLaptopSchematics()
    .then(response=>{
        let LinkStream = fs.createWriteStream('links.txt');
        response.forEach(link => {
            LinkStream.write(link+ '\n')
        });
        res.send(response);
    })
    .catch(err=>console.log(err))
}