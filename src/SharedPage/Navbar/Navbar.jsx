import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-[#085251;] text-yellow-400 text-start">
            <div className="navbar-start">
                <div className="dropdown">

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Chef</a></li>s
                        <li><a>Imprint</a></li>
                        <li><a>Post</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Cricket Australia</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <Link to={'/'}><li><a>Home</a></li></Link>
                    <Link to={'/chefs'}><li><a className="hover:text-white" >Chef</a></li></Link>
                    <Link to={'/about'}><li><a className="hover:text-white">About Us </a></li></Link>
                    <Link to={'/addPlayer'}><li><a className="hover:text-white">Add Player</a></li></Link>
                    <Link to={'/imprint'}><li><a className="hover:text-white">Imprint</a></li></Link>
                    <Link to={'/post'}><li><a className="hover:text-white">Post</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/login'}><a className="btn">Login</a></Link>
            </div>
        </div>
    );
};

export default Navbar;