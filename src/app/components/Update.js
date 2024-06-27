import React, { useState } from "react";

const Update = ({ post, onClose, onSave }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSave = () => {
    const updatedPost = { ...post, title, body };
    onSave(updatedPost);
    openModal();
  };

  const openModal = () => {
    document.getElementById("UPDATE").showModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl mb-4">Update Post</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="btn btn-outline mr-3 btn-xs">
            Cancel
          </button>
          <button onClick={handleSave} className="btn btn-outline btn-xs">
            Update
          </button>

          <dialog id="UPDATE" className="modal p-4 fixed inset-1">
            <div className="modal-box">
              <form method="dialog">
                <button
                  type="button"
                  onClick={() => document.getElementById("UPDATE").close()}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2"
                >
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg text-center p-5">
                Updated Successfully!
              </h3>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Update;
