import mongoose from "mongoose";

declare global {
  // Extend the NodeJS global interface
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: mongoose.Mongoose | null;
        promise: Promise<mongoose.Mongoose> | null;
      };
    }
  }
}

export {};
