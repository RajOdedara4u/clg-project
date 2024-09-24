import { NavLink } from "react-router-dom";

const AdminLogin = () => {
  return (
    <>
      <div className="h-screen w-screen  flex justify-center items-center">
        <div className="w-[100%]  bg-white ">
          <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-md shadow border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Welcome Back!!
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        ID
                      </label>
                      <input
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Admin"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required=""
                      />
                    </div>
                    <div className="flex gap-3">
                      <NavLink
                        to="/dashboard?admin=true"
                        className="w-[50%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        LOGIN
                      </NavLink>
                      <NavLink
                        to="/dashboard?admin=false"
                        className="w-[50%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        LOGIN
                      </NavLink>
                    </div>
                    <div className="flex items-center justify-end">
                      <NavLink
                        to="/login"
                        className="text-sm font-medium text-primary-600 hover:underline"
                      >
                        Goto User Login
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default AdminLogin;
