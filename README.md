# react-native-stanza-demo
Test repository for integrating Stanza.io with React Native. (incredibly disorganized)

Tentative Setup Instructions:
```
1. npm install stanza.io --save
2. npm install react-native-browser-builtins --save
3. npm install rn-nodeify --save-dev
4. ./node_modules/.bin/rn-nodeify --install buffer,events,process,stream,util,inherits,fs,path --hack
```

After the above process, index.ios.bundle and index.android.bundle will be properly built by the packager. 

I did at one point also run these commands, but I am not sure if it had any effect.
```
cd node_modules/stanza.io/
npm install
make
