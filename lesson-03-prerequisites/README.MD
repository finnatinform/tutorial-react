# Lesson 03: Prerequisites
In dieser Lesson bereiten wir die Umgebung für die React Umgebung vor. Dazu verwenden wir den Module Bundler [webpack](https://github.com/webpack/webpack). Dieser erlaubt es uns mit Hilfe der passenden Loader in verschiedenen Dateien zu entwickeln und diese später zusammenzuführen. webpack bietet außerdem den Vorteil, dass es nicht genutzte Teile von includierten Frameworks aus dem Mergefile rauswirft.

## Tutorial
Ein tolles Tutorial zu der Umgebung und ersten Schritten findet sich [hier](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html).

## Rechner
1. typescript: npm install -g typescript
2. webpack: npm install -g webpack

## Boilerplate
npm install --save react react-dom @types/react @types/react-dom
npm install --save-dev typescript awesome-typescript-loader source-map-loader

## Files
We will need a tsconfig.json
```json
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es5",
        "jsx": "react"
    },
    "include": [
        "./src/**/*"
    ]
}
```

And also an index.html
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Hello Inform!</title>
    </head>
    <body>
        <div id="application"></div>

        <!-- Dependencies -->
        <script src="./node_modules/react/umd/react.development.js"></script>
        <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>

        <!-- Main -->
        <script src="./dist/bundle.js"></script>
    </body>
</html>
```

Last, but not least: a webpack.config.js
```javascript
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
```
