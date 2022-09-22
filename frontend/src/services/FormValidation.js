export const SignupValidation = (name = "", email="", cpf="", password="", confirmPassword="", sex="", birthday="") => {
    if(name.length == 0){
        return false
    }else if(email.length == 0){
        return false
    }else if(cpf.length == 0){
        return false
    }else if(password.length == 0){
        return false
    }else if(password != confirmPassword){
        return false
    }else if(sex.length == 0){
        return false
    }else{
        return true
    }
}