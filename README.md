# generalplate (Webpack4 + Babel7)
**Vuepress, Nuxtなどのフレームワークが使えない、もしくは使わないとき用のフロントエンドテンプレート**

- packageマネージャーはYarnを使用しています。
- html, css, js すべてwebpackにてバンドルしています。(設定ファイルはconfigディレクトリ以下)

## Get Start
    yarn install
    yarn dev

## Commands
    yarn dev  // localhost立ち上げ
    yarn build:dev  // developビルド
    yarn build  // productionビルド
    yarn production  // productionビルド && html整形

## Other

以下の2つの機能も入れています。<br>
(各設定ファイルはscripts/config/に置いてあります)

- svgスプライト
  
  src/svg/iconsにsvgファイルを追加して以下のコマンドを実行すると、

        yarn svgsprite

  src/svg/svg-sprite.svg, src/view/parts/以下に_svgs.pugファイルが出力されるようになってます。

- html整形
  
  以下のコマンドで、distディレクトリのhtmlを設定に応じて整形してくれます。

        yarn htmlbeauty
