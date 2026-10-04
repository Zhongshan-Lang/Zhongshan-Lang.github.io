# Weilin Wang — Personal Homepage

Static personal homepage for https://zhongshan-lang.github.io/.
No package installation or build step is needed.

## Editing

- `index.html`: navigation, biography, project descriptions and links.
- `style.css`: colors, fonts, spacing and mobile layouts. Global colors are at the top.
- `script.js`: optional project filtering; the site works without JavaScript.
- `assets/`: images, favicon and future documents.

Open `index.html` locally to preview, or run `python -m http.server 8000` from this directory.
GitHub Pages serves these files from the main branch's root.

## Adding a project

Copy an `<article class="project">` block inside `.project-grid`. Use
`data-category="web"`, `"3d"` or `"ar"` for filtering. Update the title,
description, tags and notes. If a project has no public demo, omit its demo
link rather than using an empty link.

The current project covers are schematic illustrations, not screenshots.
To add a screenshot, replace the contents of `.project-visual` with an
`<img src="assets/example.webp" alt="Describe the project screenshot">`,
remove `aria-hidden`, and style the image to cover the available space.

## Items still to provide

- A portrait, if desired.
- Confirmed contact email, then add a `mailto:` link to the contact section.
- Reviewed CV PDF. Add it to `assets/`, then add a link to that file.
- Screenshots or videos for each project.

No email address, publications, awards or completed research have been invented.
