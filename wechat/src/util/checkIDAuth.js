import Storage from 'good-storage'
function Check (url) {
  return new Promise((resolve, reject) => {
    const result = JSON.parse(Storage.get('userInfo'))
    if (result.verified) {
      resolve(result)
    } else {
      let result = confirm('欢迎进入空降联盟，确定要进行身份认证？')
      if (result) {
        console.log(1)
      } else {
        console.log(2)
      }
      // window.location.href = `/alliance-html/wechat/#/attestation?redirect=${url}`
    }
  })
}
export default Check
