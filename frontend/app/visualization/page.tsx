"use client";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Visualization from "@/src/components/Visualization";

export default function VisualizationPage() {
  return (
    <>
      <Header />
      <h1 className="text-2xl font-bold text-center my-6">Visualization</h1>
      <div className="container mx-auto px-4">
        <Visualization />
      </div>
      <Footer />
    </>
  );
}
