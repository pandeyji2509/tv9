import { FaPlusCircle } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const PostManagement = () => {
  return (
    <div className="w-full">
      <div className="navbar px-8">
        <div className="flex gap-8 navbar-start">
          <p className="text-xl font-medium">
            <NavLink
              className={({ isActive }) => (isActive ? "" : "text-base-300")}
              to=""
            >
              Manage Post
              {/* <hr className="h-1.5 w-12 bg-neutral"/> */}
            </NavLink>
          </p>
        </div>
        <div className="navbar-end flex gap-5 text-primary">
          <button
            onClick={() => window.my_modal_2.showModal()}
            className="btn btn-ghost btn-sm border-2 border-primary bg-primary bg-opacity-5"
          >
            <FaPlusCircle></FaPlusCircle> Add Post
          </button>
        </div>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default PostManagement;
