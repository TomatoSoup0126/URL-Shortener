# 縮網址產生器
AC練習專案
- 轉換網址程縮網址
- 縮網址為任意五碼大小寫英數組合
- 網址空白防呆提示
- 可點擊按鈕複製縮網址
- 可使用縮網址重新導引至原有網站
- 部署至Heroku


### 直接使用
- 已部署至Heroku，可以直接使用 [點我](https://tomato-url.herokuapp.com/)
```
備有三組預設轉址歡迎測試
https://www.google.com.tw/
Goo12

http://facebook.com/
FB123

https://medium.com
MeD45
```

### 環境建置

- 安裝mangoDB
於官方網頁中[下載](https://www.mongodb.com/download-center/community)後直接安裝

- 使用終端機從github clone本專案
   ```
   $ git clone https://github.com/TomatoSoup0126/URL-Shortener.git
   ```

- 移至本專案資料夾中 
  ```
  $cd [路徑名稱]
  ```
- 安裝相關聯npm檔案
  ```
  $ npm install
  ```
- 安裝nodemon (選擇性)
  ```
  $ npm install -g nodemon
  ```

### 啟動mangoDB
- macOS於終端機下移動至mangoDB資料夾下 `$ cd mongodb/bin`

- 啟動mangoDB `$ ./mongod --dbpath ~/mongodb-data --bind_ip 127.0.0.1`

### 寫入預設資料(選擇性)
- 於終端機中進入專案資料夾下的seeds `$ cd models/seeds`
- 寫入預設資料 `$ node seeder.js`


### 啟動伺服器
```
$ npm run dev
```
若成功啟動，終端機會顯示
`Express is listening on localhost:3000`
`mongodb connected!`

### 連至網頁
於瀏覽器中輸入下列網址
```
http://localhost:3000/
```
便可連至該專案網頁


### 關閉伺服器
於終端機中輸入`control`+`C`即可關閉伺服器結束本專案

## 使用工具
- [Node.js](https://nodejs.org/en/) - 伺服器建置
- [Express](https://www.npmjs.com/package/express) - 伺服器建置
- [mongoDB](https://www.mongodb.com/) - 資料庫建置
- [handlebars](https://handlebarsjs.com/) - 網頁模版引擎
- [Bootstrap](https://getbootstrap.com/) - 前端樣式
- [Font-awesome](https://fontawesome.com/) - 前端圖標
- [clipboardjs](https://clipboardjs.com/) - 複製功能


