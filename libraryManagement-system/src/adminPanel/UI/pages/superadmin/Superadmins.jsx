import Header from "../../commonComponents/Header";
import SingleSAdmin from "./SingleSAdmin";
const SuperAdmins = () => {
  const sAdminData = [
    {
      ID: "3044",
      password: "ramesh@12334",
    },
    {
      ID: "3045",
      password: "mukesh@12334",
    },
    {
      ID: "3405",
      password: "akhil@12334",
    },
  ];

  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
      <div className="header md:w-[20%] sm:w-[25%] w-full"><Header /></div>
        <div className=" w-full ">
          <h1 className="text-[2rem] font-semibold text-center mt-20">
            SuperAdmins
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-5">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Password
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {sAdminData.map((obj, index) => (
                  <SingleSAdmin
                    key={index}
                    index={index}
                    id={obj.ID}
                    password={obj.password}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdmins;
