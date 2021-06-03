import * as corsMiddleware from "cors";
import * as admin from "firebase-admin";

admin.initializeApp();

const firestoreDb: FirebaseFirestore.Firestore = admin.firestore();

export const database = firestoreDb;

export const cors = corsMiddleware({
  origin: true,
});
