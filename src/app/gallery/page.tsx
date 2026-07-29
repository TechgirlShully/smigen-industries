import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/home/Projects";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Projects />
      </main>
      <Footer />
    </>
  );
}