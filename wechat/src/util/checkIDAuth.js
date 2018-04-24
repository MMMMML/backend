
import Storage from 'good-storage'
function Check (url) {
    return new Promise((resolve, reject) => {
        const result = JSON.parse(Storage.get('userInfo'))
        if (result.verified) {
            resolve(result)
        } else {
            window.location.href = `/alliance-html/wechat/#/attestation?redirect=${url}`

        }
    })
}
export default Check
