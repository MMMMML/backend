import Storage from 'good-storage'
export const AuthModal = {
  methods: {
    _check() {
      return new Promise((resolve, reject) => {
        let userInfo = Storage.session.get('userInfo')
        if (userInfo) {
          const result = JSON.parse(Storage.session.get('userInfo'))
          if (result.verified) {
            resolve(userInfo)
          } else {
            this.$refs.AuthModal.show()
          }
        } else {
          this.$refs.AuthModal.show()
        }
      })
    },
    handleAuth() {
      this.$router.push(`/attestation?redirect=${this.redirect}`)
    }
  },
  components: {
    AuthModal
  }
}
