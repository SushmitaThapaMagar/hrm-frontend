import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId:
        process.env.GITHUB_ID ??
        (() => {
          throw new Error("Missing GITHUB_ID env variable");
        })(),
      clientSecret:
        process.env.GITHUB_SECRET ??
        (() => {
          throw new Error("Missing GITHUB_SECRET env variable");
        })(),
    }),
    // ...add more providers here
  ],
});
export { handler as GET, handler as POST };
