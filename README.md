# generalplate (Webpack4 + Babel7)
**Vuepress, Nuxtなどのフレームワークが使えない、もしくは使わないとき用の自前フロントエンドテンプレート**

- packageマネージャーはYarnを使用しています。
- html, css, js すべてwebpackにてバンドルしています。(設定ファイルはconfigディレクトリ以下)

## Get Start
    yarn install
    yarn dev

## Commands
    yarn dev  // localhost立ち上げ
    yarn build:dev  // developビルド
    yarn build  // productionビルド
    yarn production  // 納品用 (productionビルド + html整形)

## Other

以下の機能も入れています。<br>
(各設定ファイルなどはscripts/config/に置いてあります)

- cssスプライト

  src/images/sprite以下にまとめたい画像を入れコマンド実行すると、

        yarn imgsprite

  src/images/sprite.png, src/style/base/_sprite.stylが出力されます。

- svgスプライト
  
  src/svg/iconsにsvgファイルを追加して以下のコマンドを実行すると、

        yarn svgsprite

  src/svg/svg-sprite.svg, src/view/parts/以下に_svgs.pugファイルが出力されるようになってます。

- html整形
  
  以下のコマンドで、distディレクトリのhtmlを設定に応じて整形してくれます。

        yarn htmlbeauty
