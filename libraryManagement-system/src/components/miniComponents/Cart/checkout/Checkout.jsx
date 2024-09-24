import Header from "../../../commonComponents/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Checkout = () => {
  const { items, total } = useParams();

  // Convert getlastPrice to an integer, default to 0 if conversion fails
  const lastPrice = parseInt(total, 10) || 0;

  // Calculate tax and discount
  const tax = lastPrice % 5;
  const discount = lastPrice % 10;

  // Calculate final price
  const realPrice = lastPrice + tax - discount;

  const [pt, spt] = useState("COD");
  const [date, sdate] = useState(29 - 2 - 24);
  const [name, sname] = useState();
  const [mail, smail] = useState();
  const [city, scity] = useState();
  const [through, sthrough] = useState();
  const [contact, scontact] = useState();
  const [address, saddress] = useState();
  return (
    <>
      <Header />

      <section className="bg-white py-8 antialiased dark:bg-gray-900 sm:py-16 ">
        <ol className="items-center flex flex-col sm:flex-row w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base pl-5 pt-5 max-[600px]:py-5  md:mt-5 ">
          <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span className="flex items-center after:mx-2 text-blue-500 after:content-['/'] sm:after:hidden">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="blue"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Cart
            </span>
          </li>

          <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span className="flex items-center after:mx-2  after:content-['/'] text-blue-500 sm:after:hidden">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="blue"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Checkout
            </span>
          </li>

          <li className="flex shrink-0 items-center">
            <svg
              className="me-2 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Order Placed
          </li>
        </ol>

        <form
          action="#"
          className="mx-auto max-w-screen-xl px-4 2xl:px-0  md:pt-5"
        >
          <div className="mt-4 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Delivery Details
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                  <div>
                    <span
                      htmlFor="your_name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name{" "}
                    </span>
                    <input
                      type="text"
                      onChange={(obj) => sname(obj.target.value)}
                      id="your_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Bonnie Green"
                      required
                    />
                  </div>

                  <div>
                    <span
                      htmlFor="your_email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Your email*{" "}
                    </span>
                    <input
                      type="email"
                      onChange={(obj) => smail(obj.target.value)}
                      id="your_email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        htmlFor="select-country-input-3"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        How You Reach This site
                      </span>
                    </div>
                    <select
                      onChange={(obj) => sthrough(obj.target.value)}
                      id="select-country-input-3"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option defaultValue="Social Media">Social Media</option>
                      <option value="ads">Ads</option>
                      <option value="poster,Banner">Poster,Banner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        htmlFor="select-city-input-3"
                        className=" text-sm font-medium text-gray-900 dark:text-white flex items-center"
                      >
                        City*
                        <p
                          id="credit-card-text"
                          className="text-xs font-normal text-gray-500 dark:text-gray-400 pl-3"
                        >
                          More service's soon...
                        </p>
                      </span>
                    </div>
                    <select
                      onChange={(obj) => scity(obj.target.value)}
                      id="select-city-input-3"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option defaultValue="kota">kota</option>
                    </select>
                  </div>

                  <div>
                    <span
                      htmlFor="phone-input-3"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Phone Number*{" "}
                    </span>
                    <div className="flex items-center">
                      <button
                        id="dropdown-phone-button-3"
                        data-dropdown-toggle="dropdown-phone-3"
                        className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 me-2"
                          viewBox="0 0 300 115"
                          fill="none"
                          aria-hidden="true"
                        >
                          <rect width="300" height="60" y="0" fill="#FF9933" />
                          <rect width="300" height="60" y="60" fill="#FFFFFF" />
                          <rect
                            width="300"
                            height="60"
                            y="120"
                            fill="#138808"
                          />

                          <circle cx="150" cy="90" r="25" fill="#000080" />

                          <line
                            x1="150"
                            y1="65"
                            x2="150"
                            y2="115"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          />
                          <line
                            x1="125"
                            y1="90"
                            x2="175"
                            y2="90"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          />
                          <line
                            x1="132.5"
                            y1="72.5"
                            x2="167.5"
                            y2="107.5"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          />
                          <line
                            x1="132.5"
                            y1="107.5"
                            x2="167.5"
                            y2="72.5"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          />

                          {[...Array(24).keys()].map((i) => {
                            const angle = i * 15 * (Math.PI / 180);
                            const x1 = 150 + 25 * Math.cos(angle);
                            const y1 = 90 - 25 * Math.sin(angle);
                            const x2 = 150 + 40 * Math.cos(angle);
                            const y2 = 90 - 40 * Math.sin(angle);
                            return (
                              <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="#FFFFFF"
                                strokeWidth="1"
                              />
                            );
                          })}
                        </svg>
                        +91
                      </button>

                      <div className="relative w-full">
                        <input
                          type="text"
                          onChange={(obj) => scontact(obj.target.value)}
                          id="phone-input"
                          className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          placeholder="123-456-7890"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                      Pin Code
                    </span>
                    <input
                      id="otherContact"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="3623400"
                      required
                    />
                  </div>

                  <div>
                    <span
                      htmlFor="company_name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </span>
                    <textarea
                      onChange={(obj) => saddress(obj.target.value)}
                      id="company_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="address"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Payment
                </h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="pay-on-delivery"
                          aria-describedby="pay-on-delivery-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <span
                          htmlFor="pay-on-delivery"
                          className="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Payment on delivery{" "}
                        </span>
                        <p
                          id="pay-on-delivery-text"
                          className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          +$15 payment processing fee
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div
                      className="flex items-start"
                      style={{ pointerEvents: "none", opacity: 0.5 }}
                    >
                      <div className="flex h-5 items-center">
                        <input
                          id="credit-card"
                          aria-describedby="credit-card-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <span
                          htmlFor="credit-card"
                          className="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Credit Card{" "}
                        </span>
                        <p
                          id="credit-card-text"
                          className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Pay with your credit card
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                    style={{ pointerEvents: "none", opacity: 0.5 }}
                  >
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="paypal-2"
                          aria-describedby="paypal-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <span
                          htmlFor="paypal-2"
                          className="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Paypal account{" "}
                        </span>
                        <p
                          id="paypal-text"
                          className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Connect to your account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Items
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {items}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      SublastPrice
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ${lastPrice}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Discount
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ${lastPrice % 10}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-500">
                      -${lastPrice % 10}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      +${lastPrice % 5}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      lastPrice
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      ${realPrice}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="space-y-3">
                <NavLink
                  to={`/placed/${date}/${pt}/${name}/${address}/${contact}/${realPrice}/${items}`}
                  className="flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Placed Order
                </NavLink>

                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  One or more items in your cart require an account.{" "}
                  <a
                    href="#"
                    title=""
                    className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Sign in or create an account now.
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default Checkout;
