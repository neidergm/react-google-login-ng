# React Google Login NG

This is a simple package for use the Google autentication. You can use the `Google Button` and/or `Google One Tap`.

> Use the most recent GSI library

<br/>

## Install

```bash
npm install --save react-google-login-ng
```

<br/>

## Usage

Import the Google Login Component from `react-google-login-ng` package

```js
  import GoogleLogin from 'react-google-login-ng'
```

Then use it in your component like this:

```js
   <GoogleLogin
      client_id='your_client_id_here'
      successCallback={({ credential, select_by }) => {
        console.log(credential, select_by);
      }}
    />
```

<br/>

## Props

#### `ComponentProps` (Extended with `T_GoogleConfig` type)

| Required | Prop            | Type                         | Description                                                          |
|----------|-----------------|------------------------------|----------------------------------------------------------------------|
|     ✓    | client_id       | string                       | Google client ID                                                     |
|     ✓    | successCallback | (resp: T_ResponseData)=>void | Funtion after google login response                                  |
|          | disabled        | boolean                      | To disable login                                                     |
|          | script          | string                       | For load another Google Script                                       |
|          | method          | "one_tap" \| "button"        | If method is not specified, will show One tap and button to do login |
|          | config          | T_ButtonConfig               |                                                                      |

<br/>

#### `T_ResponseData`

| Prop |  Type | Description |
|------|-------|-------------|
| credential | string | Google credential response (JWT) |
| select_by  | 'auto' \| 'user' \| "user_1tap" \| 'user_1tap' \| 'btn' \| 'btn_confirm' \| 'btn_add_session' \| 'btn_confirm_add_session' | Type of action of user to login  |
| token_info_url | string | Url to fetch user data       |

<br/>

#### `T_ButtonConfig`


| Required | Prop           | Type                                                          | Description                     |
|----------|----------------|---------------------------------------------------------------|---------------------------------|
|          | width          | number                                                        | Button width                    |
|          | type           | 'standard' \| 'icon'                                          |                                 |
|          | theme          | 'filled_black' \| 'outline' \| 'filled_blue'                  |                                 |
|          | size           | 'large' \| 'medium' \| 'small'                                |                                 |
|          | shape          | 'pill' \| 'rectangular'                                       |                                 |
|          | text           | 'signup_with' \| 'signup_with' \| 'continue_with' \| 'signin' |                                 |
|          | logo_alignment | 'center' \| 'left'                                            |                                 |
|          | locale         | string                                                        | Button text language            |
|          | click_listener | () => void                                                    | Function when button is clicked |

<br/>

#### `T_ButtonConfig`

| Required | Prop                               | Type                          | Description                                                                                                                                                                                    |
|----------|------------------------------------|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|          | auto_select                        | boolean                       | This field determines if an ID token is automatically returned without any user interaction when there's only one Google session that has approved your app before. The default value is false |
|          | login_uri                          | string                        |                                                                                                                                                                                                |
|          | native_callback                    | T_ResponseHandler             |                                                                                                                                                                                                |
|          | cancel_on_tap_outside              | boolean                       | This field sets whether or not to cancel the One Tap request if a user clicks outside the prompt. The default value is true                                                                    |
|          | prompt_parent_id                   | string                        | This attribute sets the DOM ID of the container element. If it's not set, the One Tap prompt is displayed in the top-right corner of the window                                                |
|          | nonce                              | string                        | This field is a random string used by the ID token to prevent replay attacks. See the following table for further information                                                                  |
|          | context                            | 'use' \| 'signup' \| 'signin' | This field changes the text of the title and messages in the One Tap promp                                                                                                                     |
|          | state_cookie_domain                | boolean                       | If you need to display One Tap in the parent domain and its subdomains, pass the parent domain to this field so that a single shared-state cookie is used                                      |
|          | ux_mode                            | 'popup' \| 'redirect'         | Use this field to set the UX flow used by the Sign In With Google button. The default value is popup. This attribute has no impact on the OneTap UX                                            |
|          | allowed_parent_origin              | string \| string[]            | The origins that are allowed to embed the intermediate iframe. One Tap will run in the intermediate iframe mode if this field presents                                                         |
|          | intermediate_iframe_close_callback | string                        |                                                                                                                                                                                                |
|          | itp_support                        | boolean                       |                                                                                                                                                                                                |

<br/>
<br/>


## Learn More

For more information about Google autentication service, visit the follow [GSI link](https://developers.google.com/identity/gsi/web/reference/js-reference)

<br/>
<br/>

---

<span class="badge-paypal"><a href="https://paypal.me/NeiderGM?country.x=CO&locale.x=es_XC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

