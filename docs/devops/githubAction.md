---
id: githubActions
title: GitHub Actions 
keywords:
  - github
  - CI/CD
---

透過 GitHub Actions 可以針對 repository 執行CI/CD 

### CI/CD 
- CI: Continuous Integration 持續整合 - 分支程式碼合併至主分支時，進行編譯和自動化測試
- CD: Continuous Delivery / Continuous Deployment 持續交付/部署 - 自動化部署到環境

![](https://i.imgur.com/nIOL9X4.png)


### 設定步驟
在專案根目錄新增 `.github/workflows` 資料夾，並在資料夾下新增 `xxx.yml` 檔案

Github Actions 檔案內容由幾個單位組成，由大至小分別是：
```
Workflow -> Job -> Step -> Action
```
- **Workflow**: 整個 CI/CD 運行的過程
- **Job**： 一個 Workflow 由多個 Job 組成
- **Step**: 一個 Job 由多個 Step 組成
- **Action**: 一個 Step 下可以執行多個 Action 

範例：
```yml
# .github/workflows/xxx.yml
 
# workflow 的名稱，會在 Github Action 頁面上顯示的名稱（optional，預設使用.yml檔的檔名）
name: CI

# workflow 的觸發條件 - 當 push 到 master 時觸發
on: 
  push: 
    - master 

jobs:
  # job 的名稱為 build
  build:
    # runs-on 指定要運行的環境
    runs-on: ubuntu-latest
    # steps 定義 build job 的步驟 
    steps:
      # 第一步 Checkout - 使用其他開發者會並發佈的 action (使用 uses)
      - name: Checkout
      - uses: actions/checkout@v2
        with:
          node-version: 12.x
      # 步驟 2 - 執行 script 
      - run: yarn install
      # 步驟 3 - 執行 script
      - run: yarn test
 
```

### 觸發 workflow 
> [Using workflows Doc](https://docs.github.com/en/actions/using-workflows#triggering-a-workflow-with-events) @github

常見的情境：
- Github repo 的事件，例如發送 commit、發佈 issue 或建立 pull request
- 定期的排程
- 外部事件

範例：從 Github 手動觸發 workflow
![](https://i.imgur.com/v0rLnDm.png)

```yml
on: 
  workflow_dispatch:
    inputs:
      # 輸入參數
      logLevel:
        description: 'Log level'     
        required: true
        default: 'warning'
      # 輸入參數
      tags:
        description: 'Test scenario tags'  

# 可以將使用者輸入的 input 設成變數
jobs:
  printInputs:
    runs-on: ubuntu-latest
    steps:
    - name: Set custom variable
    # 需要給 id
    id: customize-var
    - run: |
        echo "::set-output name=tags::${{ github.event.inputs.tags }}"
    - name: Add tag
        uses: ncipollo/release-action@v1
        with:
          # 透過 id 的 outputs 取得客製化設定的變數
          tag: ${{steps.customize-var.outputs.tags}}
          generateReleaseNotes: true
```

## 矩陣建置（build matrix)

透過設定矩陣建置可以在不同的作業系統、平台和語系環境下同時進行測試

> [Using matrix Doc](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs) @github


範例：設置使用者輸入的 node 版本
```yml
on:
  workflow_dispatch:
    inputs:
      version: 
        description: 'Node version'   

jobs:
  example_matrix:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        version: ${{ github.event.inputs.version }}
    steps:
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.version }}
```
## 自訂環境變數和機密資訊(Secrets)

在 Github Repository 的 Settings 頁籤可以找到 `Environments` 和 `Secrets` 的 tab，可以在此新增變數。 Environments 可以新增環境，並設定不同環境下的 Secrets ，而 Secrets 則不分環境設定敏感資訊(例如：密碼或 token)。 

> GitHub Repo -> Settings → Secrets → Actions 中設定 secret

- **Secrets**: 透過`${{ secrets.name }}`取得，例如：
```yml
steps:
  - name: Hello world action
    with: 
      API_SECRET: ${{ secrets.APISecret }}
```

另外，也可以直接在 `.yml` 檔直接設定公開的環境變數
 
- **自訂環境變數** 
- 環境變數區分大小寫 (case-sensitive)
- 可在全域、job、step 中使用 `env` 變數進行設定，使用 `$NAME` 取得，也可在 if 判斷式中使用 

```yml
name: Greeting on variable day

on:
  workflow_dispatch

env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Monday' }}
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK"
        env:
          First_Name: Mona
```

## 預設環境變數

> [Default environment variables Doc](https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables) @github

- `GITHUB_ACTOR`: 使用者名稱
- `GITHUB_REF`:  當下所在分支/標籤 ex: refs/heads/develop , ref/tags/tag_name
- `GITHUB_REF_NAME`: 縮寫當下所在分支/標籤名稱 ex: develop

## 整合 gitHub Actions 和 Slack 通知
目標: 在開始部署時發送通知到 slack chanel 

```yml
# 使用 8398a7/action-slack@v3 套件
# text 為發送到 chanel 的文字訊息
# 客製化欄位(custom_payload)提供部署環境的資訊  
jobs:
  build:
    name: build
    runs-on: ubuntu-latest
    steps:
      - uses: 8398a7/action-slack@v3
        with:
          status: custom
          fields: repo,ref
          custom_payload: |
            {
              attachments: [{
                text: `:mega: Start deploying by ${{github.actor}}`,
                fields: [{
                  title: 'deploy environment',
                  value: ${{github.ref == 'refs/heads/master'}} ? 'prod' : 'env',
                  short: true
                }]
              }]
            }  
        env:
        # 需要 slack bot 的 webhook url 
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```
> [創建slack webhook](https://slack.com/help/articles/360041352714-Create-more-advanced-workflows-using-webhooks)




