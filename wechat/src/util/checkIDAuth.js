
import Storage from 'good-storage'
function Check () {
    return new Promise((resolve, reject) => {
        const result = JSON.parse(Storage.get('userInfo'))
        if (result.verified) {
            resolve(result)
        } else {
            window.location.href = '/#/Auth'
        }
    })
}
export default Check
