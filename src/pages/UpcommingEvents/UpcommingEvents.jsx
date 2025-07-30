import React from 'react';
import { useParams } from 'react-router-dom';
import { societiesData } from '../Landing/data/societiesData';
import { Header } from '../../components/Essentials/Header';
import { Footer } from '../../components/Essentials/Footer';

export default function UpcommingEvents() {
  const { societyId } = useParams();
  let society = null;
  let upcomingEvents = [];
  let heading = '';

  if (societyId) {
    society = societiesData.find(s => s.id === societyId);
    if (!society) {
      return (
        <>
          <Header />
          <div className="p-8 text-center text-xl">Society not found.</div>
          <Footer />
        </>
      );
    }
    upcomingEvents = society.events?.upcoming || [];
    heading = `${society.name} - Upcoming Events`;
  } else {
    // All societies: flatten all upcoming events
    upcomingEvents = societiesData.flatMap(s => (s.events?.upcoming || []).map(e => ({...e, societyName: s.name})));
    heading = 'All Societies - Upcoming Events';
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12 mt-24">
        <h1 className="text-3xl font-bold text-center mb-8">{heading}</h1>
        {upcomingEvents.length === 0 ? (
          <div className="text-center text-gray-500">No upcoming events found.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="bg-white rounded-xl border shadow p-6 flex flex-col items-center">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded mb-4" />
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <div className="text-gray-600 mb-1">{event.date}</div>
                <div className="text-gray-700 mb-2 text-center">{event.description}</div>
                {event.societyName && (
                  <div className="text-xs text-blue-700 font-semibold mt-2">{event.societyName}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
