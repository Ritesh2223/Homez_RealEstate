import bcrypt from "bcrypt";
import { prisma } from "./config/prismaConfig.js";

const updatePasswords = async () => {
  const users = await prisma.user.findMany();

  for (let user of users) {
    if (user.password && !user.password.startsWith("$2b$")) {
      // Check if the password is not hashed
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      });
      console.log(`Updated password for user: ${user.email}`);
    }
  }
};

updatePasswords()
  .then(() => {
    console.log("Password update completed");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error updating passwords: ", err);
    process.exit(1);
  });
