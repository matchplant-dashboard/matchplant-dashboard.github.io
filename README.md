# matchplant-dashboard.github.io

![License](https://img.shields.io/badge/License-MIT-blue)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen)
![Platform](https://img.shields.io/badge/Platform-GitHub%20Pages-orange)
![Research](https://img.shields.io/badge/Research-USDA--ARS-navy)

Static landing page for the [MatchPlant Dashboard](https://github.com/WorasitSangjan/MatchPlant-Dashboard).
Live at **[matchplant-dashboard.github.io](https://matchplant-dashboard.github.io)**.

This page does **not** run the dashboard itself. The dashboard is a
Flask app that must run locally on each user's own computer (it launches
native GUI windows and local subprocesses, so it can't be a shared hosted
service). This page's only job is to smooth over "first contact":

- On load, it tries `fetch("http://127.0.0.1:5050/")`. If a dashboard is
  already running on the visitor's computer, it redirects straight into it.
- If nothing answers, it shows download/setup instructions pointing at the
  `MatchPlant-Dashboard` repo.
