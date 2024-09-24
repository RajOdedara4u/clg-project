import React from "react";
import { Link } from "react-router-dom";

const Message = ({ email, message, subject }) => {
  return (
    <Link
      to={`/inbox/message/${subject}`}
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 lg:w-[45%] md:w-[45%] w-full overflow-hidden"
    >
      <h5 className="mb-2  text-[1.1rem] font-bold tracking-tight text-gray-900">
        {email}
      </h5>{" "}
      <h1 className=" text-[0.8rem] text-gray-900 font-semibold">
        {subject}:
        <p className="font-normal text-[0.8rem] text-gray-700">{message}</p>
      </h1>
    </Link>
  );
};

export default Message;
