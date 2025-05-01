import express, {Application,Response,Request} from "express";


import dotnev from "dotenv";


const PORT : number = parseInt(process.env.PORT as string, 10) || 5000;


const app : Application = express();





app.use(express.json());




dotnev.config();






app.listen(PORT,()=>{

    console.log(`${process.env.name?.toUpperCase()} is running on PORT: ${PORT}`);

})