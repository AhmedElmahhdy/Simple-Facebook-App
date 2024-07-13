import express from 'express'
import dbconnection from './DB/dbconnection.js'
import userRoutes from './src/modules/user module/users.routes.js'
import postRoutes from './src/modules/posts module/posts.routes.js'
import CommentRoutes from './src/modules/comment module/comments.routes.js'
import { User } from './DB/Models/users.model.js'

const app = express()
const  port = 8080
app.use(express.json());
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', CommentRoutes);
User

dbconnection()


app.listen(port,()=>{console.log("Server is created");})