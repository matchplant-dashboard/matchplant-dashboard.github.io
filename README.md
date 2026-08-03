# matchplant-dashboard-web.github.io

Static landing page for the [MatchPlant Dashboard](https://github.com/WorasitSangjan/MatchPlant-Dashboard).

This page does **not** run the dashboard itself &mdash; the dashboard is a
Flask app that must run locally on each user's own computer (it launches
native GUI windows and local subprocesses, so it can't be a shared hosted
service). This page's only job is to smooth over "first contact":

- On load, it tries `fetch("http://127.0.0.1:5050/")`. If a dashboard is
  already running on the visitor's computer, it redirects straight into it.
- If nothing answers, it shows download/setup instructions pointing at the
  `MatchPlant-Dashboard` repo.

## Remaining setup

This directory isn't pushed anywhere yet. To go live:

1. Create the GitHub organization `matchplant-dashboard-web` at
   https://github.com/account/organizations/new
2. Inside it, create an empty repo named exactly
   `matchplant-dashboard-web.github.io` (no README/license, so it starts empty)
3. From this folder:
   ```bash
   git remote add origin https://github.com/matchplant-dashboard-web/matchplant-dashboard-web.github.io.git
   git push -u origin main
   ```
4. In that repo's Settings &rarr; Pages, confirm it's serving from the
   `main` branch, `/ (root)`. It'll be live at
   `https://matchplant-dashboard-web.github.io`.

## TODO before going live

- [ ] Confirm/update the `MatchPlant-Dashboard` GitHub URL in
  [index.html](index.html) &mdash; currently assumes
  `github.com/WorasitSangjan/MatchPlant-Dashboard`, which doesn't exist
  yet either (that repo hasn't been pushed to GitHub).
