# Weilin Wang — Personal Homepage

Static personal homepage: https://zhongshan-lang.github.io/

White background, blue links and compact text sections. No build step,
package installation or JavaScript is required.

## Edit the site

- `index.html`: introduction, projects, interests, background and links.
- `style.css`: layout, typography and responsive styles.
- `assets/`: favicon, future screenshots and reviewed CV PDF.

Each project is an `<article class="project">` block. Copy one to add a
project and update its title, description, technologies and notes.
Native `<details>` elements provide expandable notes without JavaScript.

The project indices are neutral text markers rather than artificial
screenshots. Replace a `.project-index` block with an actual image when
available; give it meaningful alt text and constrain it to the column width.

Add a verified email and reviewed CV link in the contact section when ready.
The live demo for Singapore MRT uses the supplied Vercel address.

Open index.html locally to preview. GitHub Pages serves the main branch root.
