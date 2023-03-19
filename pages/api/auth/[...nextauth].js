import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { loginDataValidation } from "../../../lib/validations/serverside-validations";
import { auth } from "../../../lib/authentication/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        // Get Email and Password from credentials
        const { email, password } = credentials;

        // Validate Inputs First
        const informationStatus = loginDataValidation(email, password);
        if (!informationStatus) throw new Error("Invalid Inputs");

        // Check for user

        const user = await signInWithEmailAndPassword(auth, email, password);

        if (user.error) {
          throw new Error("No user found!");
        }

        return { email: user.user.email };
      },
    }),
  ],
});
