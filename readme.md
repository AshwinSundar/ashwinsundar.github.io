# Personal Site

## To Do

- [done] define separate tailwind files, one for markdown/blog posts, one for everything else
- setup mythic beasts. deploy via docker? or whatever is simplest

## About

- Static site, created by Hugo
- Styled by Tailwind   

## Development Mode

### Process 1

- `hugo server &`

### Process 2

- `cd themes/ashwin`
- `./tw-dev.sh`

## Production

- use `./tw-prod.sh` instead

## Code tree

```shell
├── assets
├── content
│   └── posts # markdown posts for blog. create new post with `hugo new content posts/{title}.md`
├── data # data objects, accessible from templates with
│   └── projects.json # independent projects that I've worked on, accessible from templates with `site.Data.projects
├── hugo.toml # hugo config
├── layouts
│   |── 404.html # 404 page layout
│   └── home.html # homepage layout
├── public # site pages. auto-generated by `hugo server`
├── readme.md
├── resources
├── static
└── themes
    └── ashwin
        |── archetypes
        |   |── default.md # front matter for blog posts created with `hugo new content` (https://gohugo.io/content-management/archetypes/)
        |   └── posts.md # front matter for blog posts created with `hugo new content posts/`
        |── assets
        |   └── css
        |       |── main.tw.css # tailwind css setup for all pages except posts/ 
        |       |── posts.tw.css # tailwind css setup for posts/
        |       |── o.main.tw.css # main tailwind output, auto-generated by ./tw.dev.sh
        |       └── o.posts.tw.css # tailwind output for posts/, auto-generated by ./tw.dev.sh
        ├── layouts
        |   |── _default
        |   |   |── baseof.html # base template for all pages (https://gohugo.io/templates/base/#define-the-base-template)
        |   |   |── list.html # renders lists (https://gohugo.io/templates/lists/)
        |   |   └── single.html # base template for single pages. Hugo renders all markdown files using this template (https://gohugo.io/templates/single-page-templates/)
        |   └── partials
        |   |   |── footer.html
        |   |   |── header.html
        |   |   |── main_css.html # snippet for retrieving o.main.tw.css. used by main_head.html
        |   |   |── main_head.html # head content for all pages except posts/. Used by baseof.html
        |   |   |── menu.html # renders a menu
        |   |   |── posts.css.html # snippet for retrieving o.posts.tw.css. used by posts_head.html
        |   |   |── posts_head.html # head content for posts/. used by single.html
        |   |   └── terms.html # terms of service. can probably remove
        ├── static
        ├── tailwind.config.js # tailwind configuration
        ├── tw-dev.sh # tailwind dev mode
        └── tw-prod.sh # tailwind production script
```