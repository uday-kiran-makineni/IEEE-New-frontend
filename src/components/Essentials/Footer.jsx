import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight, Loader2, AlertCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${BACKEND_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to subscribe');
      }

      toast.success('Successfully subscribed to newsletter!', {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#10B981',
          color: '#fff',
          borderRadius: '9999px',
        },
        icon: '📧',
      });
      setEmail('');
    } catch (error) {
      setError(error.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const marqueeContent = (
    <div className="flex flex-shrink-0 items-center justify-around">
      <p className="px-8 text-3xl font-semibold text-gray-300">IEEE VMEG</p>
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-green-500">
        <ArrowUpRight className="h-7 w-7 text-white" />
      </div>
    </div>
  );

  return (
    <div>
      <Toaster />
      <div className="relative w-full">
        {/* main container with more dramatic curve and enhanced green shadow */}
        <div className="rounded-t-3xl rounded-b-[200px] bg-white p-8 sm:p-10 lg:p-16 relative shadow-2xl shadow-green-200/90">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 mb-12 lg:mb-4">
            {/* Column 1: Branding and Newsletter */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <img
                  className="h-12 w-auto"
                  src="https://res.cloudinary.com/doyh3fqr5/image/upload/c_crop,w_1000,h_780/v1750524389/IEEE_VCE_SB_-_TBG_j8tonl.png"
                  alt="IEEE VCE SB Logo"
                />
                <h3 className="text-xl font-bold text-gray-900">IEEE Vardhaman</h3>
              </div>

              <p className="text-base font-semibold leading-7 text-gray-900">Subscribe to our newsletter</p>
              <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-y-2">
                <div className="flex gap-x-4 rounded-full border border-gray-300 p-1.5 pl-4 bg-white">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(''); // Clear error when user types
                    }}
                    placeholder="Enter your email"
                    className="min-w-0 flex-auto appearance-none border-0 bg-white p-0 text-base leading-7 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`flex-none rounded-full bg-green-500 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 ${isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:bg-green-600'
                      } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 min-w-[80px] flex items-center justify-center`}
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      'Sign up'
                    )}
                  </button>
                </div>
                {error && (
                  <div className="flex items-center gap-x-2 text-red-500 text-sm pl-2">
                    <AlertCircle className="h-4 w-4" />
                    <span>{error}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-1 lg:col-span-1">
              <h4 className="font-semibold text-gray-900">Quick Links</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li><a href="/upcoming-events" className="hover:text-gray-900">Upcoming Events</a></li>
                <li><a href="/societies" className="hover:text-gray-900">Societies</a></li>
                <li><a href="/councils" className="hover:text-gray-900">Councils</a></li>
                <li><a href="/team" className="hover:text-gray-900">Developer Team</a></li>
                <li><a href="/newsletters" className="hover:text-gray-900">Newsletters</a></li>
              </ul>
            </div>

            {/* Column 3: Media */}
            <div className="md:col-span-1 lg:col-span-1">
              <h4 className="font-semibold text-gray-900">Media</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li><a href="/gallery" className="hover:text-gray-900">Gallery</a></li>
                <li><a href="/journey" className="hover:text-gray-900">Journey</a></li>
                <li><a href="/achievements" className="hover:text-gray-900">Achievements</a></li>
              </ul>
            </div>

            {/* Column 4: Support & Social */}
            <div className="md:col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-gray-900">Follow us at</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-x-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                    <Twitter className="h-4 w-4 text-gray-600" />
                  </div>
                  <a href="#" className="text-gray-500 hover:text-gray-900">Twitter</a>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                    <Instagram className="h-4 w-4 text-gray-600" />
                  </div>
                  <a href="#" className="text-gray-500 hover:text-gray-900">Instagram</a>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                    <Linkedin className="h-4 w-4 text-gray-600" />
                  </div>
                  <a href="#" className="text-gray-500 hover:text-gray-900">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <p className="text-center text-gray-400 text-sm mt-6">
        © 2025 All copyrights reserved by IEEE Vardhaman.
      </p>

        {/* "Let's Talk" Marquee */}
        <div className="relative mt-12 h-[60px] w-full overflow-hidden mb-1">
          <div className="flex absolute left-0 animate-marquee whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex flex-shrink-0">
                {marqueeContent}
              </div>
            ))}
          </div>
          <div className="flex absolute left-0 animate-marquee2 whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex flex-shrink-0">
                {marqueeContent}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};