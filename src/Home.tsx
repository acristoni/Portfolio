import FacebookLogin from 'react-facebook-login';
import React from 'react';

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
          />
        </main>
      )
}