import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {

    const [axiosSecure]=useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handelMakeAdmin = user => {
        fetch(`https://bistro-boss-server-rahulsaha1998.vercel.app/users/admin/${user._id}`,{
            method: 'PATCH',

        })
        .then(res=> res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handelDelete = user => {

    }


    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro | All Users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">
                Total User: {users.length}
            </h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Role</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>  <tr
                            key={user._id}
                            >
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role === 'admin' ? 'admin' :
                                    <button onClick={()=>handelMakeAdmin(user)} className="btn btn-ghost bg-orange-600 text-white"><FaUserShield/></button> 
                                    }</td>
                                <td><button onClick={() => handelDelete(user)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt /></button></td>
                            </tr>)
                        }
                       

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;