module.exports = {
  devServer: {
    open: true,
    port: 9999,
    proxy: {
      "/api": {
        target: "http://localhost:9999",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};