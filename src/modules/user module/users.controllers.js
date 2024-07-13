import bycrpt from "bcryptjs"
import { User } from "../../../DB/Models/users.model.js"
import { post } from "../../../DB/Models/posts.model.js"
import { Comment } from "../../../DB/Models/comment.model.js"

export const register = async(req,res)=>{
    const {email,password,username}  = req.body
    const isEmailExist = await User.findOne({where:{email:email}})
    if (isEmailExist){
       return res.json({message:"email already exist"})
    }
    const hashedPassword = bycrpt.hashSync(password,10)
    User.create({email:email,password:hashedPassword,username:username})
    res.json("register success")    

}
export const login = async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({where:{email:email}})
    if (!user){
        return res.json({message:"Email or Password not correct"})
    }
    const isPasswordCorrect = bycrpt.compareSync(password,user.password)
    if(isPasswordCorrect){
        return res.json({message:"login success"})
    }
    res.json({message:"Email or Password not correct"})
}
export const logout = (req,res)=>{
    res.json({message:"logout success"})
}

//Special endpoint to get a specific user with a specific post and post’s comments.
export const getspecificUser = async(req,res)=>{
    const {username} = req.body
    const user = await User.findAll({where:{username:username},include:[{model:post},{model:Comment}]})
    res.json(user)
} 