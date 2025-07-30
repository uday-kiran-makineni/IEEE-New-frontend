import React from "react";
import { Header } from "./Header";
import { ContactUs } from "./ContactUs";
import { Footer } from "./Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 mt-4">
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

