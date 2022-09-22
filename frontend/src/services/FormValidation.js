export const FormValidation = (name = "", email="", cpf="", password="", confirmPassword="", sex="", birthday="") => {
    if(name.length == 0){
        return "nome nao pode ser zero"
    }else if(email.length == 0){
        return "email n pode ser zero"
    }else if(cpf.length == 0){
        return "cpf n pode ser zero"
    }else if(password.length == 0){
        return "senha n pode ser zero"
    }else if(password != confirmPassword){
        return "as senhas nao batem"
    }else if(sex.length == 0){
        return "defina o seu sexo"
    }else{
        return true
    }
}