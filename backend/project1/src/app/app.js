import express from 'express'
import routes from '../routes/url.routes.js';
import shortUrlModel from '../models/shortURL.model.js';

const app = express();

app.use(express.json())


app.use("/api/url", routes)


app.get("/:code", async function (req, res) {
    const { code } = req.params

    const url = await shortUrlModel.findOne({
        shortCode: code
    })

    if (!url) {
        return res.status(400).json({
            error: "URL not found"
        })
    }

    res.redirect(302, url.originalUrl)

    await shortUrlModel.findOneAndUpdate({
        shortCode: code
    }, {
        $inc: { clicks: 1 }
    })
})


export default app