import { useState, useEffect } from "react";

const API_URL = "https://697a6a160e6ff62c3c595a8d.mockapi.io/api/v1/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(API_URL);
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
  }, []);

  const formatDateTime = (isoString) => new Date(isoString).toLocaleString();

  const handleToggle = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };

    setTasks((prev) => prev.map((t) => (t.id === task.id ? updatedTask : t)));

    setSavingId(task.id);

    try {
      const res = await fetch(`${API_URL}/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: updatedTask.completed,
        }),
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

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!newTitle.trim()) return;

    const tempTask = {
      id: crypto.randomUUID(), // temporary ID
      title: newTitle,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((prev) => [tempTask, ...prev]);
    setCreating(true);
    setNewTitle("");

    try {
      const res = await fetch(API_URL, {
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

      // 2️⃣ Replace temp task with real one
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

  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  if (loading) return <p className="p-4">Loading…</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-6 space-y-2">
      <form onSubmit={handleCreate} className="mb-6 flex gap-2">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add a task…"
          className="flex-1 p-2 border rounded"
          disabled={creating}
        />

        <button
          type="submit"
          disabled={creating}
          className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
        >
          {creating ? "Adding…" : "Add"}
        </button>
      </form>
      {sortedTasks.map((task) => (
        <div key={task.id} className="flex gap-5 bg-white p-3 rounded shadow">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task)}
          />
          <p
            className={
              task.completed ? "line-through text-gray-400" : "text-gray-900"
            }
          >
            {task.title}
          </p>
          <p className="text-gray-500">
            Created at: {formatDateTime(task.createdAt)}
          </p>
          <span className="text-xs text-gray-400">
            {savingId === task.id ? "Saving…" : ""}
          </span>
        </div>
      ))}
    </div>
  );
};

export default App;
