import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { checkScriptsLoadStatus, interact } from 'qy-utils'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(1)
    interact.loadComplete()
    // const scriptUrl = "https://example.com/script.js";
    // checkScriptLoadStatus(scriptUrl, (error) => {
    //   if (error) {
    //     console.log(123)
    //     console.log('网络异常')
    //     // 处理脚本加载异常的情况
    //   } else {
    //     console.log("Script loaded successfully");
    //     // 处理脚本加载成功的情况
    //   }
    // });
    checkScriptsLoadStatus({
      scriptUrls: [
        'https://example.com/script.js',
        'https://github.githubassets.com/assets/github-elements-1ff8b48eef26.js'
      ],
      callback: (error) => {
        if (error) {
          console.log('网络异常')
        } else {
          console.log("Script loaded successfully");
        }
      }
    })
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
