# Sail with Purpose · Site Mission 2027

A multiplayer group game for activating Site Mission 2027. About 350 players in small groups, one device per group, finished in under 60 minutes.

The whole app is a single file, `index.html`, with four views selected by the URL hash:

| Page | Address | Who |
|---|---|---|
| Player game | `#play` (default) | Groups |
| Live dashboard | `#dashboard` | Big screen |
| Facilitator controls | `#facilitator` | Admin login |
| Content editor | `#developer` | Admin login |

## Where it runs

The live version is hosted as a claude.ai page that uses its built-in shared database
(groups, progress, settings and content). Opened anywhere else, `index.html` runs in
**rehearsal mode**: everything is stored in that browser only, which is useful for testing.

## Content

Categories, Site Missions, pre-reads, questions and answers are not in this code. They live in
the database and are edited in the Content editor. Answer keys are stored separately from the
questions that players load, and only page Editors can read them.

## Admin login

The admin password is not stored in the code; only a PBKDF2 hash is. Saving changes
also requires Editor access to the claude.ai page.
