import { toast } from "react-toastify";
import Header from "../../commonComponents/Header";
import { useState } from "react";

const AddProduct = () => {

  const [Product, setProduct] = useState({
    name : "",
    image : "",
    auther : "",
    desc : "",
    oPrice : "",
    price : "" ,
    category : "all" 
  })

  const err = document.getElementById("error");
  const success = document.getElementById("success");

  const handleselect = (event) => {
    Product.category = event.target.value;
    console.log(Product.category)
  }

  const addProduct = async() => {

    if(Product.name && Product.image && Product.auther && Product.desc && Product.oPrice && Product.price)
    {
      const response = await fetch("http://localhost:5000/addProducts",{
        method : "POST",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify(Product)
      })

      if(response.ok){
        const data = await response.json();
      console.log(data)
      toast.success(`${data.name} Book is added succesfully`)
      }
    }
    else{
      err.textContent = "Please Fill All Field"
      success.textContent = ""
    }
  };

  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
      <div className="header md:w-[20%] sm:w-[25%] w-full"><Header /></div>
        <div className=" w-full ">
          <h1 className="text-[2rem] font-semibold text-center mt-5">
            ADD PRODUCT
          </h1>
          <form className="max-w-md mx-auto p-4 flex flex-col gap-2" onSubmit={(e)=>{
            e.preventDefault();
            addProduct()
          }}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(obj) => {Product.name = obj.target.value}}
                name="name"
                className="block py-2.5 px-0 w-full text-sm    bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required={true}
              />
              <label className="peer-focus:font-medium absolute text-sm   text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Product Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(obj) => {Product.image = obj.target.value}}
                name="image"
                className="block py-2.5 px-0 w-full text-sm    bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required={true}
              />
              <label className="peer-focus:font-medium absolute text-sm   text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Image
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(obj) => Product.auther = obj.target.value}
                name="auther"
                className="block py-2.5 px-0 w-full text-sm    bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required={true}
              />
              <label className="peer-focus:font-medium absolute text-sm   text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Auther
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(obj) => Product.desc = obj.target.value}
                name="description"
                className="block py-2.5 px-0 w-full text-sm    bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required={true}
              />
              <label className="peer-focus:font-medium absolute text-sm   text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Description
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(obj) => Product.oPrice = obj.target.value}
                type="number"
                name="oPrice"
                className="block py-2.5 px-0 w-full text-sm    bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required={true}
              />
              <label className="peer-focus:font-medium absolute text-sm   text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Real Price
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(obj) => Product.price = obj.target.value}
                type="number"
                name="price"
                className="block py-2.5 px-0 w-full text-sm    bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required={true}
              />
              <label className="peer-focus:font-medium absolute text-sm   text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Sell Price
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
            <select
                onChange={handleselect}
                type="text"
                value={Product.category}
                name="category"
                className="block py-2.5 px-0 w-full text-sm    bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required={true}
              >
              <option value="all" defaultValue={true}>all</option>
              <option value="science fiction">science fiction</option>
              <option value="thriller">thriller</option>
              <option value="adventures">adventures</option>
              <option value="fantasy">fantasy</option>
              <option value="mystery">mystery</option>
              <option value="horror">horror</option>
              <option value="romance">romance</option>
              </select>
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
            >
              Add
            </button>
            <button
              type="reset"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
