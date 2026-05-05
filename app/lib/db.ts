import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI");
}

// 👇 Type define kiya (no any)
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// 👇 global typing extend kiya
declare global {
  var mongooseCache: MongooseCache | undefined;
}

// 👇 const use kiya
const cached = global.mongooseCache || {
  conn: null,
  promise: null,
};

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;

  global.mongooseCache = cached;

  return cached.conn;
}