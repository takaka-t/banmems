import express from 'express'
const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//テスト
app.get('/test', (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify({AAA:"testGet"}))
})

app.listen(3000, () => {
    console.log("Start on port 3000.")
})