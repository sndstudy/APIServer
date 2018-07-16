let Dao = require('../dao/dao');

class Service{

    constructor(){

    }

    doMain(){

        let dao = new Dao();
        dao.findAll().then((value)=>{

            console.log(value);

        });

    }

}

let service = new Service();
service.doMain();
