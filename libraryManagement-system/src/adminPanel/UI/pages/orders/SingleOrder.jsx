const SingleOrder = ({
  id,
  name,
  address,
  date,
  amount,
  method,
  mail,
  city,
  through,
  contact,
  items,
  status,
}) => {
  return (
    <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
      <td className="px-6 py-4 text-gray-900 font-medium hidden md:table-cell">
        {id}
      </td>
      <td className="px-6 py-4 text-gray-900 font-medium hidden md:table-cell">
        {name}
      </td>
      <td className="px-6 py-4 hidden md:table-cell">{mail}</td>
      <td className="px-6 py-4 hidden md:table-cell">{through}</td>
      <td className="px-6 py-4 hidden md:table-cell">{city}</td>
      <td className="px-6 py-4 hidden md:table-cell">{address}</td>
      <td className="px-6 py-4 hidden md:table-cell">{contact}</td>
      <td className="px-6 py-4 hidden md:table-cell">{date}</td>
      <td className="px-6 py-4 hidden md:table-cell">{items}</td>
      <td className="px-6 py-4 hidden md:table-cell">{amount}</td>
      <td className="px-6 py-4 hidden md:table-cell">{method}</td>
      <td className="px-6 py-4 hidden md:table-cell">
        <span
          className={`font-medium ${
            status === "Shipped" ? "text-green-600" : "text-yellow-600"
          }`}
        >
          {status}
        </span>
      </td>

      {/* Mobile View */}
      <td className="md:hidden px-6 py-4 border-t border-gray-200">
        <div className="block text-sm font-medium text-gray-900">
          <div className="font-semibold">Order ID:</div> {id}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Customer Name:</div> {name}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Email:</div> {mail}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Through:</div> {through}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">City:</div> {city}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Address:</div> {address}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Contact:</div> {contact}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Order Date:</div> {date}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Items:</div> {items}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Total Amount:</div> {amount}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Payment Method:</div> {method}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Status:</div>
          <span
            className={`font-medium ${
              status === "Shipped" ? "text-green-600" : "text-yellow-600"
            }`}
          >
            {status}
          </span>
        </div>
      </td>
    </tr>
  );
};

export default SingleOrder;
