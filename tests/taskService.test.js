describe('taskService', ()=>{

    let taskService;

    beforeEach( ()=>{
        jest.resetModules();
        taskService = require('../src/services/taskService');
    });


    test('crear una tarea', ()=>{
        const task = taskService.createTask("Estudiar node.js");

        expect(task).toMatchObject({title: "Estudiar node.js", completed: false});
        expect(task.id).toBeDefined();

    });

    test('Consultar las tareas', ()=>{
        taskService.createTask('Sacar la basura');
        taskService.createTask('Pasear al perro');

        expect(taskService.getTasks()).toHaveLength(2);

    })

    test('Update task', ()=>{
        const task = taskService.createTask("Estudiar node.js");

        const updatedTask = taskService.updateTask(task.id,{completed: true});

        expect(updatedTask.completed).toBe(true);

    });

    test('Delete task', ()=>{
        const task = taskService.createTask("Estudiar node.js");
        const deleted = taskService.deleteTask(task.id);
        expect(deleted.id).toBe(task.id);
        expect(taskService.getTasks()).not.toContainEqual(deleted);
    });
});