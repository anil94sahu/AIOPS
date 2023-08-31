export interface ForgotpasswordInterface {
    emailId?: string;
}
export interface LoginInterface {
    emailId?: string;
    password?: string;
    rememberMe?: boolean;
}
export interface RegistrationInterface {
    firstname?: string;
    lastname?: string;
    emailId?: string;
    organizationname?: string;
    password?: string;
    confirmpassword?: string;
    phone?: string;
}