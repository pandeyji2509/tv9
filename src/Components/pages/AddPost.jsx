import { useEffect, useState } from "react";

const AddPost = () => {
    const [time, setTime] = useState(new Date());

    useEffect( () => {
        setInterval(() => setTime(new Date()),1000)
    },[])

  return (
    <dialog id="my_modal_2" className="modal">
      <form method="dialog" className="modal-box w-11/12 max-w-5xl">
        <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
          ✕
        </button>
        <h1 className="text-2xl font-bold text-center mt-2 ">
          Let&apos;s add a new post
        </h1>
        <form className="w-full">
          <div className="grid grid-cols-2 gap-5 mt-8 mb-3">
            <div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="text"
                name="author"
                placeholder="Author"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="text"
                name="tags"
                placeholder="Tags"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="file"
                name="image"
                placeholder="Image"
                className="file-input file-input-bordered file-input-primary w-full"
              />
            </div>
            <div>
              <input
                type="text"
                name="category"
                placeholder="Categories"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="text"
                name="currenttime"
                placeholder={`${time.toLocaleDateString()} ${time.toLocaleTimeString()}`}
                className="input input-bordered w-full"
                disabled
              />
            </div>
            <div className="col-span-2 w-full">
            <textarea className="textarea textarea-bordered textarea-sm w-full max-w-6xl" placeholder="Content"></textarea>
            </div>
          </div>
          <div className="modal-action justify-center">
            <button className="btn btn-primary px-12">Add New Post</button>
          </div>
        </form>
      </form>
    </dialog>
  );
};

export default AddPost;
