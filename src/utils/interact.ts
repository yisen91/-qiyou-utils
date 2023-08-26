export const interact = {
  loadComplete: () => {
    console.log('LoadComplete')
    window.mbQuery?.(0, '{"func": "LoadComplete"}')
  },
  loginComplete: (token: string) => {
    window.mbQuery?.(0, `{\"func\": \"LoginComplete\",\"parm_place_1\": \"${token}\"}`)
  },
  registerComplete: (token: string) => {
    window.mbQuery?.(0, `{\"func\": \"RegisterComplete\",\"parm_place_1\": \"${token}\"}`)
  },
  reLogin() {
    window.mbQuery?.(0, '{"func": "ReLogin"}', () => {})
  },
  loginOut: () => {
    window.mbQuery?.(0, '{"func": "LoginOut"}')
  },
  loginCredentialOutDate: () => {
    window.mbQuery?.(0, '{"func": "LoginCredentialOutDate"}')
  },
  reLoad: () => {
    window.mbQuery?.(0, '{"func": "ReLoad"}')
  },
  closeWnd: () => {
    window.mbQuery?.(0, '{"func": "CloseWnd"}')
  },
  openSobotWindow: () => {
    window.mbQuery?.(0, '{"func": "OpenSobotWindow"}')
  },
  contactHelp() {
    window.mbQuery?.(0, '{"func": "ContactHelp"}')
  },
  goToErrorPage: () => {
    window.mbQuery?.(0, '{"func": "GoToErrorPage"}')
  },
  noticeClientWxBind(loginCredential: string) {
    window.mbQuery?.(0, `{\"func\": \"WechatLoginComplete\",\"parm_place_1\": \"${loginCredential}\"}`)
  },
  getUserID: () => {
    window.mbQuery?.(10001, '{"func": "GetUserID"}', (customMsg, response) => {
      console.log('GetUserID', customMsg, response)
    })
  },
  readMsg: (fid: number) => {
    window.mbQuery?.(0, `{\"func\": \"ReadMsg\",\"parm_place_1\": \"${fid}\"}`)
  },
  needOfflineOtherDev: (devmsgs) => {
    window.mbQuery?.(0, `{\"func\": \"NeedOfflineOtherDev\",\"parm_place_10\": ${JSON.stringify(devmsgs)}}`)
  },
  otherOnline: (memberId) => {
    window.mbQuery?.(0, `{\"func\": \"OtherOnline：\",\"member_id\": \"${memberId}\"}`)
  },
  changeAvatarSuccess: (url) => {
    window.mbQuery?.(0, `{\"func\": \"ChangeAvatarSuccess\",\"parm_place_1\": \"${url}\"}`)
  },
  webDoModal(type) {
    console.log('webDoModal', type)
    window.mbQuery?.(0, `{\"func\": \"WebDoModal\",\"parm_place_1\": \"${type}\"}`)
  },
  authComplete(data) {
    window.mbQuery?.(0, `{\"func\": \"AuthComplete\",\"parm_place_10\": ${JSON.stringify(data)}}`)
  },
  popAuthWnd(data) {
    window.mbQuery?.(0, `{\"func\": \"PopAuthWnd\",\"parm_place_10\": ${JSON.stringify(data)}}`)
  },
  resize(width, height) {
    window.mbQuery?.(0, `{\"func\": \"Resize\",\"parm_place_1\": \"${width}\",\"parm_place_2\": \"${height}\"}`)
  },
  webLoadError: () => {
    window.mbQuery?.(0, '{"func": "WebLoadError"}')
  },
  doUseCoupon() {
    window.mbQuery?.(0, '{"func": "DoUseCoupon"}')
  },
  toRecharge(type?: number) {
    type = type || 0
    window.mbQuery?.(0, `{\"func\": \"JumpCharge\",\"parm_place_1\": \"${type}\"}`, () => {})
  },
}
