// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Stefan Dorresteijn',
  plugins: [
    {
      use: '@stefandorresteijn/gridsome-source-devto',
      options: {
        typeName: 'Article',
        username:'stefandorresteijn', //change username
        apiKey: process.env.DEVTO_API_KEY, //get your API key from https://dev.to/settings/account
        route: '/writing/:slug',
      }
    }
  ]
}
