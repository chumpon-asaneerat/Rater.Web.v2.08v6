class MockPromise {
    static create(fn, timeout) {
        let ret = new Promise((resolve, reject) => {
            let result = null;
            if (!fn || !(fn instanceof Function)) {
                console.log('The assigned value should be function.');
            }
            setTimeout(() => {
                result = fn(); 
                resolve(result);
            }, (timeout || !(typeof timeout !== 'Number')) ? timeout : 33);
        });

        return ret;
    };
};

class UserManager {
    constructor() { }

    //-- private methods.
    __getUsers() {
        let users = [{
            "userId": "M00001",
            "FullNameNative": "Mr. Test User.",
            "userName": "test@test.co.th", "passWord": "1234",
            "customerId": "EDL-2008050001",
            "CustomerName": "Test Company 1"
        },
        {
            "userId": "M00001",
            "FullNameNative": "Mr. Test User.",
            "userName": "test@test.co.th", "passWord": "1234",
            "customerId": "EDL-2008050002",
            "CustomerName": "Test Company 2"
        },
        {
            "userId": "M00001",
            "FullNameNative": "Mr. Admin User.",
            "userName": "admin@super-power.co.th", "passWord": "1234",
            "customerId": "EDL-2008050003",
            "CustomerName": "Super Power Company"
        },
        {
            "userId": "M00001",
            "FullNameNative": "Mr. Chumpon Asaneerat",
            "userName": "chumpon@softbase.co.th", "passWord": "1234",
            "customerId": "EDL-2008050004",
            "CustomerName": "Softbase Company"
        }];
        return users;
    };

    getUsers() {
        return MockPromise.create(this.__getUsers, 'xx');
    };
};

let usr = new UserManager();
let users = usr.getUsers();

let d = new Date();

users.then((r) => {
    console.log(r);
});
