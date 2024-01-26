import FacebookLogin from 'react-facebook-login';

export default function Home() {
    const responseFacebook = (response: any) => {
        console.log(response);
    }

    return (
        <main>
          <FacebookLogin
            appId="2266610960223388"
            autoLoad
            callback={responseFacebook}
            fields="name,email,picture"
            icon="fa-facebook"
            textButton="Entrar com o Facebook"
            size="small"
          />
        </main>
      )
}