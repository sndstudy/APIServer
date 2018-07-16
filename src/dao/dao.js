module.exports = class Dao{

    constructor(){

    }

    findAll(){

        let NeDB = require('nedb');
        let db = new NeDB({
            filename: './db/member'
        });

        db.loadDatabase();

        return new Promise((resolve, reject)=>{
            
            db.find({},(err, docs) =>{
                
                resolve(docs);

            }) ;

        });

    }

}