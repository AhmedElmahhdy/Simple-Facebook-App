import { post } from "../../../DB/Models/posts.model.js";
import { User } from "../../../DB/Models/users.model.js";

export const createPost = async(req,res)=>{
    const {title,contant,author} = req.body
    const user = await User.findOne({where:{username:author}})
    if (!user){
        return res.json({message:"user not found"})
    }
    const newPost = await post.create({title:title,contant:contant,author:author,authorId:user.dataValues.Id})
    res.json({message: "post is created", post: newPost})
}

export const getAllPosts = async(req,res)=>{
    const posts = await post.findAll()
    res.json(posts)
} 

export  const deletePost = async(req,res)=>{
    const {id} = req.query
    console.log(id);
    try{
        const postcheck = await post.findOne({where:{id}})
        console.log(postcheck);
        if (!postcheck){
            return res.json({message:"post not found"})
        }
        const updatedPost = await post.update({isDeleted:true},{where:{id:id}})
        res.json({message:"post deleted",updatedPost})
    }catch(err){
        return res.json({message:"error in deleting",err})  
    }
   
}

export const updatedPost = async(req,res)=>{
    const {id} = req.query
    const {title,contant} = req.body
    const cheackPost = await post.findOne({where:{id}})
    if (!cheackPost){
        return res.json({message:"post not found"})
    }
    const updatedPost = await post.update({title:title,contant:contant},{where:{id:id}})
    res.json({message:"post updated",updatedPost})
}
// Get a specific post with the author.

export const getSpecificPost = async(req,res)=>{
    const {author} = req.body
    const cheackPost = await post.findOne({where:{author}})
    if(!cheackPost){
        return res.json({message:"post not found"})
    }
    res.json(cheackPost)
}