"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAppByName = exports.apps = exports.nativeApps = exports.hasApp = exports.deleteApp = exports.installApp = void 0;
function installApp(i) {
    localStorage.setItem("app:" + i, "true");
    location.reload();
}
exports.installApp = installApp;
function deleteApp(i) {
    if (confirm(`Are you sure you want to delete "${exports.apps[i].name}"?`)) {
        localStorage.setItem("app:" + i, "false");
        location.reload();
    }
}
exports.deleteApp = deleteApp;
function hasApp(i) {
    return localStorage.getItem("app:" + i) == "true";
}
exports.hasApp = hasApp;
exports.nativeApps = [
    {
        name: "App Store",
        link: () => `/apps/App Store/`,
        icon: ""
    }
];
exports.apps = [
    {
        name: "Notepad",
        link: (file) => `/apps/Notepad/${file ? "?file=" + file : ""}`,
        icon: "/file.png"
    },
    {
        name: "Bird",
        link: () => `/games/Bird/`,
        icon: "/image/bird.svg"
    },
    // {
    //   name: "Emoji Match",
    //   link: () => `/games/Emoji Match/`,
    //   icon: "/image/emojiMatch.svg"
    // },
    {
        name: "Europe Takeover",
        link: () => `/games/Europe Takeover/`,
        icon: "/image/europe.svg"
    },
    {
        name: "Gold Miner",
        link: () => `/games/Gold Miner/`,
        icon: "/image/goldMiner.svg"
    },
    {
        name: "Idle Taco",
        link: () => `/games/Idle Taco/`,
        icon: "/image/taco.svg"
    },
    {
        name: "Idle Taco 2",
        link: () => `/games/Idle Taco 2/`,
        icon: "/image/taco.svg"
    },
    {
        name: "Pig Farmer",
        link: () => `/games/Pig Farmer/`,
        icon: "/image/pigFarmer.svg"
    },
    {
        name: "Taco Clicker",
        link: () => `/games/Taco Clicker/`,
        icon: "/image/taco.svg"
    }
];
function findAppByName(name) {
    for (let i = 0; i < exports.apps.length; i++) {
        const app = exports.apps[i];
        if (app.name == name)
            return i;
    }
    return -1;
}
exports.findAppByName = findAppByName;
