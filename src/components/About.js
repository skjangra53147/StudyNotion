import React from "react";
import bg from "../images/image3.png";
import Footer from "./Footer";
function About() {
  return (
   <div className="bg-gray-900 text-white py-6 px-2 md:px-2">
 {/* PART-1 */}
  <section className="max-w-6xl mx-auto text-center">

    {/* Heading */}
    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
      Driving Innovation in Online Education for a{" "}
      <span className="text-purple-500">Brighter Future</span>
    </h1>

    {/* Paragraph */}
    <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
      Studynotion is at the forefront of driving innovation in online education. We're 
      passionate about creating a brighter future by offering cutting-edge courses, 
      leveraging emerging technologies, and nurturing a vibrant learning community.
    </p>

    {/* Images */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
      <img
        src="/images/image10.png"
        alt="image09"
        className="rounded-xl shadow-lg w-full h-[250px] object-cover hover:scale-105 transition duration-300"
      />

      <img
        src="/images/image09.png"
        alt="image10"
        className="rounded-xl shadow-lg w-full h-[250px] object-cover hover:scale-105 transition duration-300"
      />

      <img
        src="/images/image11.png"
        alt="image11"
        className="rounded-xl shadow-lg w-full h-[250px] object-cover hover:scale-105 transition duration-300"
      />

    </div>
</section>


{/* PART-2 */}
<section className="w-full mt-20 bg-gray-900 text-white py-6 px-2 md:px-2">
  <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-20">

    {/* TOP TEXT */}
    <div className="text-center max-w-8xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold leading-relaxed">
        We are passionate about revolutionizing the way we learn. Our 
        innovative platform{" "}
        <span className="text-purple-400">combines technology</span>,{" "}
        <span className="text-yellow-500">expertise</span>, and community to create an{" "}
        <span className="text-purple-700">unparalleled educational experience.</span>
      </h1>

      <hr className="mt-20 border-gray-600 w-full mx-auto" />
    </div>

    {/* CONTENT SECTION */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-20">

      {/* LEFT PART */}
      <div className="flex-1">
        <h1 className="text-4xl text-purple-400 md:text-3xl font-bold mb-6">
          Our Founding Story
        </h1>

        <p className="text-gray-300 mb-4 leading-relaxed">
          Our e-learning platform was born out of a shared vision and passion for 
          transforming education. It all began with a group of educators, technologists, 
          and lifelong learners who recognized the need for accessible, flexible, and 
          high-quality learning opportunities in a rapidly evolving digital world.
        </p>

        <p className="text-gray-300 leading-relaxed">
          As experienced educators ourselves, we witnessed firsthand the limitations and 
          challenges of traditional education systems. We believed that education should 
          not be confined to the walls of a classroom or restricted by geographical 
          boundaries. We envisioned a platform that could bridge these gaps and 
          empower individuals from all walks of life to unlock their full potential.
        </p>
      </div>

      {/* RIGHT PART */}
      <div className="flex-1">
        <img
          src="/images/image12.png"
          alt="image12"
          className="rounded-2xl shadow-lg w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

    </div>
  </div>
  <hr className="mt-20 border-gray-600 w-full mx-auto" />
</section>


{/* PART-3 */}
    <section className="mt-10 pt-20 pb-20 bg-gray-900 text-white py-6 px-2 md:px-2">
  <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-20">

    {/* LEFT-PART */}
    <div className="space-y-4 p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-600">
        Our Vision
      </h1>
      <p className="text-gray-300 leading-relaxed">
        With this vision in mind, we set out on a journey to create an e-learning platform 
        that would revolutionize the way people learn. Our team of dedicated experts 
        worked tirelessly to develop a robust and intuitive platform that combines 
        cutting-edge technology with engaging content, fostering a dynamic 
        and interactive learning experience.
      </p>
    </div>

    {/* RIGHT-PART */}
    <div className="space-y-4 p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-700 ">
        Our Mission
      </h1>
      <p className="text-gray-300 leading-relaxed">
        Our mission goes beyond just delivering courses online. We wanted to create a 
        vibrant community of learners, where individuals can connect, collaborate, and 
        learn from one another. We believe that knowledge thrives in an environment of 
        sharing and dialogue, and we foster this spirit of collaboration through forums, 
        live sessions, and networking opportunities.
      </p>
    </div>

  </div>
</section>

  
  {/* PART-4 */}
<section className="bg-gray-950 text-white py-16">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

    {/* part-1 */}
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-purple-400">5K</h1>
      <p className="mt-2 text-gray-200 text-sm md:text-base">
        Active Students
      </p>
    </div>

    {/* part-2 */}
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-purple-400">10+</h1>
      <p className="mt-2 text-gray-200 text-sm md:text-base">
        Mentors
      </p>
    </div>

    {/* part-3 */}
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-purple-400">200+</h1>
      <p className="mt-2 text-gray-200 text-sm md:text-base">
        Courses
      </p>
    </div>

    {/* part-4 */}
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-purple-400">50+</h1>
      <p className="mt-2 text-gray-200 text-sm md:text-base">
        Awards
      </p>
    </div>

  </div>
</section>


    {/* PART-5 */}
<section className="mt-20 bg-gray-900 text-white py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
    
    {/* LEFT PART */}
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold leading-snug">
        World-Class Learning for{" "}
        <span className="text-purple-700">Anyone, Anywhere</span>
      </h1>

      <p className="text-gray-300 text-base leading-relaxed">
        Studynotion partners with more than 275+ leading universities and companies 
        to bring flexible, affordable, job-relevant online learning to individuals 
        and organizations worldwide.
      </p>

      <button className="bg-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition duration-300">
        Learn More
      </button>
    </div>

    {/* RIGHT PART (GRID) */}
    <div className="grid sm:grid-cols-2 gap-6">
      
      {/* CARD 1 */}
      <div className="w-[280px] bg-gray-800 p-5 rounded-xl hover:scale-105 transition duration-300">
        <h3 className="font-semibold text-lg mb-2">
          Curriculum Based on Industry Needs
        </h3>
        <p className="text-gray-400 text-sm">
          Save time and money! The Belajar curriculum is made to be easier to 
          understand and in line with industry needs.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="w-[280px] bg-gray-800 p-5 rounded-xl hover:scale-105 transition duration-300">
        <h3 className="font-semibold text-lg mb-2">
          Our Learning Methods
        </h3>
        <p className="text-gray-400 text-sm">
          Studynotion partners with more than 275+ leading universities and 
          companies to bring
        </p>
      </div>

      {/* CARD 3 */}
      <div className="w-[280px] h-[180px] bg-gray-800 p-5 rounded-xl hover:scale-105 transition duration-300">
        <h3 className="font-semibold text-lg mb-2">
          Certification
        </h3>
        <p className="text-gray-400 text-sm">
          Studynotion partners with more than 275+ leading universities and 
          companies to bring
        </p>
      </div>

      {/* CARD 4 */}
      <div className="w-[280px] bg-gray-800 p-5 rounded-xl hover:scale-105 transition duration-300">
        <h3 className="font-semibold text-lg mb-2">
          Rating "Auto-grading"
        </h3>
        <p className="text-gray-400 text-sm">
          Studynotion partners with more than 275+ leading universities and 
          companies to bring
        </p>
      </div>

      {/* CARD 5 */}
      <div className="w-[600px] bg-gray-800 p-5 rounded-xl hover:scale-105 transition duration-300 sm:col-span-2">
        <h3 className="text-center font-semibold text-lg mb-2">
          Ready to Work
        </h3>
        <p className="text-gray-400 text-sm">
          Studynotion partners with more than 275+ leading universities and 
          companies to bring
        </p>
      </div>

    </div>
  </div>
</section>


     {/* PART-6 */}
     <section>
        <div style={{
                            backgroundImage: `url(${bg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                          }}
         className="mt-20 flex items-center justify-center min-h-screen">
        <form className="m-10 bg-gray-800 p-8 rounded-2xl shadow-lg w-[600px]">
        <fieldset className="flex flex-col gap-4">
          
          <legend className="text-2xl text-purple-500 font-bold text-center mb-2">
            Get in Touch
          </legend>

          <p className="text-sm text-white text-center mb-4">
            We'd love to here for you, Please fill out this form.
          </p>

          {/* First-Name */}
          <div className="flex flex-row gap-2">
          <div className="flex flex-col w-[250px] mx-auto">
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
            <div className="flex flex-col w-[250px] mx-auto">
            <label className="text-sm font-semibold text-white mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              className="bg-gray-700 border-b border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

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

<Footer/>
     
</div>
  );
}

export default About;