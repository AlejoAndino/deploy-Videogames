const app = require('./routes/server');
const { sequelize } = require('./DB_connection');
const { getAllGenres } = require('./controllers/getAllGenres');
require('dotenv').config();
const { PORT } = process.env;


sequelize.sync({force: true}).then( async () =>{
    console.log('DB successfully connected');
    // console.log("Soy index.js", await saveApiData());
    // await saveApiData()
    app.listen(PORT, () => {
        console.log(`Server on port ${PORT}`);
    })
}).catch((error)=> {
    console.log(error);
})
