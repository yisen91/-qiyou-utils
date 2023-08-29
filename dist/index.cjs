"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  checkScriptLoadStatus: () => checkScriptLoadStatus,
  checkScriptsLoadStatus: () => checkScriptsLoadStatus,
  interact: () => interact
});
module.exports = __toCommonJS(src_exports);

// src/utils/interact.ts
var interact = {
  loadComplete: () => {
    console.log("LoadComplete");
    window.mbQuery?.(0, '{"func": "LoadComplete"}');
  },
  loginComplete: (token) => {
    window.mbQuery?.(0, `{"func": "LoginComplete","parm_place_1": "${token}"}`);
  },
  registerComplete: (token) => {
    window.mbQuery?.(0, `{"func": "RegisterComplete","parm_place_1": "${token}"}`);
  },
  reLogin() {
    window.mbQuery?.(0, '{"func": "ReLogin"}', () => {
    });
  },
  loginOut: () => {
    window.mbQuery?.(0, '{"func": "LoginOut"}');
  },
  loginCredentialOutDate: () => {
    window.mbQuery?.(0, '{"func": "LoginCredentialOutDate"}');
  },
  reLoad: () => {
    window.mbQuery?.(0, '{"func": "ReLoad"}');
  },
  closeWnd: () => {
    window.mbQuery?.(0, '{"func": "CloseWnd"}');
  },
  openSobotWindow: () => {
    window.mbQuery?.(0, '{"func": "OpenSobotWindow"}');
  },
  contactHelp() {
    window.mbQuery?.(0, '{"func": "ContactHelp"}');
  },
  goToErrorPage: () => {
    window.mbQuery?.(0, '{"func": "GoToErrorPage"}');
  },
  noticeClientWxBind(loginCredential) {
    window.mbQuery?.(0, `{"func": "WechatLoginComplete","parm_place_1": "${loginCredential}"}`);
  },
  getUserID: () => {
    window.mbQuery?.(10001, '{"func": "GetUserID"}', (customMsg, response) => {
      console.log("GetUserID", customMsg, response);
    });
  },
  readMsg: (fid) => {
    window.mbQuery?.(0, `{"func": "ReadMsg","parm_place_1": "${fid}"}`);
  },
  needOfflineOtherDev: (devmsgs) => {
    window.mbQuery?.(0, `{"func": "NeedOfflineOtherDev","parm_place_10": ${JSON.stringify(devmsgs)}}`);
  },
  otherOnline: (memberId) => {
    window.mbQuery?.(0, `{"func": "OtherOnline\uFF1A","member_id": "${memberId}"}`);
  },
  changeAvatarSuccess: (url) => {
    window.mbQuery?.(0, `{"func": "ChangeAvatarSuccess","parm_place_1": "${url}"}`);
  },
  webDoModal(type) {
    console.log("webDoModal", type);
    window.mbQuery?.(0, `{"func": "WebDoModal","parm_place_1": "${type}"}`);
  },
  authComplete(data) {
    window.mbQuery?.(0, `{"func": "AuthComplete","parm_place_10": ${JSON.stringify(data)}}`);
  },
  popAuthWnd(data) {
    window.mbQuery?.(0, `{"func": "PopAuthWnd","parm_place_10": ${JSON.stringify(data)}}`);
  },
  resize(width, height) {
    window.mbQuery?.(0, `{"func": "Resize","parm_place_1": "${width}","parm_place_2": "${height}"}`);
  },
  webLoadError: () => {
    window.mbQuery?.(0, '{"func": "WebLoadError"}');
  },
  doUseCoupon() {
    window.mbQuery?.(0, '{"func": "DoUseCoupon"}');
  },
  toRecharge(type) {
    type = type || 0;
    window.mbQuery?.(0, `{"func": "JumpCharge","parm_place_1": "${type}"}`, () => {
    });
  }
};

// src/utils/network.ts
var checkScriptLoadStatus = (opts) => {
  const script = document.createElement("script");
  script.src = opts.scriptUrl;
  script.async = true;
  script.onload = () => {
    opts.callback(null);
  };
  script.onerror = () => {
    opts.callback(new Error("Script load failed"));
  };
  document.head.appendChild(script);
};
var checkScriptsLoadStatus = (opts) => {
  const scriptsToLoad = opts.scriptUrls.length;
  let loadedScripts = 0;
  let errorOccurred = false;
  const handleScriptLoad = () => {
    loadedScripts++;
    if (loadedScripts === scriptsToLoad) {
      if (errorOccurred) {
        opts.callback(new Error("Some Scripts load failed"));
      } else {
        opts.callback(null);
      }
    }
  };
  opts.scriptUrls.forEach((scriptUrl) => {
    checkScriptLoadStatus({
      scriptUrl,
      callback: (error) => {
        if (error) {
          errorOccurred = true;
        }
        handleScriptLoad();
      }
    });
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkScriptLoadStatus,
  checkScriptsLoadStatus,
  interact
});
module.exports = module.exports.default;
