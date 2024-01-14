# reacrt folder structure

## 1. React App General
```js
react app  
  |  
  |-- node_modules/...  
  |-- public/...      
  |-- src  
  |   |-- assets/...  
  |   |-- components  
  |   |    |-- UI  //* smallest reuseabe UI component, but be smallest  
  |   |    |   |-- Button.tsx  
  |   |    |   |-- Form.tsx  
  |   |    |   |-- Modal.tsx  
  |   |    |   |-- TextInput.tsx  
  |   |    |   
  |   |    |--DeleteAccountModal.tsx  
  |   |    
  |   |-- hooks  
  |   |     |-- useDebounce.ts  //*当有太多request to backend的时候，以ms为单位delay updating  
  |   |     |-- useCurrentUser.ts *get the current user, if using auth    
  |   |     |-- useCountdown.ts  
  |   |     |-- useEffectAfterMount.ts  
  |   |  
  |   |-- pages   //*called app/pages in next.js, screens in react native  
  |   |    |-- (logged-in)  
  |   |    |     | -- DashBoardScreen.tsx  
  |   |    |     | -- HomeScreen.tsx  
  |   |    |       
  |   |    |-- LoginScreen.tsx  
  |   |  
  |   |-- services //*内部或者第三方的服务，比如API  
  |   |    |-- api  //*next.js的构架可能与此不同  
  |   |    |-- i18n //*if ur app using multiple language, the library to handle internalizaton  
  |   |    |-- providers //*third party provider to wrap yout entire app or create your own  
  |   |    |-- state //*for global state management like redux or mobex and other library  
  |   |-- utils //*for things small and useful but cannot put anywhere else  
  |   |    |-- formatting.ts //*formatting currency or time and so on  
  |   |    |-- helpers.ts //*for functions small and useful but cannot put anywhere else  
  |   |  
  |   |-- APP.css  
  |   |-- APP.tsx  
  |   |-- index.css  
  |   |-- main.tsx  
  |   |-- vite-env.d.ts  
  |  
  |-- eslintrc.cjs  
  |-- .gitignore  
  |-- index.html  
  |-- package-lock.json  
  |-- package.json  
  |-- tsconfig.json  
  |-- tsconfig.node.json  
  |-- vite.config.js   
```

## 2. React App Medium Size
```js
react app 
  |
  |-- node_modules/...
  |-- public/...    
  |-- src
  |   |-- assets
  |   |    |-- global.css
  |   |    |-- logo.svg
  |   |
  |   |-- components //*shared componets, unique components live in pages folder
  |   |    |-- __tests__/...
  |   |    |-- form
  |   |    |    |-- __tests__/...
  |   |    |    |-- checkBox.js
  |   |    |    |-- FormInput.js
  |   |    |    |-- FormSelect.js
  |   |    |    |-- RadioButton.js
  |   |  
  |   |    |-- UI  //* smallest reuseabe UI component, but be smallest
  |   |    |    |-- __tests__/...
  |   |    |           |-- Button.js
  |   |    |           |-- ButtonGroup.js
  |   |    |           |-- DropDown.js
  |   |    |           |-- Modal.js
  |   |    |
  |   |    |-- NavBar.js
  |   |    
  |   |-- context
  |   |    |-- __tests__
  |   |    |      |-- AuthContext.js //*out the text closet possible to the file you are testing
  |   |    |
  |   |    |-- AuthContext.js
  |   |
  |   |-- data
  |   |    |-- configValues.json
  |   |    |-- constants.js
  |   |    |-- defaultTodos.json
  |   |
  |   |-- hooks
  |   |    |-- __tests__
  |   |    |      |-- useFetch.test.js
  |   |    |      |-- useLocalStorage.test.js
  |   |    |
  |   |    |-- useFetch.js
  |   |    |-- useLocalStorage.js
  |   |
  |   |-- pages   //*called app/pages in next.js, screens in react native
  |   |    |-- Home //*not only components, incluing hooks, context and ultilties, everything that only belong to this page
  |   |    |     | -- __text__/...
  |   |    |     | -- index.js
  |   |    |     | -- newTodoModal.js //*exclusive components
  |   |    |     | -- TodoContext.js //*exclusive components
  |   |    |     | -- TodoForm.js //*exclusive components
  |   |    |     | -- TodoItem.js //*exclusive components
  |   |    |     | -- TodoList.js //*exclusive components
  |   |    |     
  |   |    |-- Login //*not only components, incluing hooks, context and ultilties, everything that only belong to this page
  |   |    |     | -- __text__/...
  |   |    |     | -- index.js
  |   |    |     | -- LoginForm.js //*exclusive components
  |   |    |     | -- useLogin.js //*exclusive 
  |   |    |     
  |   |    |-- Setting //*not only components, incluing hooks, context and ultilties, everything that only belong to this page
  |   |    |     | -- __text__/...
  |   |    |     | -- index.js
  |   |    |     | -- SettingContext.js //*exclusive components
  |   |    |     | -- SettingForm.js //*exclusive 
  |   |    |     | -- useSettings.js //*exclusive 
  |   |    |     
  |   |    |-- Signup/...
  |   |
  |   |-- utils //*for things very small and simple pure functions 
  |   |    |-- __tests__
  |   |    |      |-- formatCurrency.test.js
  |   |    |      |-- formatDate.test.js
  |   |    |-- formatCurrency.js
  |   |    |-- formatDate.js
  |   |
  |   |-- APP.css
  |   |-- APP.js
  |   |-- APP.text.js
  |   |-- index.js
  |   |-- reportWebVitals.js
  |   |-- setupTests.js
  |
  |-- .gitignore
  |-- package-lock.json
  |-- package.json
  |-- README.md
  
  // if project is getting very large, the problem is more and more components are becoming shared
```
## 3. React App Larger Size
```js
react app 
  |
  |-- node_modules/...
  |-- public/...    
  |-- src
  |   |-- assets
  |   |    |-- global.css
  |   |    |-- logo.svg
  |   |
  |   |-- components //*shared componets, unique components live in pages folder
  |   |    |-- __tests__/...
  |   |    |      
  |   |    |-- form
  |   |    |    |-- __tests__/...
  |   |    |    |-- checkBox.js
  |   |    |    |-- FormInput.js
  |   |    |    |-- FormSelect.js
  |   |    |    |-- RadioButton.js
  |   |  
  |   |    |-- UI  * smallest reuseabe UI component, but be smallest
  |   |    |    |-- __tests__/...
  |   |    |           |-- Button.js
  |   |    |           |-- ButtonGroup.js
  |   |    |           |-- DropDown.js
  |   |    |           |-- Modal.js
  |   |    |
  |   |    |-- NavBar.js
  |   |    
  |   |-- context
  |   |    |-- __tests__
  |   |    |      |-- AuthContext.js //*put the text closest possible to the file you are testing
  |   |    |
  |   |    |-- AuthContext.js
  |   |
  |   |-- data
  |   |    |-- configValues.json
  |   |    |-- constants.js
  |   |    |-- defaultTodos.json
  |   |
  |   |-- features // for large porject, put everything of each features in one single place
  |   |    |-- authenication //everything about authenication feature is here, even assets, context data and otehrs
  |   |    |      |-- components/
  |   |    |      |     |--__test__/...
  |   |    |      |     |--LoginForm.js
  |   |    |      |     |--SignupForm.js
  |   |    |      |
  |   |    |      |-- hooks/
  |   |    |      |     |--__test__/...
  |   |    |      |     |--useLogin.js
  |   |    |      |     |--useSignup.js
  |   |    |      |     |--useVerifyPassword.js
  |   |    |      |     
  |   |    |      |-- services/
  |   |    |      |     |--__test__/...
  |   |    |      |     |--getUsers.js
  |   |    |      |     |--login.js
  |   |    |      |     |--signup.js
  |   |    |      |     
  |   |    |      |-- index.js //* 入口文件，只导出这一个入口文件
  |   |    |
  |   |    |-- projects/
  |   |    |      |-- components/...
  |   |    |      |-- services/...
  |   |    |      |-- index.js
  |   |    |
  |   |    |-- settings/
  |   |    |      |-- components/...
  |   |    |      |-- context/...
  |   |    |      |-- hooks/...
  |   |    |      |-- services/...
  |   |    |      |-- index.js
  |   |    |
  |   |    |-- todos/
  |   |           |-- assets/...
  |   |           |-- components/...
  |   |           |-- context/...
  |   |           |-- services/...
  |   |           |-- index.js
  |   |    
  |   |-- hooks //only contains hooks that is global, use to cross the entire application, not about any specific feature
  |   |    |-- __tests__
  |   |    |      |-- useFetch.test.js
  |   |    |      |-- useLocalStorage.test.js
  |   |    |
  |   |    |-- useFetch.js 
  |   |    |-- useLocalStorage.js //every feature could use this LocalStorage hook
  |   |    
  |   |-- layouts/ //*if you have complicated layout, otherwise you can put them in components
  |   |    |-- __tests__/...
  |   |    |-- NavBar.js
  |   |    |-- PageContainer.js
  |   |    |-- sideBar.js
  |   |    
  |   |-- lib/ //* third party libraries, facade pattern. and this is only the library use across all of the features
  |   |    |-- __tests__/...   
  |   |    |-- fetch.js
  |   |
  |   |-- pages  //*for large project, use js other than folders, because all the customised components go to features folder
  |   |    |-- __text__/...
  |   |    |-- Home.js
  |   |    |-- Login.js
  |   |    |-- Projects.js
  |   |    |-- Setting.js
  |   |    |-- Signup.js
  |   |
  |   |-- services/ //* intergarting with api，and this is only the services use across all of the features
  |   |    |-- __tests__/...
  |   |    |-- analytics.js
  |   |    
  |   |-- utils/ //*for things very small and simple pure functions，and this is only the utils use across all of the features
  |   |    |-- __tests__
  |   |    |      |-- formatCurrency.test.js
  |   |    |      |-- formatDate.test.js
  |   |    |-- formatCurrency.js
  |   |    |-- formatDate.js
  |   |
  |   |-- APP.css
  |   |-- APP.js
  |   |-- APP.text.js
  |   |-- index.js
  |   |-- reportWebVitals.js
  |   |-- setupTests.js
  |
  |-- .gitignore
  |-- package-lock.json
  |-- package.json
  |-- README.md
  
```