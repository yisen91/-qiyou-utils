declare const interact: {
    loadComplete: () => void;
    loginComplete: (token: string) => void;
    registerComplete: (token: string) => void;
    reLogin(): void;
    loginOut: () => void;
    loginCredentialOutDate: () => void;
    reLoad: () => void;
    closeWnd: () => void;
    openSobotWindow: () => void;
    contactHelp(): void;
    goToErrorPage: () => void;
    noticeClientWxBind(loginCredential: string): void;
    getUserID: () => void;
    readMsg: (fid: number) => void;
    needOfflineOtherDev: (devmsgs: any) => void;
    otherOnline: (memberId: any) => void;
    changeAvatarSuccess: (url: any) => void;
    webDoModal(type: any): void;
    authComplete(data: any): void;
    popAuthWnd(data: any): void;
    resize(width: any, height: any): void;
    webLoadError: () => void;
    doUseCoupon(): void;
    toRecharge(type?: number): void;
};

/**
 * 检测单个js资源加载状态
 * @param scriptUrl js url路径
 * @param callback
 */
declare const checkScriptLoadStatus: (opts: {
    scriptUrl: string;
    callback: (error: any) => void;
}) => void;
/**
 * 检测多个js资源加载状态
 * @param scriptUrls js url路径数组
 * @param callback
 */
declare const checkScriptsLoadStatus: (opts: {
    scriptUrls: Array<string>;
    callback: (error: any) => void;
}) => void;

export { checkScriptLoadStatus, checkScriptsLoadStatus, interact };
