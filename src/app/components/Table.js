import React from "react";

const Table = (props) => {
  return (
    <div className="overflow-x-auto px-12 m-4 flex flex-col justify-center">
      {props.posts.length === 0 ? (
        <p className="text-center mt-4 text-gray-600">No results found.</p>
      ) : (
        <table className="table-auto w-full table-md">
          <thead>
            <tr>
              <th className="text-center px-4 py-2">Id</th>
              <th className="text-center px-4 py-2">Title</th>
              <th className="text-center px-4 py-2">Body</th>
              <th className="text-center px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.posts.map((post) => (
              <tr key={post.id} className="border-b">
                <td className="px-4 py-2" data-label="Id">
                  {post.id}
                </td>
                <td className="px-4 py-2" data-label="Title">
                  {post.title}
                </td>
                <td className="px-4 py-2" data-label="Body">
                  {post.body}
                </td>
                <td className="px-4 py-2 flex flex-col gap-y-2 align-middle  justify-center">
                  <button
                    onClick={() => props.setEditPost(post)}
                    className="btn btn-outline btn-xs btn-primary"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      props.deletePost(post.id);
                      document.getElementById("delete").showModal();
                    }}
                    className="btn btn-outline btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <dialog id="delete" className="modal p-4">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center p-5">
            Deleted Successfully!
          </h3>
        </div>
      </dialog>
    </div>
  );
};

export default Table;
