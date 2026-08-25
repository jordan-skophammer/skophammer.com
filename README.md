# Skōphammer Audio Engineering — Website

A single-page website for Skōphammer Audio Engineering (remote mixing &
mastering). All the HTML, CSS, and JS lives in one file, `index.html`, plus
a small `images/` folder for the hero and About photos — no build step, no
dependencies, ready to publish on GitHub Pages as-is.

## 1. Publish it on GitHub Pages

1. Create a new repository on GitHub (e.g. `skophammer-audio` or
   `<your-username>.github.io` if you want it at the root of your GitHub
   Pages domain).
2. Push these files to the repo:
   ```bash
   cd skophammer-website
   git init
   git add index.html README.md images robots.txt sitemap.xml
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. GitHub will give you a live URL, usually
   `https://<your-username>.github.io/<your-repo>/` (or just
   `https://<your-username>.github.io/` if you named the repo
   `<your-username>.github.io`). It can take a minute or two to go live.

## 2. Things to customize before/after launch

All of these are marked in the code with comments or are easy to find by
searching the text below in `index.html`.

**Contact form (currently non-functional until you set this up)**
The form posts to [Formspree](https://formspree.io) so it works without a
backend server. To activate it:
1. Create a free Formspree account and a new form.
2. Copy the endpoint it gives you (looks like `https://formspree.io/f/xxxxxxxx`).
3. In `index.html`, find `YOUR_FORM_ID` in the `<form action="...">` tag and
   replace it with your real endpoint.
Until you do this, the "Email Me Directly" mailto link under the form still
works fine.

**Audio samples**
The Portfolio section embeds your "Sound Refinery Productions Spotlight"
SoundCloud playlist (search for `sc-embed` in `index.html`) via SoundCloud's
standard `w.soundcloud.com/player` iframe. To swap in a different playlist
later — get the new one's embed code from SoundCloud (share → embed), then
replace the `src` URL on the `<iframe>` and update the two links in the
`.sc-attribution` div right below it so the "now playing" credit line stays
accurate.

**Artist / client list**
Search for `artist-list` in `index.html` to find the roster section between
Portfolio and About. It's a plain alphabetized `<ul>` that lays itself out
into 3 columns (2 on tablet, 1 on mobile) via CSS `columns`, so adding or
removing a name is just editing the `<li>` items — no grid math needed. Keep
the list alphabetized as you edit it.

**Photos**
The hero background (`images/hero-bg.jpg`) lives in the `images/` folder.
The About section now has a one-photo-at-a-time slideshow instead of a
single static photo — it's the `#aboutSlideshow` div in the About section
of `index.html`, built from `images/about-studio.jpg` plus five more in
`images/gallery/` (pedalboard, control room, amp + mics, drummer, fader
close-up). It auto-advances every 4.5s, crossfading between photos, with
dots at the bottom to jump to a specific one. The logic lives in the
"About section slideshow" block near the bottom of the `<script>` tag.

To swap or add a photo: drop the new file in `images/gallery/`, add an
`<img>` tag inside `#aboutSlideshow` with a real `alt` description, and add
a matching `<button>` in `.slide-dots` (update the `data-index` values and
`aria-label` numbering if you're inserting rather than appending). Hover
over the slideshow in a browser to pause it — that's intentional, not a
bug. If the visitor's OS has "reduce motion" turned on, it won't
auto-advance at all — the dots still work.

Every gallery photo, including the hero background, was normalized to
1600px on its longest edge so nothing looks out of place next to the
others. Two of the source photos (the drummer shot and the fader close-up)
started out very small — 829×553 and 500×500 — so those two were run
through an AI super-resolution model (FSRCNN) before resizing down, which
sharpens them well beyond a simple stretch but can't invent detail that
wasn't in the original. A higher-resolution source photo will always beat
an upscaled one if you have the option to reshoot.

**Social links**
Search for `TODO: replace #` in the Contact section and point the
Instagram/TikTok/SoundCloud links at your real profiles.

**Note on the free / pay-what-you-want offer**
The site doesn't advertise this publicly — it's left as a conversation to
have directly with each artist once they reach out, rather than a blanket
banner. If you ever want to promote it site-wide again, it's easy to re-add
as a section between the hero and Services.

## 3. Local preview

No build tools needed — just open `index.html` directly in a browser, or
run a tiny local server:
```bash
cd skophammer-website
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## 4. Custom domain

The repo's `CNAME` file already points this site at `skophammer.com`. If
that domain ever changes, update `CNAME` and the DNS records per
[GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## 5. SEO setup

The site includes the technical basics: meta description, canonical URL,
Open Graph + Twitter card tags, `ProfessionalService` structured data
(JSON-LD in `index.html`), plus `robots.txt` and `sitemap.xml` at the repo
root — all pointed at `https://skophammer.com/`.

**After launch:**
- Submit the site in [Google Search Console](https://search.google.com/search-console)
  (add the property, then submit `sitemap.xml`) so it actually gets crawled
  and indexed — a site rarely gets found by search without this step.
- When you add your photo, give the `<img>` tag descriptive `alt` text
  (e.g. `alt="Jordan, audio engineer at Skōphammer Audio Engineering"`) —
  alt text is both an SEO and accessibility signal.
- Real content helps more than any meta tag: your growing SoundCloud catalog,
  and eventually a couple of blog-style posts (mixing tips, case studies),
  will do more for ranking over time than anything technical here.
- One thing worth considering later: the current `<h1>` is the slogan
  ("Analog soul, remote workflow.") rather than a keyword-heavy phrase like
  "Remote Mixing & Mastering." Slogans are great for brand feel, but a
  keyword-first H1 tends to perform better in search. Not changed here
  since it's a brand/voice call, not a technical one — happy to update it
  if you want.
