const getLaptopSchematics = require('./laptopSchematics');

module.exports = (req,res)=>{
    getLaptopSchematics()
    .then(response=>{
        res.send(response);
    })    
}