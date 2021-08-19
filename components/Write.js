import firebase from 'firebase/app';
import 'firebase/firestore';

const WriteDb = () => {
	const sendData = () => {
		try {
			firebase
				.firestore()
				.collection('task')
				.doc('my_task')
				.set({
					id: 1,
					name: 'huzaifah',
				})
				.then(alert('Data sent to DB'));
		} catch (error) {
			console.log(error);
			alert(error);
		}
	};

	return (
		<div className="">
			<button onClick={sendData}>send data</button>
		</div>
	);
};

export default WriteDb;
