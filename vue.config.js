module.exports = {
  // publicPath: 'https://apps-caja-testing.cajapsipba.org.ar/emergenciasmedicasvista',
  // publicPath: '/emergenciasmedicasvista/',
  // assetsDir: './',
  // assetsDir: 'https://apps-caja-testing.cajapsipba.org.ar/emergenciasmedicasvista/',
  // publicPath: process.env.DEPLOY_STAGE === 'production' ? 'https://apps-caja.cajapsipba.org.ar/emergenciasmedicasvista/' : 'https://apps-caja-testing.cajapsipba.org.ar/emergenciasmedicasvista/',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: { proxy: {
      '^/api': {
        target: (process.env.NODE_ENV === "production") ? 
        'https://repdf.cajapsipba.org.ar/'
        : 'https://repdf-dev.cajapsipba.org.ar/',
        ws: true,
        changeOrigin: true
        }
      },
      disableHostCheck: true
    }
}
