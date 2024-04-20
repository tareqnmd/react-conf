import Conferences from './conferences/Conferences';
import Header from './header/Header';
import OurSponsor from './sponsors/OurSponsor';

const Home = () => {
	return (
		<>
			<Header />
			<Conferences />
			<OurSponsor />
		</>
	);
};

export default Home;
