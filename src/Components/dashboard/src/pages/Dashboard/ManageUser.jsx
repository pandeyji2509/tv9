import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const ManageUser = () => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Roles</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=996&t=st=1687638366~exp=1687638966~hmac=988570e261d14138dd801dba1dfde39afc40280e2cf2dce715ad58c0fa929872"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">Hart Hagerty</div>
              </td>
              <th>Application Manager</th>
              <th>employee@pendler.com</th>
              <th>0123456789</th>
              <th className="text-primary">Today(22:45)</th>
              <th className="text-primary flex justify-items-center gap-2 text-lg mt-3">
                <p><FaEdit></FaEdit></p>
                <p><FaTrashAlt></FaTrashAlt></p>
                <p><FaEye></FaEye></p>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
