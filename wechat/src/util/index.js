
import Cookies from 'js-cookie'
const TokenKey = 'X-SessionId'

export function getSessionId() {
    // todo
    return Cookies.get(TokenKey)    
}


export function getWxFrom() {
    // todo
    return 1
}