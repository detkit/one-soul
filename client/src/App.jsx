import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Info from './components/info/Info';
import Testimonials from './components/testimonial/Testimonials';
import Topics from './components/topic/Topics';

function App() {
	return (
		<>
			<Header />
			<Topics />
			<Info />
			<Blog />
			<Testimonials />
			<Footer />
		</>
	);
}

export default App;
