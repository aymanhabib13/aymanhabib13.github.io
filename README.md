# Personal website

A one-page academic site, live at https://aymanhabib13.github.io. Plain HTML, CSS, and about sixty lines of JavaScript. There is no build step: open `index.html` in a browser and it works.

## What's in here

| File | Purpose |
| --- | --- |
| `index.html` | All the content. The only file you'll edit regularly. |
| `assets/style.css` | Colors, fonts, spacing. The tokens at the top control the whole look. |
| `assets/main.js` | Light/dark toggle, the photo flip on tap, and the email link. |
| `assets/img/headshot.jpg`, `assets/img/hiking.jpg` | Your two photos, 800×800, metadata stripped. |
| `favicon.svg` | The little mountain in the browser tab. |
| `.nojekyll` | Tells GitHub Pages to serve the files exactly as they are. |

## Adding your CV

1. Export your CV as a PDF and name it `cv.pdf`.
2. Put it in the `assets/` folder, next to `style.css`.
3. In `index.html`, find the line `<!-- CV: save it as assets/cv.pdf` inside the links block. Delete that comment line and the `-->` line below it, leaving `<li><a href="assets/cv.pdf">CV</a></li>` in place.

The CV link then appears between your email and Google Scholar. If the site is already live, push the change and it updates.

## Still optional

- **GitHub and X.** Both links are inside a comment in the links block. Fill in the URLs and remove the comment markers, or delete the lines.
- **Footer date.** Update "last updated" when you make changes.

## Keeping it current

- **News.** Copy an `<li>` in the News list. Newest first.
- **Publications.** Copy the `<li class="pub">` block. Bold your own name with `<b class="me">`, mark equal contribution with `<sup>*</sup>`, and use `<span class="badge">` for orals, spotlights, and awards. There is a commented-out `code` link in the AaLLM entry for when the repo is public.
- **Teaching & service.** The section is in `index.html` inside a comment. Remove the comment markers and fill in the items when you have a course or reviewing to list.
- **Beyond research.** Trails are a plain list of `<li>`s. Add a sentence about other hobbies if you like.
- **Photos.** To swap one, drop in a new square JPG at the same path. Both images should be the same size so the flip lines up.

## Updating the live site

The page is served from the `main` branch of https://github.com/aymanhabib13/aymanhabib13.github.io. To publish a change, from this folder:

```
git add -A
git commit -m "Describe the change"
git push
```

GitHub rebuilds the site within a minute or so. Hard-refresh the browser if an old version lingers.

## Preview locally

Double-click `index.html`, or from this folder run:

```
python -m http.server 8000
```

and open http://localhost:8000.

## Adjusting the look

- **Colors.** Edit the tokens at the top of `assets/style.css`. `--accent` is the one you see everywhere. The dark palette appears twice on purpose (system-dark and toggled-dark); keep both blocks identical.
- **Fonts.** Change the Google Fonts `<link>` in `index.html` and the `--font-*` tokens.
- **Width.** `--measure` sets the column width.
- **Turn off the flip.** Delete the second `<img>` and the `<figcaption>`; the photo becomes a plain image.
- **Turn off the theme toggle.** Delete `<button class="theme-toggle">`. The site still follows the OS setting.

## Ideas on the shelf

Things that would fit this design if you want more personality later:

- A "currently" line under the bio: what you're reading, listening to, or the last trail you did.
- Plain-English tooltips on the jargon in your bio, so people outside your field can hover and get the gist.
- A tiny hiker that climbs the footer ridge as the reader scrolls down the page.
- Links from each trail name to a photo from that hike.
- A photo that changes with the season or the time of day.
