import { Comment } from "../../../DB/Models/comment.model.js";
import { post } from "../../../DB/Models/posts.model.js";
import { User } from "../../../DB/Models/users.model.js";

export const createComment = async(req,res)=>{
    const {content,postId,author} = req.body
    console.log(postId);
    const cheackPost = await post.findOne({where:{Id:postId}})
    console.log(cheackPost); 
    if (!cheackPost){
        return res.json({message:"post not found"})
    }
    const cheackAuthor = await User.findOne({where:{username:author}})
    if (!cheackAuthor){
        return res.json({message:"author not found"})
    }
    console.log(cheackAuthor.dataValues.Id);
    try{
        const newComment = await Comment.create({content:content,PostId:postId,author:author, UserId:cheackAuthor.dataValues.Id})
        res.json({message: "comment is created", comment: newComment})
    }catch(err){
        return res.json({message:"error in creating",err})  
    }
    
}

export const getAllComments = async(req,res)=>{
    const comments = await Comment.findAll()
    res.json(comments)
}

export const deleteComment = async(req,res)=>{
    const {id} = req.query
    try{
        const commentcheck = await Comment.findOne({where:{id}})
        if (!commentcheck){
            return res.json({message:"comment not found"})
        }
        const updatedComment = await Comment.update({isDeleted:true},{where:{id:id}})
        res.json({message:"comment deleted",updatedComment})
    }catch(err){
        return res.json({message:"error in deleting",err})  
    }
}

export const updateComment = async(req,res)=>{
    const {id} = req.query
    const {content} = req.body
    try{
        const commentcheck = await Comment.findOne({where:{id}})
        if (!commentcheck){
            return res.json({message:"comment not found"})
        }
        const updatedComment = await Comment.update({content:content},{where:{id:id}})
        res.json({message:"comment updated",updatedComment})
    }catch(err){
        return res.json({message:"error in updating",err})  
    }
}