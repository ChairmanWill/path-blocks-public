if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/path-blocks-public/sw.js', { scope: '/path-blocks-public/' })})}