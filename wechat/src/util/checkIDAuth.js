import Storage from 'good-storage'
function Check (url = '/') {
  return new Promise((resolve, reject) => {
    if (Storage.session.get('userInfo')) {
      const result = JSON.parse(Storage.session.get('userInfo'))
      if (result.verified) {
        resolve(result)
      } else {
        window.location.href = `/alliance-html/wechat/#/attestation?redirect=${url}`
      }
    } else {
      window.location.href = `/alliance-html/wechat/#/attestation?redirect=${url}`
    }
  })
}
export default Check
