import Realm from "realm";

// Declare Schema
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

// Create realm
let realm2 = new Realm({ schema: [BlogSchema], schemaVersion: 4});

let getAllBlog = () => {
    return realm2.objects('Blog')
}

let dltAllBlog = () => {
    realm2.write(() => {
        realm2.delete(getAllBlog())
    })
}

export { getAllBlog, dltAllBlog }

// Export the realm
export default realm2;