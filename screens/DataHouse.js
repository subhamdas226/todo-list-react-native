import React from 'react';
import moment from 'moment';
import realm, {
    getAllBlog, dltAllBlog
} from '../model/User';

const BlogContext = React.createContext();
var Moment_date = moment().format('D/MM/YYYY');

// dltAllBlog()

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            realm.write(() => {
                const Blog = realm.create('Blog', {
                    id: Math.floor(Math.random() * 103),
                    title: action.payload.title,
                    desc: action.payload.desc,
                    date: Moment_date,
                    writer: action.payload.author
                })
            })
            return state
            // console.log(action.payload);

        case "dltAll":
            dltAllBlog()
            return state
        default:
            state;
    }
}

export const BlogProvider = ({ children }) => {

    const [blogPosts, dispatch] = React.useReducer(blogReducer, getAllBlog())

    const addBlog = (inData) => {
        dispatch({ type: 'add', payload: inData })
    }
    const dltAllBlog = () => {
        console.log("DATAHOUSE");
    }

    return <BlogContext.Provider value={{ blogPosts, addBlog, dltAllBlog }}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext