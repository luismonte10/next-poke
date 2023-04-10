import Footer from './Footer';
import Navbar from './Navbar';
import styles from '../styles/MainLayout.module.css';

export default function MainContainer({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}
