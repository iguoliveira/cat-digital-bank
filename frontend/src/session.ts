export const setSession = (userData: any) => {
    localStorage.setItem('session', JSON.stringify(userData))
}

export const endSession = () => {
    localStorage.removeItem('session')
}

export const getSession = () => {
    let session: any
    try {
        session = JSON.parse(localStorage.getItem('session') || "{'user':'non-exist'}")
    }
    catch {
        session = undefined
    }

    return session
}