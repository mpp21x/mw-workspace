# MwWorkspace
 
Angular Library


# 常用指令


`./node_modules/.bin/ng generate library XXX --prefix matt`

`./node_modules/.bin/ng build mw2021-library --watch`

`./node_modules/.bin/ng build mw2021-library --prod`


# 開發 Library 以及更新版本流程

* 修改 library source code
* 需要在 library 的 `index.ts` 輸出新增或修改的 Class 或是 Function，外部才可以存取
* 修改 Library `package.json` 的 `version`
* 在 `mw-workspace` 目錄輸入 `ng build {library_name}  --prod` 指令，編譯 Ivy Library輸出至 dist
* 移動 source code(ts) 到 dist 裡面的 library 同名資料夾 (Optional)
* 在 `dist/{library}` 目錄輸入 `npm publish` 上傳
* Git Commit
  1. 在 `mw2021-library` 目錄進行 `git commit` 以及 `git tag 目前版本`，假設目前 `package.json` 的 `version` 為 `1.0.0` 則輸入 `git tag v1.0.0`
  2. 在 `mw-workspace` 目錄進行 `git commit` 

