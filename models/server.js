import express from 'express'
import 'dotenv/config';
import cors from 'cors';

export class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3001;
        this.app.use(cors());

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.get('/api',(req, res) => {
            res.json({
                msg: 'Peticion GET recibida'
            });
        });
        this.app.post('/api',(req, res) => {
            res.json({
                msg: 'Peticion POST recibida'
            });
        });
        this.app.put('/api',(req, res) => {
            res.json({
                msg: 'Peticion PUT recibida'
            });
        });
        this.app.delete('/api',(req, res) => {
            res.json({
                msg: 'Peticion DELETE recibida'
            });
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor Corriendo en el puerto ${this.port}`)
        });
    }
}

export default Server;