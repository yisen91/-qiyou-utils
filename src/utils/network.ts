/**
 * 检测单个js资源加载状态
 * @param scriptUrl js url路径
 * @param callback
 */
export const checkScriptLoadStatus = (opts: { scriptUrl: string; callback: (error: any) => void }) => {
  const script = document.createElement('script')
  script.src = opts.scriptUrl
  script.async = true

  script.onload = () => {
    opts.callback(null)
  }

  script.onerror = () => {
    opts.callback(new Error('Script load failed'))
  }

  document.head.appendChild(script)
}

/**
 * 检测多个js资源加载状态
 * @param scriptUrls js url路径数组
 * @param callback
 */
export const checkScriptsLoadStatus = (opts: { scriptUrls: Array<string>; callback: (error: any) => void }) => {
  const scriptsToLoad = opts.scriptUrls.length
  let loadedScripts = 0
  let errorOccurred = false

  const handleScriptLoad = () => {
    loadedScripts++
    if (loadedScripts === scriptsToLoad) {
      if (errorOccurred) {
        opts.callback(new Error('Some Scripts load failed'))
      } else {
        opts.callback(null)
      }
    }
  }

  opts.scriptUrls.forEach((scriptUrl: string) => {
    checkScriptLoadStatus({
      scriptUrl,
      callback: (error) => {
        if (error) {
          errorOccurred = true
        }
        handleScriptLoad()
      },
    })
  })
}
