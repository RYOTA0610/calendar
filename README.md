# calendar

**デモはこちら：** [https://ryota0610.github.io/calendar/](https://ryota0610.github.io/calendar)

## 概要

月の切り替えが可能な万年カレンダーを実装したWebアプリケーションです。[図解！ TypeScriptのツボとコツがゼッタイにわかる本 “超”入門編](https://www.shuwasystem.co.jp/book/9784798067797.html) を参考に、TypeScriptの学習を目的として作成しました。

## 主な機能

*   **表示：**
    *   アプリ起動時に当月のカレンダーを表示します。
    *   現在の年月（例：2025年06月）を上部に表示します。
    *   1日から末日までの日付をグリッド形式で表示します。
*   **操作：**
    *   カレンダーの右上にあるナビをクリックすると翌月の表示に切り替わります。
    *   カレンダーの左上にあるナビをクリックすると前月の表示に切り替わります。

## 必要条件・動作環境

**実行環境：**

*   モダンなWebブラウザ (Chrome, Firefox, Safari, Edgeなど)

**開発環境：**

*   [Node.js](https://nodejs.org/) (特定のバージョン指定はありませんが、最新のLTS版を推奨します)
*   [npm](https://www.npmjs.com/) (Node.jsに付属)
*   TypeScript Compiler (`tsc`) (npm経由でインストールされます)

## 技術スタック

*   HTML
*   CSS
*   TypeScript

## インストール・セットアップ

ローカル環境でこのストップウォッチを動かし、開発するには以下の手順が必要です。

1.  リポジトリをクローンします：
    ```bash
    git clone https://github.com/RYOTA0610/calendar.git
    cd calendar
    ```
2.  開発に必要なパッケージをインストールします：
    ```bash
    npm install
    ```
3.  TypeScriptコードをJavaScriptにコンパイルします：
    ```bash
    npm run build
    ```
    これにより、`docs`フォルダ内に`index.js`ファイルが生成（または更新）されます。
4.  `docs/index.html` ファイルをお使いのWebブラウザで開きます。

## 使い方

1.  **デモページを開く：** [https://ryota0610.github.io/calendar/](https://ryota0610.github.io/calendar/) にアクセスするか、上記「インストール・セットアップ」の手順でローカルで `docs/index.html` を開きます。
2.  **カレンダーを確認する：** アプリを起動すると、当月のカレンダーが表示されます。上部には現在の「年」と「月」が表示されます。
3.  **翌月に移動する：** カレンダー右上のナビゲーション（▷ のようなアイコン）をクリックすると、翌月のカレンダーに切り替わります。
4.  **前月に移動する：** カレンダー左上のナビゲーション（◁ のようなアイコン）をクリックすると、前月のカレンダーに切り替わります。

## ファイル構成

```text
calendar/
├── docs/               # 開発用ソースファイル & GitHub Pages公開用ディレクトリ
│   ├── index.html
│   ├── index.css
│   ├── index.ts        # TypeScriptソース
│   ├── index.js        # (tscによって生成されるJavaScript)
├── release/            # 完成版参照用コード (本書の解答コード)
│   ├── index.html
│   ├── index.css
│   ├── index.js
│   ├── index.ts
├── .gitignore
├── package-lock.json   # (npm install によって生成されるロックファイル)
├── package.json        # npm パッケージ設定
├── README.md
├── tsconfig.json       # TypeScript コンパイラ設定
└── vercel.json         # (Vercel用設定ファイル - 現在はGitHub Pagesを使用)
```

## 貢献方法

コードの改善提案やバグ報告を歓迎します！

*   **バグ報告・機能要望：** GitHubリポジトリの **[Issues](https://github.com/RYOTA0610/calendar/issues)** に投稿してください。
*   **コードの改善提案 (Pull Request)：**
    1.  このリポジトリ ( `https://github.com/RYOTA0610/calendar` ) を **Fork** します。
    2.  改善内容のための新しい **Branch** を作成します (`git checkout -b feature/your-improvement`)。
    3.  コードを修正・改善し、変更内容を **Commit** します (`git commit -m 'Improve something'`)。
    4.  作成したブランチを自分のForkしたリポジトリに **Push** します (`git push origin feature/your-improvement`)。
    5.  元のリポジトリ ( `RYOTA0610/calendar` ) に対して **Pull Request** を作成し、変更内容を説明してください。

## ライセンス

**重要：** このプロジェクトのコードは、書籍「図解！ TypeScriptのツボとコツがゼッタイにわかる本 “超”入門編」に掲載されているサンプルコードを基に、作者 ([@RYOTA0610](https://github.com/RYOTA0610)) が学習目的で作成・改造したものです。

元の書籍に明確なライセンス表記が見当たらなかったため、**本リポジトリ全体に対して特定のオープンソースライセンス（MITライセンスなど）は適用されていません。**

コードを参照・利用される際は、**元の書籍の著作権に十分にご注意ください。** 個人的な学習や参照の範囲を超える利用（例: 再配布、商用利用など）については、書籍の利用規約や著作権者の意向をご確認いただく必要があります。

## 作者・連絡先

*   **RYOTA0610**
*   GitHub：[@RYOTA0610](https://github.com/RYOTA0610)

## 今後の計画

*   **今日のハイライト表示：**
    *   現在の日付（今日）を目立つように背景色や枠線で強調表示できるようにします。

## 謝辞

本プロジェクトの開発にあたり、以下の書籍を参考にさせていただきました。心より感謝申し上げます。

*   **書籍：** [図解！ TypeScriptのツボとコツがゼッタイにわかる本 “超”入門編](https://www.shuwasystem.co.jp/book/9784798067797.html) (中田 亨 著, 秀和システム)
    *   本書のサンプルコードは、本プロジェクトの学習と開発の基礎となりました。
