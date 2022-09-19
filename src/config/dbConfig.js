
//CONEXION A LA DB EN MONGO

const config = {
    mongoDb: {
        url: 'mongodb+srv://cristian:Roma2022@cluster0.lohlj66.mongodb.net/ecommerce?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
}

module.exports=config;