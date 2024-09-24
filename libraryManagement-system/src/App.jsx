import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import React, { Suspense, lazy } from "react";
import "./App.css";

// Use React.lazy to dynamically import components
const Home = lazy(() => import("./components/Home"));
const SingleBook = lazy(() => import("./components/miniComponents/SingleBook"));
const Login = lazy(() =>
  import("./components/miniComponents/loginSignup/Login")
);
const Signup = lazy(() =>
  import("./components/miniComponents/loginSignup/Signup")
);
const Cart = lazy(() => import("./components/miniComponents/Cart/Cart"));

// Admin Pages
const AdminLogin = lazy(() =>
  import("./components/miniComponents/loginSignup/AdminLogin")
);
const AddSAdmin = lazy(() =>
  import("./adminPanel/UI/pages/superadmin/AddSAdmin")
);
const Dashboard = lazy(() => import("./adminPanel/UI/pages/Dashboard"));
const Orders = lazy(() => import("./adminPanel/UI/pages/orders/Orders"));
const Inbox = lazy(() => import("./adminPanel/UI/pages/inbox/Inbox"));
const Users = lazy(() => import("./adminPanel/UI/pages/users/Users"));
const Billing = lazy(() => import("./adminPanel/UI/pages/ecommerce/Bill"));
const SuperAdmins = lazy(() =>
  import("./adminPanel/UI/pages/superadmin/Superadmins")
);
const Invoice = lazy(() =>
  import("./adminPanel/UI/pages/ecommerce/invonce/Invonce")
);
const AddProduct = lazy(() =>
  import("./adminPanel/UI/pages/productPages/AddProduct")
);
const DeleteProduct = lazy(() =>
  import("./adminPanel/UI/pages/productPages/DelateProduct")
);
const Checkout = lazy(() =>
  import("./components/miniComponents/Cart/checkout/Checkout")
);
const Placed = lazy(() => import("./components/miniComponents/Cart/Placed"));
const Projects = lazy(() =>
  import("./components/miniComponents/projects/Home")
);
const Todolist = lazy(() =>
  import("./components/miniComponents/projects/Todolist")
);
const Message = lazy(() => import("./adminPanel/UI/pages/inbox/Message"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen bg-black">
            <div className="flex space-x-2">
              {/* First Ball */}
              <div
                className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
                style={{
                  animationDuration: "0.6s",
                  animationTimingFunction:
                    "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                  animationIterationCount: "infinite",
                }}
              ></div>
              {/* Second Ball */}
              <div
                className="w-4 h-4 bg-red-500 rounded-full animate-bounce"
                style={{
                  animationDelay: "0.1s",
                  animationDuration: "0.6s",
                  animationTimingFunction:
                    "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                  animationIterationCount: "infinite",
                }}
              ></div>
              {/* Third Ball */}
              <div
                className="w-4 h-4 bg-green-500 rounded-full animate-bounce"
                style={{
                  animationDelay: "0.2s",
                  animationDuration: "0.6s",
                  animationTimingFunction:
                    "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                  animationIterationCount: "infinite",
                }}
              ></div>
            </div>
          </div>
        }
      >
        <Router>
          <ToastContainer />
          <Routes>
            {/* Public Routes */}
            <Route path="*" element={"Error"} />
            <Route path="/" element={<Home />} />
            <Route path="/singlebook/:name" element={<SingleBook />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/OurWork" element={<Projects />} />
            <Route path="/OurWork/TodoList" element={<Todolist />} />
            <Route
              path="/placed/:date/:method/:name/:address/:phone/:price/:items"
              element={<Placed />}
            />
            <Route path="/checkout/:items/:total" element={<Checkout />} />

            {/* Admin Routes */}
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/inbox/message/:id" element={<Message />} />
            <Route path="/users" element={<Users />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/superadmins" element={<SuperAdmins />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/delateproduct" element={<DeleteProduct />} />
            <Route path="/addsuperadmin" element={<AddSAdmin />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}
export default App;
