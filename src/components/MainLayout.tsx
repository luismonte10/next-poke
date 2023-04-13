import Footer from './Footer';
import Navbar from './Navbar';

export default function MainContainer({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
