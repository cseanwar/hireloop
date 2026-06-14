// 2026-05-28T10:19:50.855Z ERROR [Better Auth]: INTERNAL_SERVER_ERROR Error: Invalid Base64 character: .
    // at ignore-listed frames

// To solve the above problem, you can clear the cookies in your browser. The error is likely caused by an invalid cookie value that is being sent with the request.
// Follow the following steps to clear the cookies:
// Inspect -> Application (Right side of console tab) -> cookie -> expand -> Localhost -> clear cookie values one by one and refresh the page


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { admin } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
    user: {
        additionalFields: {
            role: {
                default: "seeker"
            },
            plan: {
                default: 'seeker_free'
            }
        }
    },
    plugins: [
        admin()
    ]
});