const create = (req, res) => {
    console.log("hello");
    res.status(200).json({
        message: "User created successfully",
        data: req.body,
        file: req.file
    })

    console.log(req.body);
    console.log(req.file);
    
    

}


module.exports = { create }