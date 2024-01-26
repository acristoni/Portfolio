import React, { useEffect } from 'react';

const FacebookLoginButton = () => {

  useEffect(() => {
    // Load the Facebook SDK asynchronously
    const loadFacebookSDK = () => {
        // @ts-ignore
        window.fbAsyncInit = function() {
            // FB JavaScript SDK configuration and setup
            // @ts-ignore
            window.FB.init({
            appId      : '2266610960223388', // FB App ID
            cookie     : true,
            xfbml      : true,
            version    : 'v4.0'
            });
        };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        // @ts-ignore
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        // @ts-ignore
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };

    loadFacebookSDK();

  }, []); // Run this effect only once when the component mounts

  const launchFBE = () => {
    // Facebook login with JavaScript SDK
    // @ts-ignore
    window.FB.login(function (response) {
      if (response.authResponse) {
        // Returns a User Access Token with scopes requested
        const accessToken = response.authResponse.accessToken;
        const message = {
            'success': true,
            'access_token': accessToken,
        };
        console.log("🚀 ~ message:", message)
        // Store access token for later
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {
      scope: 'catalog_management,manage_business_extension',
    //   extras: {
    //     "setup": {
    //       "external_business_id": "<external_business_id>",
    //       "timezone": "America\/Los_Angeles",
    //       "currency": "USD",
    //       "business_vertical": "ECOMMERCE"
    //     },
    //     "business_config": {
    //       "business": {
    //         "name": "<business_name>"
    //       },
    //       "ig_cta": {
    //         "enabled": true,
    //         "cta_button_text": "Book Now",
    //         "cta_button_url": "https://partner-site.com/foo-business"
    //       }
    //     },
    //     "repeat": false
    //   }
    });
  };

  return (
    <div>
      <button onClick={launchFBE}>Login with Facebook</button>
    </div>
  );
};

export default FacebookLoginButton;
