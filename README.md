This is a coding challenge that involves OAuth Login.

Tools used: Firebase and Nextjs

Comments: Thanks for the challenge. I accept it as a mark of learning and improvement in new areas.
In summary, the process goes thus:

1. Project Setup
Initialize Next.js: Started by setting up a Next.js project.
Install Dependencies: Installed necessary packages including next-auth for authentication and @next-auth/firebase-adapter for Firebase integration.

2. Google OAuth Setup
Google Cloud Console:
Created a project in Google Cloud Console.
Set up OAuth credentials to get client_id and client_secret.
Configured authorized redirect URIs to match the callback URL of the application.
Environment Variables: Stored NEXTAUTH_URL, GOOGLE_CLIENT_ID, and GOOGLE_CLIENT_SECRET in environment variables.

3. NextAuth.js Configuration
Configure NextAuth.js: In pages/api/auth/[...nextauth].js, configured NextAuth with the Google provider and Firebase adapter.
Session Management: Configured session handling with JWT tokens for maintaining authentication state.

4. Firebase Setup
Firebase Console:
Created a Firebase project.
Set up Firestore and generated service account credentials for Firebase Admin SDK.
Initialized app and refrenced the database in the NextAuth config.
Environment Variables: Stored Firebase configuration and credentials in environment variables.

5. Troubleshooting Errors /Present Challenge
504 Server Error:
Encountered a 504 error due to server issues or misconfigurations. Investigated logs to diagnose and fix the problem. Currently, unable to fix this. Still working on it to enable users login.

6. Git Configuration
Ignoring Sensitive Files: Added sensitive configuration files like jsconfig.json, next.config.mjs, package-lock.json, package.json, postcss.config.mjs, and tailwind.config.js to .gitignore to prevent them from being pushed to GitHub.

7. Deployment: Deployed the application to Vercel and ensured that the environment variables were correctly set for the production environment.