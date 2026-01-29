import { useState, useEffect } from "react";

const useTasks = (apiUrl) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savingId, setSavingId] = useState(null);
  const [creating, setCreating] = useState(false);
  const [deletingId, setDeletingId] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Failed to fetch tasks");
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [apiUrl]);

  const toggleTask = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };

    setTasks((prev) => prev.map((t) => (t.id === task.id ? updatedTask : t)));

    setSavingId(task.id);

    try {
      const res = await fetch(`${apiUrl}/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (!res.ok) {
        throw new Error("Failed to update task");
      }
    } catch (err) {
      setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));

      alert(err.message);
    } finally {
      setSavingId(null);
    }
  };

  const addTask = async (title) => {
    const tempTask = {
      id: crypto.randomUUID(), // temporary ID
      title: title,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((prev) => [tempTask, ...prev]);
    setCreating(true);

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: tempTask.title,
          completed: false,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create task");
      }

      const savedTask = await res.json();

      setTasks((prev) =>
        prev.map((t) => (t.id === tempTask.id ? savedTask : t)),
      );
    } catch (err) {
      // 3️⃣ Rollback on failure
      setTasks((prev) => prev.filter((t) => t.id !== tempTask.id));
      alert(err.message);
    } finally {
      setCreating(false);
    }
  };

  const deleteTask = async (task) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
    setDeletingId(task.id);

    try {
      const res = await fetch(`${apiUrl}/${task.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete task");
      }
    } catch (err) {
      setTasks((prev) => [task, ...prev]);
      alert(err.message);
    } finally {
      setDeletingId(null);
    }
  };

  return {
    tasks,
    loading,
    error,
    savingId,
    creating,
    deletingId,
    addTask,
    toggleTask,
    deleteTask,
  };
};

export default useTasks;
