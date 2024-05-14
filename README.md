## Note: Dependencies

```bash
node: v21.6.1
cocoapods: 1.15.2
XCode: Version 14.2 (14C18)
IOS_Simulator: IOS 16.0
AndroidStudio: 2023.1.1 Patch 2
Android_Emulator: Any devices
OpenJDK: 17.0.9 (2023-10-17)
```

## Step 0: Install dependencies

````bash
# node modules
npm i

#CocoaPods
npm run pods
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
````

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
