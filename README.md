# Sail with Purpose · Site Mission 2027

A multiplayer group game for activating Site Mission 2027. About 350 players in small groups, one device per group, finished in under 60 minutes.

The app is a single file, `index.html` (plus `firebase-config.js` and `firestore.rules` for self-hosting), with four views selected by the URL hash:

| Page | Address | Who |
|---|---|---|
| Player game | `#play` (default) | Groups |
| Live dashboard | `#dashboard` | Big screen |
| Facilitator controls | `#facilitator` | Admin login |
| Content editor | `#developer` | Admin login |

## Where it runs

The app picks its database when it starts:

1. **Firebase** (public hosting, e.g. Vercel with your own domain): used when `firebase-config.js` has a config.
   Players need no login. Admins log in with an email and password created in Firebase Authentication.
2. **claude.ai page**: when opened as a claude.ai page, it uses that page's built-in shared database.
3. **Rehearsal mode**: anywhere else, everything is stored in that browser only, which is useful for testing.

If Firebase is configured but cannot be reached, the app shows a "Cannot reach the event database" screen
instead of silently falling back to rehearsal mode.

### Firebase setup (one time)

1. Go to https://console.firebase.google.com and create a project.
2. **Build > Firestore Database > Create database** (production mode, a region close to your players, e.g. `asia-southeast2` Jakarta).
3. **Firestore > Rules**: paste `firestore.rules`, put your admin email(s) in `isAdmin()`, click **Publish**.
4. **Build > Authentication > Get started > Sign-in method**: enable **Email/Password**.
   Then **Users > Add user** for each admin (same emails as in the rules).
5. **Project settings > General > Your apps > Web (</>)**: register an app and copy its config into `firebase-config.js`.
6. **Authentication > Settings > Authorized domains**: add your Vercel domain and your own domain.
7. Commit and push. Vercel redeploys automatically.
8. Open `#developer`, log in, and publish the content and settings again (data in rehearsal mode or on the
   claude.ai page is not copied over).

## Content

Categories, Site Missions, pre-reads, questions and answers are not in this code. They live in
the database and are edited in the Content editor. Answer keys are stored separately from the
questions that players load, and only page Editors can read them.

## Admin login

With Firebase, admins log in with their Firebase Authentication email and password, and `firestore.rules`
decides who is an admin. On the claude.ai page and in rehearsal mode, the admin password is checked against
a PBKDF2 hash (the password itself is not in the code); on the claude.ai page, saving also requires Editor access.
