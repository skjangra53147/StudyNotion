
import React from "react";
import bg from "../images/image2.png";
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>

      {/* SECTION 1 - Hero */}
      <section
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

        <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-10 mt-20 mb-30">

          <button className="mb-6 px-6 py-2 bg-purple-700 text-white rounded-full shadow hover:bg-purple-800 transition">
            Become an Instructor
          </button>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Empower Your Future with{" "}
            <span className="text-purple-500">Coding Skills</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-white text-lg">
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
         including hands-on projects, quizzes, and personalized feedback from
         instructors.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <button className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
              Learn More
            </button>

            <button className="px-6 py-3 bg-white text-purple-700 rounded-lg hover:bg-gray-200">
              Book a Demo
            </button>
          </div>
        </div>
      </section>


      {/* SECTION 2 - Feature-1 */}
 <section className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-20 md:px-20 bg-gray-900 text-white">

  {/* LEFT CONTENT */}
  <div className="max-w-xl mt-20">
    
    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
      Unlock your{" "}
      <span className="text-purple-500">coding potential</span>{" "}
      with our online courses.
    </h1>

    <p className="mt-6 text-gray-300 text-sm md:text-lg">
      Our courses are designed and taught by industry experts who have
      years of experience in coding.
    </p>

    <div className="mt-8 flex gap-4">
      <button className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
        Try it Yourself
      </button>

      <button className="border border-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">
        Learn More
      </button>
    </div>

  </div>

  {/* RIGHT IMAGE */}
  <div className="w-full mt-20 max-w-md">
    <img
      src="/images/image05.png"
      alt="Coding"
      className="rounded-2xl shadow-xl w-full h-auto object-cover"
    />
  </div>

</section>


       {/* SECTION 3 - Feature-2 */}
 <section className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-20 md:px-20 bg-gray-900 text-white">

 {/* LEFT IMAGE */}
  <div className="w-full mt-20 max-w-md">
    <img
      src="/images/image06.png"
      alt="Coding"
      className="rounded-2xl shadow-xl w-full h-auto object-cover"
    />
  </div>

  {/* RIGHT CONTENT */}
  <div className="max-w-xl mt-20">
    
    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
     Start{" "}
      <span className="text-purple-500">coding in seconds</span>{" "}
   
    </h1>

    <p className="mt-6 text-gray-300 text-sm md:text-lg">
     Go ahead, give it a try. Our hands-on learning environment means 
     you'll be writing real code from your very first lesson.
    </p>

    <div className="mt-8 flex gap-4">
      <button className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
        Continue Lesson
      </button>

      <button className="border border-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">
        Learn More
      </button>
    </div>
</div>
</section>


        {/* SECTION 4 - Power of Code */}
  <section className="bg-gray-900 text-white py-20 px-6 md:px-20">

  {/* Heading Section */}
  <div className="text-center max-w-3xl mx-auto mb-16">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
      Unlock the{" "}
      <span className="text-purple-500">Power of Code</span>
    </h1>
    <p className="text-gray-300 mt-4 text-lg">
      Learn to Build Anything You Can Imagine
    </p>
  </div>

  {/* Cards Section */}
  <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="h-[320px] bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
      <h3 className="text-xl font-bold mb-3">Learn HTML</h3>
      <p className="text-gray-300 mb-6">
        This course covers the basic concepts of HTML including creating and structuring web pages.
      </p>

      <div className="mt-20 border-b border-dashed border-gray-300"></div>

      <div className="mt-5 flex justify-between font-bold">
        <p>Beginner</p>
        <p>6 Lessons</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="h-[300px] bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
      <h3 className="text-xl font-bold mb-3">Learn CSS</h3>
      <p className="text-gray-300 mb-6">
        This course explores advanced topics in HTML5 and CSS3.
      </p>

      <div className="mt-20 border-b border-dashed border-gray-300"></div>

      <div className="mt-5 flex justify-between font-bold">
        <p>Beginner</p>
        <p>6 Lessons</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="h-[300px] bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
      <h3 className="text-xl font-bold mb-3">Responsive Web design</h3>
      <p className="text-gray-300 mb-6">
        This course teaches responsive web design techniques.
      </p>

      <div className="mt-20 border-b border-dashed border-gray-300"></div>

      <div className="mt-5 flex justify-between font-bold">
        <p>Beginner</p>
        <p>6 Lessons</p>
      </div>
    </div>

  </div>

  {/* ✅ Buttons (NOW CENTERED PROPERLY) */}
  <div className="mt-12 flex justify-center gap-4">
    <button className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
      Continue Lesson
    </button>

    <button className="border border-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">
      Learn More
    </button>
  </div>

</section>


          {/* SECTION 5 - job demand */}
  <section className="bg-gray-900 text-white px-6 py-16 md:px-20">
  
  {/* TOP CONTENT */}
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
      Get the skills you need for a{" "}
      <span className="text-purple-500">job that is in demand.</span>
    </h1>

    <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
      The modern StudyNotion dictates its own terms. Today, to be a competitive 
      specialist requires more than professional skills.
    </p>

    <button className="mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition duration-300">
      Learn More
    </button>
  </div>

  {/* BOTTOM SECTION */}
  <div className="max-w-6xl mx-auto flex flex-col md:flex-col items-center gap-12">

    {/* LEFT PART */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[800px] mx-auto">

      {/* CARD */}
      <div className="bg-gray-800 p-5 rounded-xl shadow hover:scale-105 transition duration-300">
        <h3 className="text-lg font-semibold mb-2 text-purple-400">
          Leadership
        </h3>
        <p className="text-gray-300 text-sm">
          Fully committed to the success company
        </p>
      </div>

      <div className="bg-gray-800 p-5 rounded-xl shadow hover:scale-105 transition duration-300">
        <h3 className="text-lg font-semibold mb-2 text-purple-400">
          Responsibility
        </h3>
        <p className="text-gray-300 text-sm">
          Students will always be our top priority
        </p>
      </div>

      <div className="bg-gray-800 p-5 rounded-xl shadow hover:scale-105 transition duration-300">
        <h3 className="text-lg font-semibold mb-2 text-purple-400">
          Flexibility
        </h3>
        <p className="text-gray-300 text-sm">
          The ability to switch is an important skill
        </p>
      </div>

      <div className="bg-gray-800 p-5 rounded-xl shadow hover:scale-105 transition duration-300">
        <h3 className="text-lg font-semibold mb-2 text-purple-400">
          Solve the Problem
        </h3>
        <p className="text-gray-300 text-sm">
          Code your way to a solution
        </p>
      </div>

    </div>

    {/* RIGHT PART */}
<div className="max-w-[800px] w-full mx-auto relative">
  
  {/* Top-left overlay div */}
  <div className="w-[200px] absolute top-4 left-4 text-white px-5 py-4 rounded-xl text-sm backdrop-blur-lg shadow-lg">
  
  <div className="flex gap-6">
    
    {/* Numbers */}
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">10</h1>
      <h1 className="text-2xl font-bold mt-4">250</h1>
    </div>

    {/* Text */}
    <div className="flex gap-4 flex-col justify-between">
      <h3 className="mt-1 text-xs tracking-wide text-white">
        YEARS EXPERIENCE
      </h3>
      <h3 className="mb-2 text-xs tracking-wide text-white">
        TYPES OF COURSES
      </h3>
    </div>

  </div>

</div>

  <img
    src="/images/image07.png"
    alt="image"
    className="rounded-2xl shadow-xl w-full h-auto object-cover hover:scale-105 transition duration-300"
  />
</div>

  </div>

</section>


        {/*SECTION 6 - learning any language */}
  <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* LEFT CONTENT */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Your swiss knife for{" "}
        <span className="text-purple-500 block mt-2">
          learning any language
        </span>
      </h1>

      <p className="mt-6 text-gray-300 text-lg max-w-xl">
        Using spin making learning multiple languages easy. With 20+ languages,
        realistic voice-over, progress tracking, custom schedule and more.
      </p>
       <button className="mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition duration-300">
      Learn More
    </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1">
      <img
        src="/images/image08.png"
        alt="language learning"
        className="w-full max-w-md mx-auto rounded-2xl shadow-xl hover:scale-105 transition duration-300"
      />
    </div>
  </div>
</section>
<Footer/>

    </div>
  );
};

export default Home;