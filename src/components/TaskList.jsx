import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask, savingId, deletingId }) => {
  return tasks.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      onToggle={toggleTask}
      onDelete={deleteTask}
      savingId={savingId}
      deletingId={deletingId}
    />
  ));
};

export default TaskList;
