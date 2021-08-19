import Mobile from '../components/Mobile';
import Navbar from '../components/Navbar';
import PopOver from '../components/PopOver';
import ReadDB from '../components/Read';
import Test from '../components/Test';
import TestNav from '../components/TestNav';
import WriteDb from '../components/Write';

export default function Home() {
	return (
		<>
			<h1>Firebase</h1>
			<p>Welcome....</p>
			<p>Welcome....</p>
			<a href="/auth">Auth</a>
			<WriteDb />
			<ReadDB />
		</>
	);
}
