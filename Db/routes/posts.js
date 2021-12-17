const router = require("express").Router();
const Post = require("../model/post");

router.post("/newPost", async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const newPost = new Post({
        title: title,
        description: description
    });
    const savePost = await newPost.save();
    res.json(savePost);
});

router.get("/getPosts", async(req,res)=> {
    const posts = await Post.find({});
    res.json(posts);
})

router.patch("/editDesc/:postid", async(req,res) => {
    const _id = req.params.postid;
    await Post.findByIdAndUpdate(_id, { $set: {description: req.body.description } });
    res.json({ "Status": "Updated"});
});

router.get("/getPost/:postid", async(req,res) => {
    const _id = req.params.postid;
    const post = await Post.findById(_id);
    res.json(post);
});

router.delete("/delPost/:postid", async(req,res) => {
    const _id = req.params.postid;
    await Post.findByIdAndDelete(_id);
    res.json({ "Status" : "Post Removed" });
});

module.exports = router;