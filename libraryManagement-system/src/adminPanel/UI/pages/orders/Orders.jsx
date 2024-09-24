import Header from "../../commonComponents/Header";
import SingleOrder from "./SingleOrder";

const Orders = () => {
  const orderData = [
    {
      id: 1,
      name: "John Doe",
      mail: "john@example.com",
      through: "Online",
      city: "New York",
      address: "123 Main St",
      contact: "123-456-7890",
      date: "2024-09-05",
      items: "Item1, Item2",
      amount: "$100",
      method: "Credit Card",
      status: "Shipped",
    },
    {
      id: 2,
      name: "John Doe",
      mail: "john@example.com",
      through: "Online",
      city: "New York",
      address: "123 Main St",
      contact: "123-456-7890",
      date: "2024-09-05",
      items: "Item1, Item2",
      amount: "$100",
      method: "Credit Card",
      status: "Shipped",
    },
    {
      id: 3,
      name: "John Doe",
      mail: "john@example.com",
      through: "Online",
      city: "New York",
      address: "123 Main St",
      contact: "123-456-7890",
      date: "2024-09-05",
      items: "Item1, Item2",
      amount: "$100",
      method: "Credit Card",
      status: "Shipped",
    },
    // Add more order orders here
  ];

  return (
    <>
      <div className="sm:flex bg-slate-300 w-screen">
        <div className="header lg:w-[20%] sm:w-[25%] w-full"><Header /></div>
        <div className="lg:w-[80%] sm:w-[75%] w-full">
          <h1 className="text-[2rem] font-semibold text-center mt-10">
            Orders
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] mx-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Order Id
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Customer Name
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Through
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    City
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Order Date
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Items
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Total Amount
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Payment Method
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderData.length > 0 ? (
                  orderData.map((order) => (
                    <SingleOrder
                      key={order.id}
                      id={order.id}
                      name={order.name}
                      mail={order.mail}
                      through={order.through}
                      city={order.city}
                      address={order.address}
                      contact={order.contact}
                      date={order.date}
                      items={order.items}
                      amount={order.amount}
                      method={order.method}
                      status={order.status}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="12" className="px-6 py-3 text-center">
                      No orders available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
