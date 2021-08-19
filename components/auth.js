import initFirebase from '../firebase/initFirebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import { setUserCookie } from '../firebase/userCookies';
import { useEffect, useState } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';

initFirebase();

// Configure FirebaseUI.
const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: 'popup',
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: '/',
	credentialHelper: 'none',
	callbacks: {
		// Avoid redirects after sign-in.
		signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
			const userData = mapUserData(user);
			setUserCookie(userData);
		},
	},

	// We will display Google and Facebook as auth providers.
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		{
			provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
			requireDisplayName: true,
		},
	],
};

const Auth = () => {
	const [renderAuth, setRenderAuth] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setRenderAuth(true);
		}
	}, []);
	return (
		<div className="">
			{renderAuth ? (
				<StyledFirebaseAuth
					uiConfig={uiConfig}
					firebaseAuth={firebase.auth()}
				/>
			) : null}
		</div>
	);
};

export default Auth;
