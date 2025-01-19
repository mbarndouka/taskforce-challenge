import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <main className="my-20">{children}</main>
      <Footer />
    </main>
  );
}
