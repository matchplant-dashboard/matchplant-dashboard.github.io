# matchplant-dashboard.github.io

![License](https://img.shields.io/badge/License-MIT-blue)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen)
![Platform](https://img.shields.io/badge/Platform-GitHub%20Pages-orange)
![Research](https://img.shields.io/badge/Research-USDA--ARS-navy)

Static landing page for the MatchPlant Dashboard.
Live at **[matchplant-dashboard.github.io](https://matchplant-dashboard.github.io)**.

## What this is

The dashboard itself lives in the main
[MatchPlant](https://github.com/JacobWashburn-USDA/MatchPlant) repository, as
the `dashboard/` folder, not here. This page is just a front door: a single
link to share that gets a visitor to their own running dashboard, however far
along they already are.

## Why it can't run the dashboard directly

The dashboard is a Flask app that must run locally on each user's own
computer. It launches native GUI windows and local subprocesses, so it
cannot be a shared hosted service, there is no version of "the dashboard" that
runs once for everyone. Every visitor needs their own local copy running on
their own machine.

## What this page actually does

1. **On load, it checks for a dashboard already running on the visitor's
   computer** (`fetch("http://127.0.0.1:5050/")`). If a dashboard is
   running there, it redirects straight into it.
2. **If no dashboard is running**, the page guides the user to download the
   `MatchPlant` repo instead, which includes both the pipeline and the
   dashboard together in one step, then walks through the one-time setup.
