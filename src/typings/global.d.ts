declare global {
  interface Window {
    mbQuery?: <T = any>(x: number, y: string, cb?: (msg: string, res: any) => void) => Promise<T>
    SetLoginFiled?: (msg: string) => void
    OpenDetailByID?: (id: number) => void
    clientChannelId: string
    LoginCredential?: string
    SetLoginSuc?: () => void
    gtag?: (...args: any) => any
    rdt?: (...args: any) => void
    dataLayer?: any
    _hmt?: any[]
  }

  type Recordable<T = any> = Record<string, T>
}

export {}
