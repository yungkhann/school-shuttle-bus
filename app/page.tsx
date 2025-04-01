import {
  Header,
  Footer,
  About,
  Projects,
  Testimonials,
  Contact,
} from './components/index';
import Schools from './components/Schools';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Schools/>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
