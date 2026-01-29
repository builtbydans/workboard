import { formatDateTime } from "../utils/date";

const TaskItem = ({ task, onToggle, onDelete, savingId, deletingId }) => {
  const isSaving = savingId === task.id;
  const isDeleting = deletingId === task.id;

  return (
    <div className="flex gap-5 bg-white p-3 rounded shadow">
      <input
        type="checkbox"
        checked={task.completed}
        disabled={isSaving}
        onChange={() => onToggle(task)}
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

      <button onClick={() => onDelete(task)} disabled={isDeleting}>
        {isDeleting ? "Deleting…" : "❌"}
      </button>

      {isSaving && <span className="text-xs text-gray-400">Saving…</span>}
    </div>
  );
};

export default TaskItem;
