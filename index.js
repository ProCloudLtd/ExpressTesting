const app = require("express")();

app.get("/", async(req,res) => {
    res.send("hi")
});


app.listen(process.env.PORTY)