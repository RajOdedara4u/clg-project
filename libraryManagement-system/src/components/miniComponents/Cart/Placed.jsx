import { useParams } from "react-router-dom";
import Header from "../../commonComponents/Header";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Placed = () => {

  const { date, method, name, address, phone, price, items } = useParams();
  const [orderId, sOrderId] = useState(Math.floor(Math.random() *10000000))
  return (
    <>
      <Header />
      <section className="bg-white py-8 antialiased dark:bg-gray-900 sm:py-20 sm:h-screen">
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-20">
          <div className="mx-auto max-w-2xl px-4 2xl:px-0 ">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
              Thanks for your order!
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
              Your order{" "}
              <a
                href="#"
                className="font-medium text-gray-900 dark:text-white hover:underline"
              >
                {`#${orderId}`}
              </a>{" "}
              will be processed within 24 hours during working days. We will
              notify you by email once your order has been shipped.
            </p>
            <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Items
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  {items}
                </dd>
              </dl>
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Price
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  {price}
                </dd>
              </dl>
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Date
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  {date}
                </dd>
              </dl>
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Payment Method
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  {method}
                </dd>
              </dl>
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Name
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  {name}
                </dd>
              </dl>
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Address
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  {address}
                </dd>
              </dl>
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Phone
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  +91 {phone}
                </dd>
              </dl>
            </div>
            <div className="flex items-center space-x-4">
              <NavLink
                to="/"
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Return to shopping
              </NavLink>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Placed;
