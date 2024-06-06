import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/db/dbconfig";
import bcrypt from "bcryptjs";
import Admin from "@/models/admin";
connect();
export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "USERNAME :",
          type: "text",
        },
        password: {
          label: "PASSWORD :",
          type: "password",
        },
      },
      async authorize(credentials) {
        const username = credentials.username;
        const password = credentials.password;
        const admin = await Admin.findOne({ username });
        if (admin) {
          const isPasswordCorrect = await bcrypt.compare(
            password,
            admin.password
          );
          if (isPasswordCorrect) {
            console.log(isPasswordCorrect);
            return admin;
          } else {
            console.log("Incorrect password");
            return null;
          }
        } else {
          console.log("User not found");
          return null;
        }
      },
    }),
  ],
};
