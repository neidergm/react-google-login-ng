declare global {
    interface Window { google: any; }
}

export interface I_ComponentProps extends T_GoogleConfig {
    client_id: string,
    successCallback: T_ResponseHandler,
    disabled?: boolean,
    /**
     * For load another Google Script;
    */
    script?: string,
    /**
     * If method is not specified, will show One tap and button to do login
     */
    method?: "one_tap" | "button",
    config?: T_ButtonConfig
}

type T_ResponseData = {
    credential: string,
    select_by: 'auto' | 'user' | "user_1tap" | 'user_1tap' | 'btn' | 'btn_confirm' | 'btn_add_session' | 'btn_confirm_add_session',
    token_info_url: string
}

type T_ResponseHandler = (resp: T_ResponseData) => void

type T_ButtonConfig = Partial<{
    width: number,
    type: 'standard' | 'icon',
    theme: 'filled_black' | 'outline' | 'filled_blue',
    size: 'large' | 'medium' | 'small',
    shape: 'pill' | 'rectangular',
    text: 'signup_with' | 'signup_with' | 'continue_with' | 'signin',
    logo_alignment: 'center' | 'left',
    /**
     * Button text language 
     */
    locale: string,
    /**
     * Function when button is clicked 
     */
    click_listener: () => void
}>

type T_GoogleConfig = Partial<{
    /**
     * This field determines if an ID token is automatically returned without any user interaction when there's only one Google session that has approved your app before. The default value is false
     */
    auto_select: boolean,
    login_uri: string,
    native_callback: T_ResponseHandler,
    /**
     * This field sets whether or not to cancel the One Tap request if a user clicks outside the prompt. The default value is true
     */
    cancel_on_tap_outside: boolean,
    /**
     * This attribute sets the DOM ID of the container element. If it's not set, the One Tap prompt is displayed in the top-right corner of the window
     */
    prompt_parent_id: string,
    /**
     * This field is a random string used by the ID token to prevent replay attacks. See the following table for further information
     */
    nonce: string,
    /**
     * This field changes the text of the title and messages in the One Tap promp
     */
    context: 'use' | 'signup' | 'signin',
    /**
     * If you need to display One Tap in the parent domain and its subdomains, pass the parent domain to this field so that a single shared-state cookie is used
     */
    state_cookie_domain: boolean,
    /**
     * Use this field to set the UX flow used by the Sign In With Google button. The default value is popup. This attribute has no impact on the OneTap UX
     */
    ux_mode: 'popup' | 'redirect',
    /**
     * The origins that are allowed to embed the intermediate iframe. One Tap will run in the intermediate iframe mode if this field presents
     */
    allowed_parent_origin: string | string[],
    intermediate_iframe_close_callback: string,
    itp_support: boolean
}>
