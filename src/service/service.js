let NeDB = require('nedb');
let db = new NeDB({
    filename: '../db/member.db'
});


class Service{

    constructor(){

    }

    getMemberList(){

        let NeDB = require('nedb');
        let db = new NeDB({
            filename: '../db/member.db'
        });

        db.loadDatabase();

        db.find({},() =>{

        });

    }

}

