import { Router } from "express";
import { createComment, deleteComment, getAllComments, updateComment } from "./comments.controllers.js";

const commentRoutes = Router();

commentRoutes.post("/createComment", createComment);     
commentRoutes.get("/getAllComments", getAllComments);     
commentRoutes.delete("/deleteComment", deleteComment);     
commentRoutes.patch("/updateComment", updateComment);     

export default commentRoutes