import React, { useEffect } from 'react';
import { I_ComponentProps } from '../interface/GButton.interface';
import "./index.css";

declare global {
  interface Window { google: any; }
}

const GButton = ({
  disabled,
  script: src = 'https://accounts.google.com/gsi/client',
  successCallback,
  config,
  method,
  ...props
}: I_ComponentProps) => {

  const BTN_CONTAINER = "NG_GLOGIN_BTN"

  useEffect(() => {

    const initializeGsi = () => {
      try {
        window.google?.accounts.id.initialize({
          callback: (resp: any) => {
            successCallback({ ...resp, token_info_url: `https://oauth2.googleapis.com/tokeninfo?id_token=${resp.credential}` });
            // Register state in cookies when user leave of site
            window.google.accounts.id.disableAutoSelect();
            //Cancel One Tap FLow
            window.google.accounts.id.cancel();
          },
          ...props
        });

        if (method !== "one_tap") {
          // Show button
          window.google.accounts.id.renderButton(document.getElementById(BTN_CONTAINER), config || {})
        }

        if (method !== "button") {
          // Show One Tap
          window.google.accounts.id.prompt(() => { });
        }

      } catch (error) {
        console.log({ error })
      }
    }

    const script = document.createElement('script')
    script.src = src;
    script.async = true;
    script.onload = initializeGsi;
    document.querySelector('body')?.appendChild(script);

    return () => {
      document.querySelector('body')?.removeChild(script)
    }
  }, [])

  return (
    <div id={BTN_CONTAINER} className={disabled ? "disabled" : ""}>
      {method !== "one_tap" && <small>Loading</small>}
    </div>
  )
}

export default GButton