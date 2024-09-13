import React from 'react';
import { Camera, Phone, Users, Zap } from 'lucide-react';

const MechanicalEngineeringPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto px-4 py-8">
                <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">About Yuvanand Green Engineering Solutions Private Limited</h2>
                            <p className="text-xl text-gray-600 mb-6">
                                At Yuvanand Green Engineering Solutions Private Limited, our mission is clear: to advance eco-friendly practices in waste management and clean energy solutions. With a strong dedication to sustainability and innovation, we aim to create a meaningful and lasting impact on the environment and the communities we support.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center"><Zap className="mr-2 text-yellow-500" /> Reducing our environmental impact</li>
                                <li className="flex items-center"><Users className="mr-2 text-green-500" /> Supporting the circular economy</li>
                                <li className="flex items-center"><Camera className="mr-2 text-blue-500" /> Collaborating with stakeholders</li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img src="https://karpagamarch.in/demo/wp-content/uploads/2023/08/Green-engineering_-Innovations-in-sustainable-technology-solutions-1920x1168.jpg" alt="Students Working" className="rounded-lg shadow-md" />
                            <img src="https://images.jdmagicbox.com/comp/tirupur/c4/9999px421.x421.150311141022.u9c4/catalogue/green-india-engineering-solution-tirupur-north-tirupur-industrial-chemical-dealers-l2d0h2v97q.jpg" alt="Lab Equipment" className="rounded-lg shadow-md" />
                            {/* <img src="https://imageio.forbes.com/specials-images/imageserve/5f1a62d942a6387efb759310/What-Can-3D-Printing-Be-Used-For--Here-Are-10-Amazing-Examples/960x0.jpg" alt="3D Printing" className="rounded-lg shadow-md" />
                            <img src="https://images.spiceworks.com/wp-content/uploads/2022/09/27062147/How-CAD-Works-and-Its-Use-in-Designing-Complex-Systems.png" alt="CAD Design" className="rounded-lg shadow-md" /> */}

                        </div>
                    </div>
                </section>

                <section className=" grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            Our vision is to pave the path toward a cleaner, more sustainable future. We aspire to create a world where waste is managed responsibly, energy is produced efficiently, and communities flourish in harmony with the natural environment.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            Our mission is to lead in environmental stewardship by:
                            <ul className="list-disc pl-5">
                                <li>Delivering innovative waste management solutions that emphasize safety, efficiency, and sustainability.</li>
                                <li>Leveraging clean energy technologies to reduce carbon emissions and combat climate change.</li>
                                <li>Educating and empowering individuals, businesses, and communities to embrace environmentally responsible practices.</li>
                            </ul>
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h3 className="text-3xl font-bold mb-6">Commitment to Sustainability</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {['Reducing Environmental Impact', 'Supporting Circular Economy', 'Collaborating for Sustainability',
                            'Exploring Cutting-Edge Technologies', 'Developing Breakthrough Solutions', 'Fostering Innovation'].map((area, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                    <h4 className="text-xl font-semibold mb-2">{area}</h4>
                                    <p className="text-gray-600">
                                        Advancing sustainability by {area.toLowerCase()} to create a lasting impact on the environment and society.
                                    </p>
                                </div>
                            ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-3xl font-bold mb-6">Making a Difference</h3>
                    <p className="text-xl text-gray-600 mb-4">
                        At Yuvanand Green Engineering Solutions Private Limited, our success is measured not only by financial achievements but by the positive impact we make on the environment and society. Join us on our journey toward a cleaner, greener, and more sustainable world.
                    </p>
                    <a href="/about" className="inline-block bg-gradient-to-r from-green-700 to-green-900 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                        Learn More About Our Efforts
                    </a> 
                </section>
            </main>
        </div>
    );
};

export default MechanicalEngineeringPage;
