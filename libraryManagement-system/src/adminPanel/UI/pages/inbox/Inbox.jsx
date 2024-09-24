import React, { useState, useEffect } from "react";
import Header from "../../commonComponents/Header";
import Message from "./Message";

const Inbox = () => {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const response = await fetch("http://localhost:5000/contact");
    const messages = await response.json();
    setMessages(messages);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
        <div className="header md:w-[20%] sm:w-[25%] w-full">
          <Header />
        </div>
        <div className=" w-full sm:w-[80%]">
          <h1 className="text-[2rem] font-semibold text-center my-5 sm:my-10">
            Message's
          </h1>
          <div className=" p-4 flex flex-wrap gap-x-5 gap-y-5 justify-center">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <Message
                  key={index}
                  email={msg.email}
                  subject={msg.subject}
                  message={msg.message}
                />
              ))
            ) : (
              <h1 className="text-center w-full text-2xl font-semibold">
                There are no messages here
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Inbox;
