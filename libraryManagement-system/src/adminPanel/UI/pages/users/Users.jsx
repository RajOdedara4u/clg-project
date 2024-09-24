import { useEffect, useState } from "react";
import Header from "../../commonComponents/Header";
import SingleUser from "./SingleUser";
const Users = () => {
  
  const [Users, setUsers] = useState([])
  const queryparams = new URLSearchParams(window.location.search)

  const getUsers = async () => {
    const response = await fetch("http://localhost:5000/getusers");
    const users = await response.json();
    console.log(users);
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
    const intervalId = setInterval(getUsers, 3000); // Fetch every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

const isAdmin = queryparams.get('admin');

  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
      <div className="header md:w-[20%] sm:w-[25%] w-full"><Header /></div>
        <div className=" w-full ">
          <h1 className="text-[2rem] font-semibold text-center mt-10">{isAdmin || Users.length > 0 ?`Users in site ${Users.length}`:"Are you not admin"}</h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-5">
            {isAdmin && Users.length > 0?
            <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {Users.map((obj, index) => (
                <SingleUser
                  key={index}
                  index={index}
                  email={obj.email}
                />
              ))}
            </tbody>
          </table>:
          null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;