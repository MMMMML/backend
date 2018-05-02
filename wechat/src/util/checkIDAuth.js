import Storage from 'good-storage'
function Check (url = '/', Vue) {
  return new Promise((resolve, reject) => {
    if (Storage.session.get('userInfo')) {
      const result = JSON.parse(Storage.session.get('userInfo'))
      if (result.verified) {
        resolve(result)
      } else {
        Vue.$dialog.confirm({
          title: '提示',
          message: '欢迎进入空降联盟，请先进行身份认证'
        }).then(res => {
          Vue.$router.replace(`/attestation?redirect=${url}`)
        })
      }
    } else {
      Vue.$dialog.confirm({
        title: '提示',
        message: '欢迎进入空降联盟，请先进行身份认证'
      }).then(res => {
        Vue.$router.replace(`/attestation?redirect=${url}`)
      })
    }
  })
}

export default Check
