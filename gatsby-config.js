module.exports = {
  siteMetadata: {
    title: `Level UP Code Works`,
    description: `U.S. Air Force software development outfit in San Antonio, Texas.`,
    author: `@NoisyTrumpet`,
    siteUrl: `https://levelup.noisytrumpet.com/`,
    baseUrl: `https://levelup.noisytrumpet.com/`,

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /SVG/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
    	resolve: `gatsby-plugin-robots-txt`,
    	options: {
        	host: `https://levelup.noisytrumpet.com/`,
        	sitemap: `https://levelup.noisytrumpet.com/sitemap.xml`,
        	policy: [{ userAgent: `*`, disallow: `/` }],
    	},
	},
  ],
}
