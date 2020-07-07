let gulp = require(`gulp`);
let plumber = require(`gulp-plumber`);
let sourcemap = require(`gulp-sourcemaps`);
let sass = require(`gulp-sass`);
let postcss = require(`gulp-postcss`);
let autoprefixer = require(`autoprefixer`);
let server = require(`browser-sync`).create();
let csso = require(`gulp-csso`);
let rename = require(`gulp-rename`);
let webp = require(`gulp-webp`);
let posthtml = require(`gulp-posthtml`);
let include = require(`posthtml-include`);
let del = require(`del`);

let webpack = require(`webpack-stream`);

gulp.task(`css`, function () {
  return gulp
    .src(`source/sass/style.scss`)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(`build/css`))
    .pipe(csso())
    .pipe(rename(`style.min.css`))
    .pipe(sourcemap.write(`.`))
    .pipe(gulp.dest(`build/css`))
    .pipe(server.stream());
});

gulp.task(`server`, function () {
  server.init({
    server: `build/`,
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch(`source/sass/**/*.{scss,sass}`, gulp.series(`css`));
  gulp.watch(`source/*.html`, gulp.series(`html`, `refresh`));
  gulp.watch(`source/js/**/*.js`, gulp.series(`js`, `refresh`));
  gulp.watch(
      `source/img/**/*.{png,jpg,gif,webp}`,
      gulp.series(`copy`, `refresh`)
  );
});

gulp.task(`js`, () => {
  const entry = [`main`].reduce((acc, el) => {
    acc[el] = `./source/js/${el}.js`;
    return acc;
  }, {});

  const babel = {
    loader: `babel-loader`,
    options: {
      presets: [
        [
          `@babel/preset-env`,
          {
            debug: true,
            corejs: 3,
            useBuiltIns: `usage`,
          },
        ],
        [`@babel/preset-react`],
      ],
      plugins: [
        `@babel/plugin-transform-runtime`,
        `@babel/plugin-transform-async-to-generator`,
      ],
    },
  };

  return gulp

    .src(`./source/js/`)
    .pipe(
        webpack({
          entry,
          mode: `production`,
          output: {
            filename: `[name].js`,
            chunkFilename: `vendor.js`,
          },
          optimization: {
            splitChunks: {
              chunks: `all`,
            },
          },
          watch: false,
          devtool: `source-map`,
          module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: babel,
              },
              {
                test: /\.svg$/,
                use: [
                  babel,
                  {
                    loader: `react-svg-loader`,
                    options: {
                      svgo: {
                        plugins: [{removeViewBox: false}],
                      },
                    },
                  },
                ],
              },
            ],
          },
        })
    )
    .pipe(gulp.dest(`./build/js`));
});

gulp.task(`refresh`, function (done) {
  server.reload();
  done();
});

gulp.task(`webp`, function () {
  return gulp
    .src(`source/img/**/*.{png,jpg}`)
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest(`source/img`));
});

gulp.task(`html`, function () {
  return gulp
    .src(`source/*.html`)
    .pipe(posthtml([include()]))
    .pipe(gulp.dest(`build`));
});

gulp.task(`copy`, function () {
  return gulp
    .src(
        [
          `source/fonts/**/*.{woff,woff2}`,
          `source/img/**/*.{webp,jpg,png,gif}`,
          `source/*.ico`,
        ],
        {
          base: `source`,
        }
    )
    .pipe(gulp.dest(`build`));
});

gulp.task(`clean`, function () {
  return del(`build`);
});

gulp.task(`build`, gulp.series(`clean`, `copy`, `css`, `js`, `html`));
gulp.task(`start`, gulp.series(`build`, `server`));
