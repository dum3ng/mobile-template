# mobile template

## rational

有时并不想或者不需要使用框架, 而只是简单的使用 HTML, css, js 来编写.
但是又想使用 css preprocessor, 更 modern 的 js, HTML proprocessor(HTML is too verbose),
那么可以使用这个使用 webpack 来进行工程化的 template project.

## contents

### html

使用 `pug` 作为 html 预编译器, 语法更简洁, 支持`block`, `include`, `extend` 等高级特性

### css

使用 `sass`, `postcss`, `tailwindcss`.

!!!note: purgecss

在 webpack 的配置中, 使用了`purgecss`, 由于默认的 extractor 不处理 `@`, `:`,`/` 等特殊字符,
所以在使用`tailwindcss`时可能会漏掉某些样式.

See: [purgecss extractors](https://purgecss.com/extractors.html#default-extractor)

### js

使用`babel-loader`, 可以使用 es 的新特性,以及使用 node modules.

#### TODO

考虑添加 `ts` 支持

### webpack config

使用 `webpack-chain` 来配置 webpack, 详细配置可查看:

- webpack.base.js
- webpack.dev.js
- webpack.production.js
