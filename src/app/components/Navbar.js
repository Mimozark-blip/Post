import React, { useState } from "react";

const Navbar = ({ addPost }) => {
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const handleAddPost = (e) => {
    e.preventDefault();
    addPost(newPost);
    setNewPost({ title: "", body: "" });
    document.getElementById("add").close();
  };

  return (
    <div>
      <div className="navbar p-4 md:p-8 lg:p-8 border-b-2">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <h1 className="font-sans font-semibold text-xl">Post</h1>
          </a>
        </div>
        <div className="flex gap-4">
          <div>
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                value="dark"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />

              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>

              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            </label>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="Add Post">
            <button
              className="btn btn-circle btn-outline btn-small"
              onClick={() => document.getElementById("add").showModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            {/* Modal for adding a new post */}
            <dialog
              id="add"
              className="modal fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-8"
            >
              <div className="modal-box bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-left text-xl mb-4">Add Post</h2>
                <form onSubmit={handleAddPost} className="space-y-4" id="form">
                  <div className="mb-4 text-left">
                    <label className="text-left text-sm font-bold mb-2">
                      Title
                    </label>
                    <input
                      className="input input-bordered w-full"
                      value={newPost.title}
                      onChange={(e) =>
                        setNewPost({ ...newPost, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label className="text-left text-sm font-bold mb-2">
                      Body
                    </label>
                    <textarea
                      className="textarea textarea-bordered w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      value={newPost.body}
                      onChange={(e) =>
                        setNewPost({ ...newPost, body: e.target.value })
                      }
                    />
                  </div>
                  <div className="modal-action flex justify-end">
                    <button
                      type="button"
                      onClick={() => document.getElementById("add").close()}
                      className="btn btn-outline btn-xs"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-outline btn-xs"
                      onClick={() => document.getElementById("ADD").showModal()}
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
            <dialog id="ADD" className="modal p-4">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg text-center p-5">
                  Addded Successfully!
                </h3>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
