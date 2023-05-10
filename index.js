import express from "express";
import jsonServer from "json-server";
import auth from "json-server-auth";

const server = express();
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'),
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

const router = jsonServer.router('./Data/db.json');
server.use('/api', router);
server.db = router.db

const middlewares = jsonServer.defaults()
const rules =  auth.rewriter({
    orders: 660,
    users: 600
})

server.use(rules)
server.use(auth)
server.use(middlewares)

server.listen(8000)