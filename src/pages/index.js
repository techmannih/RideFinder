import React from 'react';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <main className="container mx-auto p-8">
        <section className="hero text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Ultimate Car Dealership Experience</h1>
          <p className="text-lg mb-6">Your journey to finding the perfect car starts here. Explore our wide range of vehicles and unbeatable deals tailored just for you.</p>
          <button onClick={() => window.location.href = '/deals'} className="cta-button border-2 text-gray-400 border-gray-400  hover:bg-gray-700 hover:text-white hover:border-0 font-normal py-2 px-4 rounded">
            View Latest Deals
          </button>
        </section>

        <section className="features py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="feature-cards grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-gray-800 p-6 rounded-lg text-center">
              <img src="path/to/image1.jpg" alt="Wide Selection of Vehicles" className="w-full h-48 object-cover mb-4 rounded"/>
              <h3 className="text-xl font-bold mb-2">Wide Selection of Vehicles</h3>
              <p>From sedans to SUVs, find a variety of vehicles that suit your style and needs.</p>
            </div>
            <div className="feature-card bg-gray-800 p-6 rounded-lg text-center">
              <img src="path/to/image2.jpg" alt="Unbeatable Prices" className="w-full h-48 object-cover mb-4 rounded"/>
              <h3 className="text-xl font-bold mb-2">Unbeatable Prices</h3>
              <p>Enjoy the best prices and deals on all our cars, with flexible financing options.</p>
            </div>
            <div className="feature-card bg-gray-800 p-6 rounded-lg text-center">
              <img src="path/to/image3.jpg" alt="Trusted by Thousands" className="w-full h-48 object-cover mb-4 rounded"/>
              <h3 className="text-xl font-bold mb-2">Trusted by Thousands</h3>
              <p>Join our community of satisfied customers who have found their dream cars with us.</p>
            </div>
          </div>
        </section>

        <section className="testimonial py-16 bg-gray-900">
          <h2 className="text-3xl font-bold mb-8 text-center">Customer Stories</h2>
          <div className="testimonial-cards grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="testimonial-card bg-gray-800 p-6 rounded-lg">
              <p>I found my dream car at an amazing price. The process was seamless and the staff was incredibly helpful! - Alice</p>
            </div>
            <div className="testimonial-card bg-gray-800 p-6 rounded-lg">
              <p>As a dealer, managing my inventory and deals has never been easier. This platform is a game-changer! - Bob</p>
            </div>
          </div>
        </section>

        <section className="call-to-action py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-6">Sign up today to get exclusive access to our latest deals and personalized recommendations.</p>
          <button onClick={() => window.location.href = '/auth/signup'} className="cta-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up Now
          </button>
        </section>
      </main>
    </div>
  );
}
