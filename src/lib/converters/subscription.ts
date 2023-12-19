import { Subscription } from "@invertase/firestore-stripe-payments/lib/subscription";
import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
} from "firebase/firestore";
import { z } from "zod";
import { db } from "../firebase";

const subscriptionConverter: FirestoreDataConverter<Subscription> = {
  toFirestore: function (subscription: Subscription): DocumentData {
    return {
      ...subscription,
    };
  },
  fromFirestore: function (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Subscription {
    const data = snapshot.data(options);

    const sub = z.custom<Subscription>().parse(data);

    return {
      ...sub,
      id: snapshot.id,
    };
  },
};

export function subscriptionRef(userId: string) {
  return collection(db, "customers", userId, "subscriptions").withConverter(
    subscriptionConverter
  );
}
