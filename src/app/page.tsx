// src/app/page.tsx


import Hero from "../components/Hero";
import Services from "../components/Services";
import LiveData from "../components/LiveData";
import VideoProof from "../components/VideoProof";
import EmailGenerator from "../components/EmailGenerator";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectGallery from "../components/ProjectGallery";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar></Navbar>
      <Hero />
      <ProjectGallery></ProjectGallery>
      <Services />
      <LiveData />
      <VideoProof />
      <EmailGenerator /> {/* Ye wo API wala jadoo */}
      <ContactForm />
      <Footer />
    </main>
  );
}