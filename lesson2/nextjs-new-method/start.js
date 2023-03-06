const next = require('next');
const app = next({ dev:false });
const handler = app.getRequestHandler();
app.prepare().then(() => {
    //express  body-parser express-session connect-mongo mongoose
    let express = require("express");
    let bodyParser = require("body-parser");
    let {UserModel} = require('./model');
    let session = require("express-session");
    let config = require('./config');
    let MongoStore = require('connect-mongo')(session);
    let app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(
        session({
            secret: config.secret,
            resave: false,
            saveUninitialized: true,
            store: new MongoStore({
                url: config.dbUrl,
                mongoOptions: {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            })
        })
    );
    app.get('/api/users', async (req, res) => {
        let users = await UserModel.find();
        users = users.map(user=>user.toJSON());
        res.send({ success:true, data: users });
    });
    app.get('/api/users/:id', async (req, res) => {
        let user = await UserModel.findById(req.params.id);
        res.send({ success:true, data: user.toJSON() });
    });
    app.post('/api/register', async (req, res) => {
        let user = req.body;
        user = await UserModel.create(user);
        res.send({ success:true, data: user.toJSON() });
    });
    app.post('/api/login', async (req, res) => {
        let user = req.body;
        let dbUser = await UserModel.findOne(user);
        if (dbUser) {
            req.session.currentUser = dbUser.toJSON();
            res.send({ success:true, data: dbUser.toJSON() });
        } else {
            res.send({ success:false, error: '登录失败' });
        }
    });

    app.get('/api/currentUser', async (req, res) => {
        let currentUser = req.session.currentUser;
        if (currentUser) {
            res.send({ success:true, data: currentUser });
        } else {
            res.send({ success:false, error: '当前用户未登录' });
        }
    });
    app.use(async (req, res) => {
        await handler(req, res);
    })
    app.listen(3000, () => {
        console.log('服务器在3000端口启动!');
    });
});