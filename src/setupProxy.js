const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.spotify.com/v1/',
      pathRewrite: {
        '/api': '',
      },
      changeOrigin: true,
    })
  );
  // app.use(
  //   '/auth',
  //   createProxyMiddleware({
  //     target: 'https://accounts.spotify.com/',
  //     pathRewrite: {
  //       '/auth': '',
  //     },
  //     changeOrigin: true,
  //   })
  // );
};
