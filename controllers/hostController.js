module.exports  =  {

    basic :  (req , res) => { 
        return res.json('working ... ')
    },
    checkAvability : (req , res) => {
        console.log(req.body)
        return res.json(req.body)
        // console.log('working ... ')
    }
}
