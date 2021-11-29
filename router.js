const express = require("express")
const router = express.Router()
const PostsController=require("./controller/Posts");

router.get('/', (req, res) => {
    res.send("Hello World")
})
router.post('/posts/create',PostsController.createPost)
router.get('/posts',PostsController.getPost)
router.get('/posts/:id',PostsController.findSinglePost)
router.put('/posts/:id',PostsController.updatePost);
router.delete('/posts/:id',PostsController.deletePost);

module.exports = router