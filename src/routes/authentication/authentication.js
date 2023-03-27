import { createUserDocumentFromAuth, signInWithGooglePopup, signInWithGooleRedirect } from '../../utils/firebase/firebase';
import './authentication.styles.scss';

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };

  return (<div>
    <h1>Authentication Page</h1>
    <button onClick={logGoogleUser}>
      Sign in with Google
    </button>
  </div>);
};

export default Authentication;
