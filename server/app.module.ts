import {Router} from "express"

const router = Router()

router.get('/express', (req, res) => {
    res.json({message: 'Yes!'})
})

export const appModule = {router}
