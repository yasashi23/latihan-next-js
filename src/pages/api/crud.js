const fs = require('fs')
const path = require('path')


// console.log(JSON.parse(test))
// console.log(test)
// const test = [{nama:"udin",kelas:12},{nama:"ahmad",kelas:9}]
// console.log(JSON.stringify(test))

export default function handlernya(req, res) {
    const filePath = path.join(process.cwd(), 'public', 'test.json')
    const test = JSON.parse(fs.readFileSync(filePath,'utf-8'))
    res.statusCode = 200
    res.setHeader("Content-Type", 'application/json')
    res.end(JSON.stringify(test))
}