# dmhy-subscribe

[![npm version](https://badge.fury.io/js/dmhy-subscribe.svg)](https://www.npmjs.com/package/dmhy-subscribe) [![Build Status](https://travis-ci.org/FlandreDaisuki/dmhy-subscribe.svg?branch=master)](https://travis-ci.org/FlandreDaisuki/dmhy-subscribe) [![CircleCI](https://circleci.com/gh/FlandreDaisuki/dmhy-subscribe.svg?style=shield)](https://circleci.com/gh/FlandreDaisuki/dmhy-subscribe)

Subscribe and schedule downloading magnets on dmhy. Support Linux & Windows 10.

在動漫花園訂閱並排程下載磁鏈，支援 Linux & Windows 10

* [Demo 範例影片](#demo-%E7%AF%84%E4%BE%8B%E5%BD%B1%E7%89%87)
* [Requirements 依賴軟體](#requirements-%E4%BE%9D%E8%B3%B4%E8%BB%9F%E9%AB%94)
* [Installation 安裝方法](#installation-%E5%AE%89%E8%A3%9D%E6%96%B9%E6%B3%95)
* [Usage 使用方法](#usage-%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)
* [Scheduling 自動排程](#scheduling-%E8%87%AA%E5%8B%95%E6%8E%92%E7%A8%8B)
* [Feedbacks 回報問題](#feedbacks-%E5%9B%9E%E5%A0%B1%E5%95%8F%E9%A1%8C)
* [Contributing 貢獻專案](#contributing-%E8%B2%A2%E7%8D%BB%E5%B0%88%E6%A1%88)
* [Contributors](#contributors)

## Demo 範例影片

GIF 由 [ttygif](https://github.com/icholy/ttygif) 生成

<p align="center">
  <img src="./tty.gif" alt="tty demo">
</p>

## Requirements 依賴軟體

* nodejs (v8.9+) & npm
  * Ubuntu 推薦使用：[creationix/nvm](https://github.com/creationix/nvm)
        或 [tj/n](https://github.com/tj/n)
  * Windows 10 推薦使用：[官方安裝](https://nodejs.org/)

下載器目前提供下面五種，擇一即可 (推薦使用 `system`)

* system(預設): 若系統有註冊 `magnet://` 關聯程式，則啟動該程式
* deluge: [deluge 安裝教學](docs/deluge.md)
* aria2c: [aria2 安裝教學](docs/aria2.md)
* webhook: [webhook 安裝教學](docs/webhook.md)(待補)
* stdout: 直接印出連結到 stdout

## Installation 安裝方法

<details close>
  <summary>確認 nodejs 安裝</summary>
  <p>
  Ubuntu:

  ```
  $ node -v
  v9.4.0
  $ npm -v
  5.6.0
  ```

  Windows10 (PowerShell):

  ```
  PS C:\> node -v
  v9.4.0
  PS C:\> npm -v
  5.6.0
  ```
  </p>
</details>

```
$ npm i -g dmhy-subscribe
```

若之前已有安裝，推薦先輸出可訂閱字串作為備份
```
(0.3.x) $ dmhy ls --addable > backup.txt
(0.5.x) $ dmhy ls -s > backup.txt
```

## Usage 使用方法

```
使用方法: dmhy [命令] [選項]

  若不指定命令，則到網站檢查更新，並*只*下載尚未紀錄的貼文


命令：
  dmhy add [subscribable...]         新增一筆訂閱
  dmhy list [SID...]                 顯示訂閱資訊                   [別名: ls]
  dmhy remove [SID...]               根據訂閱識別碼刪除訂閱         　[別名: rm]
  dmhy search <subscribable-string>  直接搜尋貼文                   [別名: find]
  dmhy config [key] [value]          設定內部參數                   [別名: cfg]
  dmhy download <THID...>            根據下載識別碼下載訂閱           [別名: dl]

選項：
  -x, --no-dl    只更新訂閱但不下載                                   [布林]
  -h, --help     顯示說明                                           [布林]
  -v, --version  顯示版本                                           [布林]

例：
  dmhy add "搖曳露營,喵萌,繁體"      最簡單的例子，新增訂閱並全部更新下載
  dmhy
```

## Scheduling 自動排程

參考[自動排程](docs/scheduling.md)教學

## Feedbacks 回報問題

先到 [issue](https://github.com/FlandreDaisuki/dmhy-subscribe/issues) 看看有沒有相似的問題，若沒有相似問題請點擊 New issue 描述問題。

## Known Issues 已知問題

### 首頁已經有最新一集出現了，但是 `dmhy` 卻沒更新???

這是正常的，因為動漫花園因為一些未知的原因，搜尋的結果會有點延遲
可以試著去直接搜尋訂閱的關鍵字，是看不到最新一集的

## Contributing 貢獻專案

Fork 並 clone 到本地端
```shell
(master) $ git remote add upstream https://github.com/FlandreDaisuki/dmhy-subscribe.git
(master) $ git merge upstream master # 更新上游分支
(master) $ git checkout -b 0.6.x # *最新版本*的最後一個數字改成x
(0.6.x) $ # 改改改
(0.6.x) $ git push origin 0.6.x
```
到 GitHub 發 PR 到我的同名分支 (不要發到 master)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/5981459?v=4" width="100px;"/><br /><sub><b>Chun-Hao Lien</b></sub>](https://github.com/FlandreDaisuki)<br />[💻](https://github.com/FlandreDaisuki/dmhy-subscribe/commits?author=FlandreDaisuki "Code") [📖](https://github.com/FlandreDaisuki/dmhy-subscribe/commits?author=FlandreDaisuki "Documentation") [⚠️](https://github.com/FlandreDaisuki/dmhy-subscribe/commits?author=FlandreDaisuki "Tests") [👀](#review-FlandreDaisuki "Reviewed Pull Requests") | [<img src="https://avatars1.githubusercontent.com/u/9370547?v=4" width="100px;"/><br /><sub><b>maple</b></sub>](https://blog.maple3142.net/)<br />[💻](https://github.com/FlandreDaisuki/dmhy-subscribe/commits?author=maple3142 "Code") [📖](https://github.com/FlandreDaisuki/dmhy-subscribe/commits?author=maple3142 "Documentation") [🤔](#ideas-maple3142 "Ideas, Planning, & Feedback") [🐛](https://github.com/FlandreDaisuki/dmhy-subscribe/issues?q=author%3Amaple3142 "Bug reports") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->
Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
