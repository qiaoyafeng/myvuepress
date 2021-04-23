module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/', target:'_blank' },
      { text: 'External', link: 'https://bing.com', target:'_blank', rel:'' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }

    ]
  }
}
