export const setSession = (userData) => {
    localStorage.setItem('session', JSON.stringify(userData))
}

export const removeSession = () => {
    localStorage.removeItem('session')
}

export const getSession = () => {
    let userSession
    try {
        userSession = JSON.parse(localStorage.getItem('session'))
    }catch{
        userSession = undefined
    }

    return userSession
}