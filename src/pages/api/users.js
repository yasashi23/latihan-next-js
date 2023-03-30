// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader("Content-Type", 'application/json')
    res.end(JSON.stringify([
      {nama: "yasashi", hpnya: 'samsung'},
      {nama: "udin", hpnya: "iphone"},
      {nama:"ahmad", hpnya: "nokia"},
      {nama:"babang", hpnya:"iphone"}
    ]))
}
