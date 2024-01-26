import FacebookLogin from 'react-facebook-login';
import FacebookLoginButton from './components/FacebookLoginButton';

export default function Home() {
    const responseFacebook = (response: any) => {
        console.log(response);
    }

    return (
        <main>
          <FacebookLoginButton />
          {/* <FacebookLogin
            appId="2266610960223388"
            autoLoad
            callback={responseFacebook}
            fields="name,email,picture"
            icon="fa-facebook"
            textButton="Entrar com o Facebook"
            size="small"
          /> */}
        </main>
      )
}