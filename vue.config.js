module.exports = {
    devServer: {
        proxy: {
            "^/": {
                target: `${process.env.API_RAW_URL}`,
                changeOrigin: true,
                secure: false,
                pathRewrite: { "^/": "" },
                logLevel: "debug",
            },
        },
        port: 7666,
    },
};
