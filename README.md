# generalplate (Webpack4 + Babel7)

> Vuepress, Nuxt などのフレームワークが使えない、もしくは使わないとき用の自前フロントエンドテンプレート

- package マネージャーは Yarn を使用しています。
- html, css, js すべて webpack にてバンドルしています。(設定ファイルは config ディレクトリ以下)

## Get Start

    yarn install
    yarn dev

## Commands

    yarn dev  // localhost立ち上げ
    yarn build:dev  // developビルド
    yarn build  // productionビルド
    yarn production  // 納品用 (productionビルド + html整形)

## Note

以下のシェルスクリプトも入れています。<br>
(各設定ファイルなどは scripts/config/に置いてあります)

- css スプライト

  src/images/sprite 以下にまとめたい画像を入れコマンド実行すると、

        yarn imgsprite

  src/images/sprite.png, src/style/base/\_sprite.styl が出力されます。

- svg スプライト

  src/svg/icons に svg ファイルを追加して以下のコマンドを実行すると、

        yarn svgsprite

  `src/svg/`フォルダに`svg-sprite.svg`が出力されます。

- html 整形

  以下のコマンドで、build ディレクトリの html を設定に応じて整形してくれます。

        yarn htmlbeauty
