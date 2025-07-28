import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import prisma from "./prisma";

const databaseConfig = prismaAdapter(prisma, {
  provider: "postgresql",
});

const emailAndPasswordConfig = {
  enabled: true,
  autoSignIn: true,
};

const pluginsConfig = [nextCookies()];

export const auth = betterAuth({
  database: databaseConfig,
  emailAndPassword: emailAndPasswordConfig,
  plugins: pluginsConfig,
});
