# Gatsby & Netlify CMS Example

An example website built using Gatsby V2 and Netlify CMS. The website is a fake JavaScript meetup site that lists upcoming meetups, information about the meetup group, as well as a list of past meetups.

The purpose of the repository is to provide an idea of how a Gatsby project is structured with Netlify CMS. You can easily deploy your own instance of this application by clicking the button below:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/robertcoopercode/gatsby-netlify-cms)

## Local Development

### Prerequisites

- Node (see [.nvmrc](./.nvmrc) for version)

### Run the project

```
$ git clone git@github.com:robertcoopercode/gatsby-netlify-cms.git
$ cd gatsby-netlify-cms
$ yarn
$ yarn develop
```

To test the CMS locally, you'll to need run a production build of the site:

```
$ yarn build
$ yarn serve
```

### Setting up the CMS

For details on how to configure the CMS, take a look at the [Netlify CMS Docs](https://www.netlifycms.org/docs/intro).

## Useful Ressources
- ["Official" Gatsby and Netlify CMS starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms)
This starter includes a blog built with Gatsby and Netlify CMS. It was actually used as the starting off point for this repository.