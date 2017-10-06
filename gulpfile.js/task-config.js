module.exports = {
    browserSync: {
        server: {
            baseDir: 'public'
        }
    },

    javascripts: {
        entries: {
            app: ['./app.js']
        },
        extensions: ['js', 'json'],
        extractSharedJs: false
    },

    stylesheets: {
        autoprefixer: {
            browsers: ['last 2 version']
        },
        sass: {
            indentedSyntax: true,
            includePaths: ['./node_modules/normalize.css']
        },
        extensions: ['sass', 'scss', 'css']
    },

    html: {
        dataFile: '_data/global.json',
        htmlmin: {
            collapseWhitespace: true
        },
        extensions: ['html', 'json'],
        excludeFolders: ['_layouts', '_shared', '_macros', '_data']
    },

    images: {
        extensions: ['jpg', 'png', 'gif']
    },

    svgs: {
        extensions: ['svg']
    },

    fonts: {
        extensions: ['woff2', 'woff', 'eot', 'ttf', 'svg', 'otf']
    },

    svgSprite: {
        extensions: ['svg']
    },

    production: {
        rev: true
    },

    static: true,

    watch: {
        gulpWatch: {
            usePolling: false
        }
    }
};
