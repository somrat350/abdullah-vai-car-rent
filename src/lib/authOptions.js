import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const demoUser = {
          id: "1",
          name: "Demo User",
          email: "demo@gmail.com",
          password: "123456",
          role: "user",
          photoUrl: "https://i.ibb.co.com/7tMMt8Cr/user-1.png",
        };

        if (
          credentials.email === demoUser.email &&
          credentials.password === demoUser.password
        ) {
          return {
            _id: demoUser.id,
            name: demoUser.name,
            email: demoUser.email,
            role: demoUser.role,
          };
        }

        throw new Error("Invalid email or password");
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.photoUrl = user.photoUrl;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
