import axios from 'axios';
const url = 'https://afternoon-depths-68014.herokuapp.com';

export default class API{
    //To get all posts from the server
    static async getAllPosts(){
        const res = await axios.get(`${url}/api/post`);
        return res.data;
    }
    //To get single post by ID
    static async getPostByID(id){
        const res = await axios.get(`${url}/api/post/${id}`);
        return res.data;
    }
    //To insert post into database
    static async addPost(post){
        const res = await axios.post(`${url}/api/post`, post);
        return res.data;
    }
    //To update post into database
    static async updatePost(id, post){
        const res = await axios.patch(`${url}/api/post/${id}`, post);
        return res.data;
    }
    //To delete single post by ID
    static async deletePost(id){
        const res = await axios.delete(`${url}/api/post/${id}`);
        return res.data;
    }
}

export { url };