
import React from "react";
import bg from "../images/image4.png";

function Contact() {
  return (
    <div>
    {/* PART-1 */}
      <section>
    <div style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
    className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12">
      
      <div className="max-w-4xl w-[600px] grid md:grid-rows-3 gap-8 text-center">
        
        {/* Chat */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-yellow-400">
            Chat with us
          </h3>
          <p className="text-white">
            Our friendly team is here to help.
            <br />
            info@studynotion.com
          </p>
        </div>

        {/* Visit */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-green-400">
            Visit us
          </h3>
          <p className="text-white">
            Come and say hello at our office HQ.
            <br />
            Akshya Nagar 1st Block 1st Cross,
            <br />
            Rammurthy Nagar, Bangalore - 560016
          </p>
        </div>

        {/* Call */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-400">
            Call us
          </h3>
          <p className="text-white">
            Mon - Fri From 8am to 5pm
            <br />
            +123 456 7869
          </p>
        </div>
    </div>
 </div>
    </section>


      {/* PART-2 */}
        <section>
        <div className="bg-gray-900 flex items-center justify-center min-h-screen">
        <form className="mt-20 mb-20 bg-gray-800 p-8 rounded-2xl shadow-lg w-[600px]">
        <fieldset className="flex flex-col gap-4">
          
          <legend className="text-4xl text-purple-500 font-bold text-center mb-2">
            Got a Idea? We've got the skills. 
            Let's team up
          </legend>

          <p className="text-sm text-white text-center mb-4">
            Tell us more about yourself and what you're got in mind.
          </p>

          {/* First-Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-white mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="bg-gray-700 border-b border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            </div>
            {/* Last-Name */}
            <div className="flex flex-col">
            <label className="text-sm font-semibold text-white mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              className="bg-gray-700 border-b border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Last-Name */}
            <div className="flex flex-col">
            <label className="text-sm font-semibold text-white mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              className="bg-gray-700 border-b border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

     {/* Email-Address */}
            <div className="flex flex-col">
            <label className="text-sm font-semibold text-white mb-1">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Enter email address"
              className="bg-gray-700 border-b border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

      {/* Phone-Number */}
<div className="flex flex-col">
  <label className="text-sm font-semibold text-white mb-1">
    Phone Number
  </label>

  {/* Wrapper for select + input */}
  <div className="flex gap-3">
    
    <select
      name="Number"
      className="w-[100px] bg-gray-700 text-white border-b border-purple-300 rounded-lg px-2 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
    >
      <option>+91-India</option>
      <option>+973-Bahrain</option>
      <option>+65-Turkey</option>
      <option>+24-France</option>
    </select>

    <input
      type="text"
      placeholder="1234567890"
      className="flex-1 bg-gray-700 text-white border-b border-purple-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
    />
  </div>
</div>

      {/* Textarea */}
        <div className="flex flex-col gap-2">
  <label className="text-sm font-semibold text-white">
    Message
  </label>

  <textarea
    placeholder="Enter your message here"
    rows={6}
    className="w-full rounded-lg border-b border-purple-300 bg-gray-700 p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
  ></textarea>
</div>

          {/* Button */}
          <button className="bg-purple-600 border border-gray-400 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
            Send Message
          </button>
</fieldset>
      </form>
      
 </div>
     </section>
    </div>
  );
}

export default Contact;