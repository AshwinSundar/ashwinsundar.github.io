**Useful Resources**

- https://www.gatsbyjs.com/docs/quick-start/
- https://docs.github.com/en/pages/quickstart
- https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages
- See status of deployments -> https://github.com/AshwinSundar/ashwinsundar.github.io/actions
- Configure build target -> https://github.com/AshwinSundar/ashwinsundar.github.io/settings/pages
- Setting up custom domains -> https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages

**Other Notes**

- Create a file called `CNAME` containing your custom domain, and include it in the `public` folder so gh-pages grabs it on deployment.
- if accessing via ssh, make sure you run `gh config set git_protocol https -h github.com`
- if gh asks you for a password, switch to https using `gh config set git_protocol https -h github.com`
- watch build with `gh run watch`