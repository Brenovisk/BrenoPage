const siteMetadata = require('./config/metadata.js');

module.exports = {
  siteMetadata: {
    title: 'Breno Lucas Developer',
    author: 'Breno Lucas',
    description: 'Um pequeno site sobre mim',
    siteUrl:  `https://www.brenolucas.com`,
    social: [
      {
        name:'github',
        url: 'https://github.com/Brenovisk'
      },
      {
        name:'instagram',
        url:'https://www.instagram.com/brenovks/'
      },
      {
        name:'facebook',
        url:"https://www.facebook.com/brenovks/"
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.brenolucas.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Breno Lucas Developer',
        short_name: 'Breno Dev',
        start_url: '/',
        background_color: '#504D4E',
        theme_color: '#504D4E',
        display: 'minimal-ui',
        icon: 'src/assets/images/logoB.png', // 512 x 512
        
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
