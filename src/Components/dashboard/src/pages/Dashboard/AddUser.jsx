const AddUser = () => {
  return (
    <dialog id="my_modal_3" className="modal">
      <form method="dialog" className="modal-box w-11/12 max-w-5xl">
        <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
          ✕
        </button>
        <h1 className="text-2xl font-bold text-center mt-2 ">
          Let&apos;s set up your user profile with some basic information
        </h1>
        <form className="w-full">
          <div className="grid grid-cols-2 gap-5 mt-8 mb-3">
            <div>
              <input
                type="text"
                name="name"
                placeholder="User Full Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="text"
                name="number"
                placeholder="Conatct Number"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="text"
                name="identity"
                placeholder="Identity Proof"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                placeholder="Address Lane 1"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Create Password*"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <input
                type="password"
                name="confirmpass"
                placeholder="Confirm Password"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="modal-action justify-center">
            <button className="btn btn-primary px-12">Add User</button>
          </div>
        </form>
      </form>
    </dialog>
  );
};

export default AddUser;
