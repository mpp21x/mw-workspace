# MwWorkspace
 
Angular Library


# 常用指令


`./node_modules/.bin/ng generate library XXX --prefix matt`

`./node_modules/.bin/ng build mw2021-library --watch`

`./node_modules/.bin/ng build mw2021-library --prod`


# 開發 Library 以及更新版本流程

* 修改 library source code
* 需要在 library 的 `index.ts` 輸出新增或修改的 Class 或是 Function，外部才可以存取
* 修改 `package.json` 的 `version`
* 在 `mw-workspace` 裏面輸入 `ng build {library_name}  --prod` 指令，編譯 Ivy Library輸出至 dist
* 移動 source code(ts) 到 dist 裡面的 library 同名資料夾 (Optional)
* 輸入 `npm publish` 上傳 (必須在 `dist/{library}` 輸入)
* Git Submodule(Library) commit & Git Repository()

