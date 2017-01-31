# react-native-stanza-demo
Test repository for integrating Stanza.io with React Native. (incredibly disorganized)

Tentative Setup Instructions:
```
1. npm install stanza.io --save
2. npm install react-native-browser-builtins --save
3. npm install rn-nodeify --save-dev
4. ./node_modules/.bin/rn-nodeify --install stream --hack
```

For your package.json, adding a postinstall can be helpful:

`"postinstall": "rn-nodeify --install stream --hack"`

After the above process, index.ios.bundle and index.android.bundle will be properly built by the packager. 

Upon connecting, random-bytes will eventually throw a "secure random number generation not supported by this browser", currently working to resolve.
