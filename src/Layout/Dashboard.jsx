import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const [cart] = useCart();

    //TODO: Load data from the server to have dynamic is admin based on data
    // const isAdmin = true;
    const [isAdmin]=useAdmin();

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminhome'><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'><FaUtensils />Add an Item</NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'><FaWallet />Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'><FaBook />Manage Booking</NavLink></li>

                            <li><NavLink to='/dashboard/allusers'><FaUsers />All Users</NavLink></li>

                        </> : <>

                            <li><NavLink to='/dashboard/userhome'><FaHome />User Home</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/mycart'><FaShoppingCart />My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>
                            </li>
                            <li><NavLink to='/dashboard/history'><FaWallet />Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'><FaCalendarAlt />Reservations</NavLink></li>
                        </>
                    }



                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li><NavLink to='/menu'>Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order Food</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;