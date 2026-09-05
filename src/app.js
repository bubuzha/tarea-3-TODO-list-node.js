const express = require('express');
const taskRouter = require('./routes/tasks');
const taskSoap = require('./soap/tasks');
const logger = require('./utils/logger');
const fs = require('fs');
const soap = require('soap');
const path = require('path');



const app = express();
app.use(express.json()),

app.use('/api/tasks', taskRouter);
app.use((request, response)=>{
    logger.warn("Not Found");
    response.status(404).send("Not found");
})


const server= app.listen(3000, ()=>{
    logger.info("El servidor esta activo y corriendo el puerto 3000");
    const wsdlPath = path.join(__dirname, 'soap', 'taskService.wsdl');

    const wsdl = fs.readFileSync(wsdlPath, 'utf8');

    
    soap.listen(server, '/wsdl', taskSoap, wsdl);

//holaaa

});
