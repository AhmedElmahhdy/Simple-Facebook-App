import { Router } from "express"
import {createPost, getAllPosts, deletePost, updatedPost, getSpecificPost} from "./posts.controllers.js";

const postRoutes = Router();

 postRoutes.post("/createPost", createPost);
 postRoutes.get("/getallPosts", getAllPosts);
 postRoutes.put("/softDeletePost", deletePost);
 postRoutes.put("/updatePost", updatedPost); 
 postRoutes.get("/getSpecificPost", getSpecificPost); 

export default postRoutes