import firebase from 'firebase/app';
import 'firebase/firestore';

const ReadDB = () => {
	const readDb = () => {
		try {
			firebase
				.firestore()
				.collection('task')
				.doc('my_task')
				.onSnapshot((doc) => {
					console.log(doc.data());
				});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="">
			<button onClick={readDb}>READ DB</button>
		</div>
	);
};

export default ReadDB;
