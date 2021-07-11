import * as admin from "firebase-admin";

import { FirestoreCollection } from "../../shared/api";
import { database } from "../../shared/utils";

export const createUserRecord = async (_user: admin.auth.UserRecord) => {
  const id = _user.uid;
  const email = _user.email;

  const newUserData = {
    id,
    email,
  };

  try {
    console.log(`STARTED: Creating record for user ${id}`);

    await database
      .collection(FirestoreCollection.users)
      .doc(id)
      .set(newUserData);

    console.log(`DONE: Creating record for user ${id}`);
  } catch (err) {
    console.log(`ERROR: Creating record for user ${id}`);
    console.log(err);
  }
};
