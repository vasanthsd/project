const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var DistributeSchema = new Schema({
    
    distributorName:{type:String},
    cityName:{type:String},
    countryName:{type:String},
    cityCode:{type:String},
    ProvinceName:{type:String},
    ProvinceCode:{type:String},
    CountryCode:{type:String},
    address:[{
        address1:
        {
        type:Number,
        },
        address2:
        {
            type:String,
        }
    }],
    write:[{
        INCLUDE:
        {
            type:String,
        },
        EXCLUDE:
        {
            type:String,
        }
    }],

})
module.exports=mongoose.model('Distribute',DistributeSchema);