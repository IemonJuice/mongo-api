import express from 'express'
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from 'mongoose'
import { router } from "./routes/movies.routes.js";

export const server = express();


const URL = 'mongodb://localhost:27017/movies'

mongoose.connect(URL)
    .then(() => {
        server.listen(3000, () => {
            console.info('listening on port 3000 🙂');
        })
    }).catch((err) => {
    console.error(err + 'Mongo error: 😭');
})

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(router);



//         _nnnn_
//         dGGGGMMb
//        @p~qp~~qMb
//        M|@||@) M|
//        @,----.JM|
//       JS^\__/  qKL
//      dZP        qKRb
//     dZP          qKKb
//    fZP            SMMb
//    HZM            MMMM
//    FqM            MMMM
//  __| ".        |\dS"qML
//  |    `.       | `' \Zq
// _)      \.___.,|     .'
// \____   )MMMMMP|   .'
//      `-'       `--' hjm