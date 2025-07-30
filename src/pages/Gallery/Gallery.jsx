import React from 'react';
import { useParams } from 'react-router-dom';
import { societiesData } from '../Landing/data/societiesData';
import { Header } from '../../components/Essentials/Header';
import { Footer } from '../../components/Essentials/Footer';

export default function Gallery() {
  const { societyId } = useParams();
  let society = null;
  let galleryItems = [];
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
    galleryItems = society.gallery || [];
    heading = `${society.name} - Gallery`;
  } else {
    // All societies: flatten all gallery items
    galleryItems = societiesData.flatMap(s => (s.gallery || []).map(g => ({...g, societyName: s.name})));
    heading = 'All Societies - Gallery';
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12 mt-24">
        <h1 className="text-3xl font-bold text-center mb-8">{heading}</h1>
        {galleryItems.length === 0 ? (
          <div className="text-center text-gray-500">No gallery items found.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border shadow p-6 flex flex-col items-center">
                <img src={item.img} alt={item.caption} className="w-full h-64 object-cover rounded mb-4" />
                <div className="text-gray-700 mb-2 text-center">{item.caption}</div>
                {item.societyName && (
                  <div className="text-xs text-blue-700 font-semibold mt-2">{item.societyName}</div>
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
