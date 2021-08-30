const express = require('express')
const app = express()

const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:3060', //true로 하면 *대신 보낸곳의 주소가 자동으로 들어가 편리. //지금은 다 허용이지만 나중엔 내 도메인만
  credentials: true, // 쿠키도 허용해줌
}))


app.use(cookieParser())
// app.use(bodyParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }));

const router = express.Router();

app.use(express.json()) // front안에 json으로 보냈을 때 req.body안에 json으로 넣어줌. axios같은거 쓸때 
app.use(express.urlencoded({ extended: true })); // form submit했을떄 urlincoded방식으로 넘겨주는데 이걸 해석해서 req.body에 넣어줌



app.post('/aaa', async (req, res) => {
  //  await res.send('이거전달해줌')
  // await console.log(11, req.body)
  console.log(req.body)
  res.status(200).json(req.body)

    // res.cookie('nanana', 'hohohoho')
    // res.send('Hello World!');

    // console.log(req.cookies)
  });

  app.get('/', (req, res) => {
    res.send('hoho')
  })

app.get('/conts/:pageId/:userId', (req, res) => {
  res.send(req.params)
})

app.listen(3000, () => {
    console.log('server')
})









// const http = require('http')
// const cookie = require('cookie')
// const session = require('express-session')
// const cookieParser = require('cookie-parser')



// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Set-Cookie': [
//             'yammy_cookie=jong', 
//             'mm=hwan', 
//             `permonent-cookie=coo~; Max-Age=${60}`,
//             'ss=ss; Secure',
//             'http_only=http_only; httpOnly',
//             'coo_path=coo~s; path=/cookies',
//             'dome=coo~s; domain=jonghwan.org'
//         ]
//     })
//     console.log(req.headers.cookie)

//     let cookies = cookie.parse(req.headers.cookie)
//     console.log(cookies)


//     res.end('hello node')
// })

// server.listen(3000, () => {
//     console.log('server on')
// })

