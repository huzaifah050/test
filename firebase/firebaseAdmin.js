import * as admin from 'firebase-admin';

export const verifyIdToken = (token) => {
	const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;

	if (!admin.apps.length) {
		admin.initializeApp({
			credential: admin.credential.cert({
				projectId: 'next-5a720',
				clientEmail: 'hhuzaifah050@gmail.com',
				// https://stackoverflow.com/a/41044630/1332513
				privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
			}),
			databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
		});
	}

	return admin
		.auth()
		.verifyIdToken(token)
		.catch((error) => {
			throw error;
		});
};
