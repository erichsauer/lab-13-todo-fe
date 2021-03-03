const USER = 'USER'

export function setTokenToLocalStorage(token) {
    localStorage.setItem(USER, JSON.stringify(token))
}

export function getTokenFromLocalStorage() {
    const user = localStorage.getItem(USER)
    if (user) return JSON.parse(user);
    
    return ''
}
