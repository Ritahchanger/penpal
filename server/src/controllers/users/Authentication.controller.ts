import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";





class AuthenticationController{

    public login = async () => {
    }

    public signup = async () => {
    }

}

class PasswordController{


    public forgotPassword = async () =>{
    }


    public generateOtp = async () =>{
    }


    public authenticateUser = async () =>{
    }


}



class SocialAuthentication {

    public githubAuthentication = () =>{

    }


    public googleAuthentication = () =>{
    }


}



const authenticationController = new AuthenticationController()


const passwordController = new PasswordController();



const socialController = new SocialAuthentication();



export { authenticationController,passwordController,socialController };