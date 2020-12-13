module.exports = function(app){
    var tasks = require('../controllers/taskController')
    app.route('/tasks')
      .get(tasks.get_all_tasks)
      .post(tasks.create_a_task);
    app.route('/tasks/:id')
      .get(tasks.read_a_task)
		  .put(tasks.update_a_task)
		  .delete(tasks.delete_a_task);

}
