# Paper

An extremely simple [paper](https://github.com/bookiu/hugo-theme-paper.git) theme to the [Hugo](https://gohugo.io) site generator.

## Installation

Inside the folder of your Hugo site run:

```bash
$ mkdir themes
$ cd themes
$ git clone https://github.com/bookiu/hugo-theme-paper.git paper
```

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.


## Example config.yml

To customize your theme you can use following params:

```yaml
baseurl: "https://example.com/"
title: mytitle
theme: paper
languageCode: en-us
copyright: My Name
googleAnalytics: XXX
disqusShortname: XXX
pygmentsUseClasses: true
pygmentsCodefences: true

markup:
  highlight:
    codeFences: true
    guessSyntax: false
    hl_Lines: ""
    lineNoStart: 1
    lineNos: false
    lineNumbersInTable: true
    noClasses: true
    tabWidth: 2

privacy:
  disqus:
    disable: true
  googleAnalytics:
    anonymizeIP: true
    respectDoNotTrack: true
    useSessionStorage: false

author:
  name: My Name
  profile: ""

taxonomies:
  tag: tags

params:
  mainSections:
    - post
  intro: true
  headline: My headline
  description: My description
  github: "https://github.com/XXX"
  gitlab: "https://gitlab.com/XXX"
  linkedin: "https://linkedin.com/in/XXX/"
  twitter: "https://twitter.com/XXX"
  stackoverflow: "https://stackoverflow.com/users/XXX/YYY"
  facebook: "https://www.facebook.com/username"
  email: xxx@example.com
  opengraph: true
  shareTwitter: true
  rss: true
  shareFacebook: true
  shareLinkedIn: false
  dateFormat: "Mon, Jan 2, 2006"
  exponeaJsUrl: ""
  exponeaTarget: ""
  exponeaToken: ""
  exponeaTrackVisits: false
  readingTime: true
  readingTimeText: "Estimated reading time:"
  fathomUrl: ""
  fathomSiteId: ""
  plausibleAnalytics:
    domain: ""
    # Default value is plausible.io, overwrite this if you are self-hosting or using a custom domain
    serverURL: ""

permalinks:
  post: "/:year/:month/:day/:filename/"

menu:
  main:
    - name: Blog
      url: /
      weight: 1
    - name: Projects
      url: /project/
      weight: 2
    - name: Contact
      url: /page/contact/
      weight: 3
    - name: About
      url: /page/about/
      weight: 4
```

You can also inject arbitrary HTML into `<head>` simply by overriding the `extra-in-head.html`
partial, which is meant for that purpose.
