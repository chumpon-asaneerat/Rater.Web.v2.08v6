class UnitTest {
    delay(t, v) {
        return new Promise(function (resolve) {
            setTimeout(resolve.bind(null, v), t)
        });
    };
}

class App {
    constructor() {
    }
    /*
    willIGetNewPhone = new Promise(function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } 
        else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }
    });
    */

    signin(user) {
        let users = [
            { 
                "userId": "M00001", 
                "userName": "test@test.co.th", 
                "passWord":"1234", 
                "customerId":"EDL-2008050001", 
                "customerName":"Test Company 1"  
            },
            { 
                "userId": "M00001", 
                "userName": "test@test.co.th", 
                "passWord": "1234", 
                "customerId": "EDL-2008050002", 
                "customerName": "Test Company 2"
            },
            {
                "userId": "M00001",
                "userName": "admin@super-power.co.th",
                "passWord": "1234",
                "customerId": "EDL-2008050003",
                "customerName": "Super Power Company"
            },
            {
                "userId": "M00001",
                "userName": "chumpon@softbase.co.th",
                "passWord": "1234",
                "customerId": "EDL-2008050004",
                "customerName": "Softbase Company"
            },
        ];
        // test@test.co.th
        // admin@super-power.co.th
        // chumpon@softbase.co.th
        let fn = (resolve, reject) => {
            let isMatchUser = (item) => {
                let nameEq = item.userName === user.userName;
                let pwdEq = item.passWord === user.passWord;
                return (nameEq && pwdEq);
            };
            setTimeout(() => {
                //let userAndpwds = users.map(getNameAndPwd);
                let foundUsers = users.filter(isMatchUser);
                resolve(foundUsers);
            }, 1000);
        }
        return new Promise(fn);
    }
}

; (function () {
    // set global app variable in window.
    window.app = window.app || new App();

    riot.compile(function () {
        var tags = riot.mount('*');
    });
})();