import { useState } from "react";

const MapForm = () => {
  const [contactData, setContactData] = useState({
    email:'',
    subject:'',
    message:''
  })


  const sendContact =async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData), // Send form data as JSON
      });

      if (response.ok) {
        const result = await response.json();
        const status = await response.status;
        const message = {data:result,Status:status};
        console.log("Form submitted",message);
        // Handle successful response
      } else {
        console.error('Form submission failed:', response.statusText);
        // Handle server errors
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle network errors
    }
  }
  return (
    <>
      <div className="w-full  px-4 sm:px-6 lg:px-8 bg-[#1c213e]  md:pb-20  pb-10 ">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center md:px-20">
          <div className="lg:col-span-3">
            <section className="">
              <div className=" px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
                  Contact Us
                </h2>

                <form onSubmit={sendContact} className="space-y-8">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      onChange={(e)=>{contactData.email = e.target.value}}
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="name@flowbite.com"
                      required = {true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      onChange={(e)=>{contactData.subject = e.target.value}}
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Let us know how we can help you"
                      required = {true}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      onChange={(e)=>{contactData.message = e.target.value}}
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Leave a comment..."
                      required = {true}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 active:text-black"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 w-full  h-[300px] sm:h-[500px]  pt-8 md:p-6 lg-p-10  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.5596295237488!2d75.83378127516197!3d25.15057487774094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f856d31549abf%3A0xba5bf142357b1028!2sStar%20library!5e0!3m2!1sen!2sin!4v1725179537340!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 , borderRadius : 10 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapForm;
