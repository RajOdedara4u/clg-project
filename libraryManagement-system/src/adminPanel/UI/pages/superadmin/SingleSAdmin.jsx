const SingleSAdmin = ({ index, id, password }) => {
  return (
    <>
      <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
        <td className="px-6 py-4 font-medium text-gray-900 ">{index}</td>
        <td className="px-6 py-4">{id}</td>
        <td className="px-6 py-4">{password}</td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-red-600 hover:underline">
            Delate
          </a>
        </td>
      </tr>
    </>
  );
};

export default SingleSAdmin;
