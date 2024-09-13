import React from 'react';
import { Book, Users, Flask, Mail, Phone, MapPin } from 'lucide-react';

// About Page Component

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      {/* <h1 className="text-4xl font-extrabold mb-6 text-center ">OBJECTIVES</h1> */}
      
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <div className="md:w-1/3">
          <img
            src="https://www.teachhub.com/wp-content/uploads/2020/09/Sept-9-Benefits-of-Group-Work_web-768x512.jpg"
            alt="Objectives Illustration"
            className="rounded-lg shadow-lg w-full h-auto border-4 "
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-lg mb-4 text-gray-700 leading-relaxed">
            At Yuvanand Green Engineering Solutions Private Limited, we are dedicated to pursuing key objectives that align with our mission to promote environmentally responsible practices in waste management and clean energy solutions. These guiding principles drive our actions and initiatives toward a more sustainable future.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-6 ">Our Key Objectives</h2>
        <div className="space-y-10">
          <div className="p-6 bg-white rounded-lg shadow-md border-l-4 ">
            <h3 className="text-2xl font-semibold  mb-3">1. Safe Collection of Hazardous Waste</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Implementing robust waste management protocols to ensure the safe handling, transportation, and disposal of hazardous materials.</li>
              <li>Complying with strict environmental regulations to minimize the impact of hazardous waste on ecosystems and public health.</li>
              <li>Collaborating with certified disposal facilities and regulatory authorities to ensure full legal compliance and best practices.</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md border-l-4 ">
            <h3 className="text-2xl font-semibold  mb-3">2. Knowledge Sharing</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Curating and sharing valuable insights, research, and best practices related to waste management and clean energy solutions.</li>
              <li>Engaging stakeholders through online platforms, seminars, workshops, and community outreach programs.</li>
              <li>Empowering individuals, businesses, and communities with the knowledge and tools to adopt sustainable practices and make informed decisions.</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md border-l-4 ">
            <h3 className="text-2xl font-semibold  mb-3">3. Strategic Collaboration</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Building partnerships with like-minded organizations to leverage collective expertise and resources.</li>
              <li>Participating in collaborative projects to address shared environmental challenges and promote sustainable development.</li>
              <li>Engaging in industry forums, working groups, and policy advocacy efforts to influence change at local, national, and global levels.</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md border-l-4 ">
            <h3 className="text-2xl font-semibold  mb-3">4. Technology Innovation</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Investing in research and development to create and enhance technologies that improve waste management and foster clean energy generation.</li>
              <li>Partnering with technology providers to integrate advanced software and tools into our operations.</li>
              <li>Offering digital solutions and platforms that streamline waste management processes, boost efficiency, and ensure transparency.</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md border-l-4 ">
            <h3 className="text-2xl font-semibold  mb-3">5. Intellectual Property Management</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Protecting intellectual property, including patents, trademarks, and trade secrets, to secure innovative technologies and proprietary solutions.</li>
              <li>Licensing intellectual property to third parties to generate revenue and promote technology transfer.</li>
              <li>Utilizing intellectual property to enhance competitiveness, drive innovation, and create value for stakeholders and partners.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Faculty Page Component
const FacultyPage = () => {
  const directors = [
    {
      name: "Dr. Yuvarajan Devarajan, M.E., Ph.D.",
      imageUrl:
        "https://i.ibb.co/Zh6th9C/Whats-App-Image-2024-09-13-at-19-32-41.jpg",
      background:
        "Yuvarajan Devarajan is a renowned expert in clean energy solutions, with over a decade of experience in waste management and energy conversion. His work has made significant strides in promoting sustainable practices and innovative technologies.",
      expertise:
        "Recognized as one of the top 2% scientists globally by Stanford University, Dr. Yuvarajan’s research has driven advancements in clean energy generation, waste-to-energy conversion, and environmental sustainability.",
      contributions:
        "Yuvarajan Devarajan has led numerous initiatives aimed at fostering environmental stewardship and sustainability. His leadership has been instrumental in guiding the direction of Yuvanand Green Engineering Solutions Private Limited.",
    },
    {
      name: "Ms. Raj Nandhini Kumar, B.E",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      background:
        "Ms. Raj Nandhini Kumar brings a strong background in environmental science and education, coupled with a passion for sustainability. Her expertise is a key asset to Yuvanand Green Engineering Solutions Private Limited.",
      expertise:
        "She has a wide knowledge on waste management, conservation biology, and sustainable development, combining both theoretical and practical approaches.",
      contributions:
        "As a director of Yuvanand Green Engineering Solutions Private Limited, Ms. Nandhini plays a critical role in shaping the company’s strategic initiatives. Her insights drive the development of innovative solutions to address pressing environmental challenges.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Directors</h1>
      <p className="text-lg mb-6 text-center">
        Together, Dr. Yuvarajan Devarajan and Ms. Raj Nandhini Kumar form a leadership team rich in expertise, vision, and commitment to environmental sustainability, steering Yuvanand Green Engineering Solutions Private Limited toward responsible waste management.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {directors.map((director, index) => (
          <div
            key={index}
            className="bg-grey p-8 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={director.imageUrl}
              alt={director.name}
              className="w-40 h-40 mb-4 shadow-lg"
            />
            <h2 className="text-2xl font-semibold mb-2 text-center">{director.name}</h2>
            <p className="text-gray-700 mb-4 text-center">{director.background}</p>
            <h3 className="text-lg font-semibold mt-4 text-center">Expertise</h3>
            <p className="text-gray-700 mb-4 text-center">{director.expertise}</p>
            <h3 className="text-lg font-semibold mt-4 text-center">Contributions</h3>
            <p className="text-gray-700 text-center">{director.contributions}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

// Research Page Component
const ResearchPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Registered Office</h1>
      <p className="text-lg mb-6">
        YUVANAND GREEN ENGINEERING SOLUTIONS PRIVATE LIMITED  
        <br />
        Sf No 24A, 5th Main Road, CBI Colony, Perungudi, Chennai- 600096, Tamil Nadu
      </p>
      <p className="text-lg mb-6">
        At our registered office, Yuvanand Green Engineering Solutions Private Limited is dedicated to serving as a hub for innovation, collaboration, and positive change in the field of sustainable waste management and clean energy Solutions. Situated in the heart of Chennai, Tamil Nadu, our office serves as the central hub for our operations, strategic planning, and community engagement efforts.
      </p>
      <p className="text-lg font-semibold">
        CIN: U35106TN2024PTC172195
      </p>
    </div>
  );
};


const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Join Us</h1>
      <p className="text-lg mb-6">
        We invite you to join us in our mission to create a more sustainable world. Whether you are interested in learning more about our services, exploring collaboration opportunities, or simply looking to make a positive impact on the environment, we welcome you to connect with us.
      </p>
      <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <i className="fas fa-phone-alt text-blue-500 mr-3"></i>
            <span className="text-lg">Phone: +91 99994787526</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope text-blue-500 mr-3"></i>
            <span className="text-lg">Email: dyuvarajan2@gmail.com</span>
          </li>
        </ul>
        <p className="mt-6 text-lg">
          Let's work together to build a greener future for all. Join us at Yuvanand Green Engineering Solutions Private Limited.
        </p>
      </div>
    </div>
  );
};


export { AboutPage, FacultyPage, ResearchPage, ContactPage };