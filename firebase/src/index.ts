import * as functions from "firebase-functions";

import { createUserRecord } from "./modules/user";

// User
export const onCreateUser = functions.auth.user().onCreate(createUserRecord);
