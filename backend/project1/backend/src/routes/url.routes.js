import { Router } from "express"
import generateCode from "../utils/generateCode.js"
import shortUrlModel from "../models/shortURL.model.js"


const routes = Router()

routes.post("/", async function (req, res) {
    const { url } = req.body

    if (!url) {
        return res.status(400).json({ error: "Please enter url" })
    }

    if (url.startsWith("http://") == false && url.startsWith("https://") == false) {
        return res.status(400).json({
            error: "please enter a valid URL starting with http:// or https://"
        })
    }

    if (url.length > 2084) {
        return res.status(400).json({ error: "URL is too long." })
    }

    const code = generateCode()

    const newUrl = await shortUrlModel.create({
        originalUrl: url,
        shortCode: code
    })

    res.status(201).json({
        message: "URL shortened successfully",
        data: {
            originalUrl: newUrl.originalUrl,
            shortCode: newUrl.shortCode,
        }
    })
})


routes.get("/", async function (req, res) {
    const urls = await shortUrlModel.find()

    return res.status(200).json({
        message: "URL fetched successfully",
        data: {
            urls
        }
    })
})


routes.delete("/:id", async function (req, res) {
    const { id } = req.params

    const url = await shortUrlModel.findById(id)

    if (!url) {
        return res.status(404).json({
            message: "URL not found"
        })
    }

    await shortUrlModel.findByIdAndDelete(id)

    return res.status(200).json({
        message: "Url deleted successfully"
    })
})

export default routes