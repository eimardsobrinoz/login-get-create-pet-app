export enum ApiMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

export enum AuthEndPoints {
    LOGIN = "/user/login",
    USER_REGISTERED = "/user",
    LOGOUT = "/user/logout",
    REFRESH_USER = "/auth/users/me",
    SIGNUP = "/user",
    RESET_PASSWORD = "/auth/users",
    MAIL_CONFIRMATION = "/auth/users",
    LOGIN_FORM = "/loginForm",
    SIGN_UP_FORM = "/signupForm",
    RESET_PASSWORD_FORM = "/resetPasswordForm",
    MAIL_CONFIRMATION_FORM= "/mailConfirmationForm",
    EMAIL_REGISTERED= "/isValidEmail"
}
export enum PetEndPoints {
    POST_PET = "/pet",
    GET_PET = "/pet",
    GET_PETS_BYSTATUS = "/pet/findByStatus"
}