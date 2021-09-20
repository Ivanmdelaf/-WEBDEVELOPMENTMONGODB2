module.exports = {
    index : (req,res)=>{
        res.send(`Images Index: ${req.params.image_id}`)
    },
    create: (req,res)=>{
        res.send(req.body)
        console.log(req.body)
    },
    like: (req,res)=>{

    },
    comment: (req,res)=>{

    }
}