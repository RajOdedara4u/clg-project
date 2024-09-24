import Header from "../../commonComponents/Header";
import { useState } from "react";

const UpdateProduct = () => {
  const [inp1, sinp1] = useState();
  const [inp2, sinp2] = useState();
  const [inp3, sinp3] = useState();
  const [inp4, sinp4] = useState();
  const [inp5, sinp5] = useState();

  const err = document.getElementById("error");
  const success = document.getElementById("success");

  const checkData = () => {
    inp1 && inp2 && inp3 && inp4 && inp5
      ? (success.innerHTML = "Success...")((err.innerHTML = ""))
      : (err.innerHTML = "Please Fill All Field")((success.innerHTML = ""));
  };
  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
      <div className="header md:w-[20%] sm:w-[25%] w-full"><Header /></div>
        <div className=" w-full ">
          <h1 className="text-[2rem] font-semibold text-center mt-20">
            Update PRODUCT
          </h1>
          <div className="max-w-md mx-auto p-4 flex flex-col gap-2">
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(obj) => sinp1(obj.target.value)}
                name="floating_email"
                className="block py-2.5 px-0 w-full text-sm    bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm   text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Product Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(obj) => sinp2(obj.target.value)}
                name="floating_email"
                className="block py-2.5 px-0 w-full text-sm    bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm   text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Image
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(obj) => sinp3(obj.target.value)}
                name="floating_Description"
                className="block py-2.5 px-0 w-full text-sm    bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm   text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Description
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(obj) => sinp4(obj.target.value)}
                type="Description"
                name="repeat_Description"
                className="block py-2.5 px-0 w-full text-sm    bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm   text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Real Price
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(obj) => sinp5(obj.target.value)}
                type="Description"
                name="repeat_Description"
                className="block py-2.5 px-0 w-full text-sm    bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm   text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Sell Price
              </label>
            </div>
            <div className=" flex">
              <div className="relative z-0 group text-red-500" id="error"></div>
              <br />
              <div
                className="relative z-0    group text-green-500"
                id="success"
              ></div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={checkData}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
