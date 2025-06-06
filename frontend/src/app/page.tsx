"use client";
import Navbar from "@/components/Home/Navbar";
import { useState } from "react";
import { Search, FileText, Users } from "lucide-react";
import Banner from "@/components/Home/Banner";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 flex justify-between items-center hero-section ">
          <div>
            <h1 className="text-4xl font-semibold mt-[5rem] text-[#FF0000] mb-4">
              Connect with Top Writers & Clients
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're looking to hire a writer or showcase your writing
              skills, we've got you covered.
            </p>
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search for writers or clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div>
            <Banner />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-16">
          <div className="text-center border border-neutral-100 p-4">
            <FileText className="mx-auto text-4xl text-[#FF0000]" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Post a Project
            </h3>
            <p className="text-gray-600 mt-2">
              Share your project details and requirements to attract the right
              talent.
            </p>
          </div>
          <div className="text-center border border-neutral-100 p-4">
            <Users className="mx-auto text-4xl text-[#FF0000]" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Browse Profiles
            </h3>
            <p className="text-gray-600 mt-2">
              Explore profiles of writers and clients to find the perfect match.
            </p>
          </div>
          <div className="text-center border border-neutral-100 p-4">
            <FileText className="mx-auto text-4xl text-[#FF0000]" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Get Started
            </h3>
            <p className="text-gray-600 mt-2">
              Sign up today and start collaborating on exciting projects.
            </p>
          </div>
        </section>

        {/* Featured Writers Section */}
        <section>
          <h2 className="text-3xl font-semibold text-[#FF0000] mb-8">
            Featured Writers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Writer Card */}
            <div className="bg-white p-6 rounded-lg border border-red-300">
              <img
                src="https://images.pexels.com/photos/32037492/pexels-photo-32037492/free-photo-of-cultural-parade-with-traditional-attire-and-horses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Writer"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Dennis Peter Munyao
              </h3>
              <p className="text-gray-600 mt-2">
                Expert in SEO and Content Writing
              </p>
              <button className="mt-4 w-full py-2 bg-[#FF0000] text-white rounded-lg">
                View Profile
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg border border-red-300">
              <img
                src="https://images.pexels.com/photos/32037492/pexels-photo-32037492/free-photo-of-cultural-parade-with-traditional-attire-and-horses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Writer"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Dennis Peter Munyao
              </h3>
              <p className="text-gray-600 mt-2">
                Expert in SEO and Content Writing
              </p>
              <button className="mt-4 w-full py-2 bg-[#FF0000] text-white rounded-lg">
                View Profile
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg border border-red-300">
              <img
                src="https://images.pexels.com/photos/32037492/pexels-photo-32037492/free-photo-of-cultural-parade-with-traditional-attire-and-horses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Writer"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Dennis Peter Munyao
              </h3>
              <p className="text-gray-600 mt-2">
                Expert in SEO and Content Writing
              </p>
              <button className="mt-4 w-full py-2 bg-[#FF0000] text-white rounded-lg">
                View Profile
              </button>
            </div>
            {/* Repeat for other writers */}
          </div>
        </section>
      </main>
    </div>
  );
}
