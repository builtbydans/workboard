import { useState } from "react";
import useTasks from "../../hooks/useTasks";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";

const API_URL = "https://697a6a160e6ff62c3c595a8d.mockapi.io/api/v1/tasks";

const Tasks = () => {
  const {
    tasks,
    loading,
    error,
    savingId,
    creating,
    deletingId,
    addTask,
    toggleTask,
    deleteTask,
  } = useTasks(API_URL);

  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addTask(newTitle);
    setNewTitle("");
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  if (loading) return <p className="p-4">Loading…</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-6 space-y-2">
      <img
        src="https://e-i-b.com/wp-content/uploads/2023/08/watchhouse-logo.png"
        width={300}
        alt="watchHouseLogo"
        style={{ filter: "brightness(0%)" }}
      />
      <AddTaskForm
        handleSubmit={handleSubmit}
        text={newTitle}
        setText={setNewTitle}
        creatingId={creating}
      />
      <TaskList
        tasks={sortedTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        deletingId={deletingId}
        savingId={savingId}
      />
    </div>
  );
};

export default Tasks;
