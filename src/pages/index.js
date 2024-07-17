import React from "react";
import Image from "next/image";
import bgImage from "../../public/bg.jpg";
import { FaCar, FaMoneyBillWave, FaShoppingCart } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <main className="max-w-7xl p-8 mx-auto">
        <section className="relative hero text-center py-16">
          <Image
            src={bgImage}
            alt="Wide Selection of Vehicles"
            layout="fill"
            objectFit="cover"
            className="z-0 "
          />
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10 flex justify-start items-center h-full">
            <div className="max-w-lg f">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to the Ultimate Car Dealership Experience
              </h1>
              <p className="text-lg mb-6">
                Your journey to finding the perfect car starts here. Explore our
                wide range of vehicles and unbeatable deals tailored just for
                you.
              </p>
              <button
                onClick={() => (window.location.href = "/deals")}
                className="cta-button bg-gray-700 text-white hover:border-0 font-normal py-2 px-4 rounded"
              >
                View Latest Deals
              </button>
            </div>
            <div className="hidden lg:block w-1/2"> </div>
          </div>
        </section>

        <section className="working-steps py-16 text-white">
        <h2 className="text-sm font-normal mb-1 text-center">How It Works</h2>
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Working Steps</h2>
        <div className="working-steps-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="working-step-card border-2 border-gray-400 p-6 rounded-3xl text-center">
            <FaCar className="text-4xl my-12 mx-auto text-white bg-gray-900" />
            <h3 className="text-md mb-2">Choose Your Car</h3>
            <p className="text-md text-gray-400">Explore our wide selection of vehicles and choose the one that suits your needs.</p>
          </div>
          <div className="working-step-card border-2 border-gray-400 p-6 rounded-3xl text-center">
            <FaMoneyBillWave className="text-4xl my-12 mx-auto text-white" />
            <h3 className="text-md mb-2">Fix Your Deal</h3>
            <p className="text-md text-gray-400">Fix a deal with unbeatable prices and flexible financing options that fit your budget.</p>
          </div>
          <div className="working-step-card border-2 border-gray-400 p-6 rounded-3xl text-center">
            <FaShoppingCart className="text-4xl my-12 mx-auto text-white" />
            <h3 className="text-md mb-2">Purchase Your Car</h3>
            <p className="text-md text-gray-400">Complete your purchase process and drive away with your dream car hassle-free.</p>
          </div>
        </div>
      </section>
        <section className="features py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="feature-cards grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">
                Wide Selection of Vehicles
              </h3>
              <p>
                From sedans to SUVs, find a variety of vehicles that suit your
                style and needs.
              </p>
            </div>
            <div className="feature-card bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Unbeatable Prices</h3>
              <p>
                Enjoy the best prices and deals on all our cars, with flexible
                financing options.
              </p>
            </div>
            <div className="feature-card bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Trusted by Thousands</h3>
              <p>
                Join our community of satisfied customers who have found their
                dream cars with us.
              </p>
            </div>
          </div>
        </section>

        <section className="testimonial py-16 ">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Customer Stories
          </h2>
          <div className="testimonial-cards grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="testimonial-card bg-gray-800 p-6 rounded-lg">
              <p>
                I found my dream car at an amazing price. The process was
                seamless and the staff was incredibly helpful! - Alice
              </p>
            </div>
            <div className="testimonial-card bg-gray-800 p-6 rounded-lg">
              <p>
                As a dealer, managing my inventory and deals has never been
                easier. This platform is a game-changer! - Bob
              </p>
            </div>
          </div>
        </section>

        <section className="call-to-action py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-6">
            Sign up today to get exclusive access to our latest deals and
            personalized recommendations.
          </p>
          <button
            onClick={() => (window.location.href = "/auth/signup")}
            className="cta-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up Now
          </button>
        </section>
      </main>
    </div>
  );
}
