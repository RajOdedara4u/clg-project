import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleUser = ({ index, email }) => {

  const deleteuser =async(email)=>{
    const response = await fetch("http://localhost:5000/deleteusers",{
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify({email})
    })

    const result = await response.json();
    const message = await result.message;
    const uemail = await result.email;
    toast.success(`User ${uemail} ${message}`)
  }

  return (
    <>
      <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
        <td className="px-6 py-4 font-medium text-gray-900 ">{index}</td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">
          <button onClick={(e)=>{
            e.preventDefault()
            deleteuser(email);
          }} className="font-medium text-red-600 hover:underline">
            Delate
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleUser;
