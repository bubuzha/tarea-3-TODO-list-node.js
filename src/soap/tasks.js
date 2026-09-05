const taskService = require('../services/taskService');
const logger = require('../utils/logger');

module.exports = {
    TaskService:{
        TaskServicePort: {
            GetTasks(args, callback){
                const task = taskService.getTasks()
                logger.info("Lista de tareas enviada en soap");
                callback({tasks: task});
            },
            AddTask(args, callback){
                const task = taskService.createTask(args.title);
                logger.info("Tarea creada en soap");
                callback({task});
            }
        }
        
    }
}