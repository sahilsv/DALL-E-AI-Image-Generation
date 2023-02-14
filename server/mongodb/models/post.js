// This depicts the structure of how our post looks like
import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true},
});

// Create a model of the schema, passing a name for the 
// schema (1st param) and the schema we created (2nd parameter)
const PostSchema = mongoose.model('Post', Post);

export default PostSchema;
