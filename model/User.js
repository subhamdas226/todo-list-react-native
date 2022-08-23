import Realm from "realm";

class UserSchema extends Realm.Object { }
UserSchema.schema = {
    name: "User",
    properties: {
        userID: "int",
        name: "string",
        email: "string?",
        password: "string",
        // givenName: "string",
        // familyName: "string",
        // hasThumbnail: {type: "bool", default: false},
        // phoneNumber: "string",
    },
    // primaryKey: "userID",
};

class BlogSchema extends Realm.Object { }
BlogSchema.schema = {
    name: 'Blog',
    properties: {
        id: 'int',
        title: 'string',
        desc: 'string',
        date: 'string',
        writer: 'string'
    }
};

let realm = new Realm({ schema: [UserSchema, BlogSchema], schemaVersion: 4 });

let getAllBlog = () => {
    return realm.objects('Blog')
}

let dltAllBlog = () => {
    realm.write(() => {
        realm.delete(getAllBlog())
    })
}
// Functions
// Return all users
let getAllUsers = () => {
    return realm.objects('User');
};

// Add a single User using parameters
let addUser = (_name, _email, _password) => {
    let _id = 0;
    realm.write(() => {
        

        if (getAllUsers().length > 0) {
            _id = realm.objects('User').max('userID') + 1;
            console.log(_id)
        }
        const user = realm.create('User', {
            userID: _id,
            name: _name,
            email: _email,
            password: _password,
        });
    });
    console.log(_id)
    return _id
}

// Remove all Users from Realm database
let deleteAllUsers = () => {
    realm.write(() => {
        realm.delete(getAllUsers());
    });
};
export default realm;

export {
    getAllUsers,
    addUser,
    deleteAllUsers,
    getAllBlog,
    dltAllBlog
}
// export default new Realm({ schema: [UserSchema] });