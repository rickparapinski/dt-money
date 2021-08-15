
import {auth, firebase} from '../../services/firebase'
import googleLogoImg from '../../assets/google-icon.svg'
import { Container } from './styles'


export function Login () {

    function signIn (){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(result =>{
            console.log(result);
        })
        //history.push
    }

    return (
        <Container>
            <aside>

            </aside>
            <main>
                <div className="main-content">
                    <button 
                    onClick={signIn}
                    className="google-button"> 
                        <img src={googleLogoImg} alt="Google login" />
                        Crie sua conta com o google
                    </button>
                </div>
            </main>
        </Container>
    )
}