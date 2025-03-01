
const app = require('./src/app')
require('dotenv').config();
const { createTodoTable } = require("./src/models/todo.model");

const PORT = process.env.PORT || '3001'

// app.get('/',(req,res)=>{
//     console.log('hi');
//     res.send('hi')
// })

app.listen(PORT,async()=>{
    await createTodoTable(); 
    console.log(`server serves on ${PORT}`);
})