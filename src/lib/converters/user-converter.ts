import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  doc,
} from "firebase/firestore";
import { z } from "zod";
import { db } from "@/lib/firebase";
import { DefaultSession } from "next-auth";

type FirebaseUser = {
  emailVerified: boolean | null | undefined;
} & DefaultSession["user"];

const userConverter: FirestoreDataConverter<FirebaseUser> = {
  toFirestore: function (user: FirebaseUser): DocumentData {
    return {
      ...user,
    };
  },
  fromFirestore: function (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): FirebaseUser {
    const data = snapshot.data(options);

    const user = z.custom<FirebaseUser>().parse(data);

    return {
      ...user,
      emailVerified: data.emailVerified,
    };
  },
};

export function userRef(userId: string) {
  const userCollectionRef = collection(db, "users");
  return doc(userCollectionRef, userId).withConverter(userConverter);
}
