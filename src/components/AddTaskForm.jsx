import React from "react";

const AddTaskForm = ({ handleSubmit, text, setText, creating }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
    </>
  );
};

export default AddTaskForm;
