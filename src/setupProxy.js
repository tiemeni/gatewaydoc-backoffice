const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://marque-blanche-bo-backnd.vercel.app',
      pathRewrite: {'^/api/' : '/'},
      changeOrigin: true,
    })
  );
  
};