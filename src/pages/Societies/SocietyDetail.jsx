import React from 'react';
import { useParams } from 'react-router-dom';
import { societiesData } from '../Landing/data/societiesData';
import { Header } from '../../components/Essentials/Header';
import { Footer } from '../../components/Essentials/Footer';
import DetailLayout from '../../components/DetailLayout';

export default function SocietyDetail() {
  const { societyId } = useParams();
  const society = societiesData.find(s => s.id === societyId);

  if (!society) return <div className="p-8">Society not found.</div>;

  return (
    <>
      <Header />
      <DetailLayout data={society} />
      <Footer />
    </>
  );
} 