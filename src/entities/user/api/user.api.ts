import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	collection,
	CollectionReference,
	getDocs,
	orderBy,
	query,
	QueryDocumentSnapshot,
	where,
	doc,
	updateDoc,
	getDoc,
	setDoc,
	DocumentReference,
	arrayUnion,
	arrayRemove,
	documentId,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/app/index.tsx";
import { IUser, UserWithId } from "../model/IUser.ts";

export const createUserCollection = (): CollectionReference<IUser> => {
	return collection(db, "users").withConverter<IUser>({
		toFirestore(user: IUser): IUser {
			return user;
		},
		fromFirestore(snapshot: QueryDocumentSnapshot<IUser>): IUser {
			return snapshot.data();
		},
	});
};

export const createCurrentUserReference = (
	currentUserUid: string,
): DocumentReference<IUser> => {
	return doc(db, "users", currentUserUid).withConverter<IUser>({
		toFirestore(user: IUser): IUser {
			return user;
		},
		fromFirestore(snapshot: QueryDocumentSnapshot<IUser>): IUser {
			return snapshot.data();
		},
	});
};

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fakeBaseQuery(),
	tagTypes: ["User", "CurrentUser"],
	endpoints: (build) => ({
		getAuthorizedUserData: build.query<IUser, string>({
			queryFn: async (currentUserUid) => {
				try {
					const userRef = createCurrentUserReference(currentUserUid);
					const snap = await getDoc(userRef);
					if (!snap.exists())
						return { error: { message: "User not found" } as unknown };
					return { data: snap.data() as IUser };
				} catch (error) {
					return { error };
				}
			},
			providesTags: ["CurrentUser"],
		}),
		getUsers: build.query<UserWithId[], { currentUserUid: string }>({
			queryFn: async ({ currentUserUid }) => {
				try {
					const userCollection = createUserCollection();
					const usersWithoutCurrentUser = query(
						userCollection,
						where(documentId(), "!=", currentUserUid),
						orderBy(documentId()),
					);
					const snapshot = await getDocs(usersWithoutCurrentUser);
					const users: UserWithId[] = snapshot.docs.map(
						(user): UserWithId => ({
							userId: user.id,
							...user.data(),
						}),
					);
					return { data: users };
				} catch (error) {
					return { error };
				}
			},
			providesTags: ["User"],
		}),
		getUserById: build.query<IUser, string>({
			queryFn: async (selectedUserId) => {
				try {
					const userRef = createCurrentUserReference(selectedUserId);
					const snap = await getDoc(userRef);
					if (!snap.exists())
						return { error: { message: "User not found" } as unknown };
					return { data: snap.data() as IUser };
				} catch (error) {
					return { error };
				}
			},
			providesTags: ["User"],
		}),
		createUserProfile: build.mutation<void, { uid: string }>({
			queryFn: async ({ uid }) => {
				try {
					const userRef = createCurrentUserReference(uid);
					const newUserData: IUser = {
						Hometown: "",
						firstName: "",
						lastName: "",
						friends: [],
						image: "",
					};
					await setDoc(userRef, newUserData);
					return { data: undefined };
				} catch (error) {
					return { error };
				}
			},
			invalidatesTags: ["CurrentUser", "User"],
		}),
		uploadProfileImage: build.mutation<
			void,
			{ currentUserUid: string; file: File }
		>({
			queryFn: async ({ currentUserUid, file }) => {
				try {
					console.log(
						"called uploadProfileImage",
						"image:",
						currentUserUid,
						"file:",
						file,
					);
					const storageRef = ref(
						storage,
						`users/${currentUserUid}/${file.name}`,
					);
					await uploadBytes(storageRef, file);
					const downloadURL = await getDownloadURL(storageRef);
					const currentUserRef = createCurrentUserReference(currentUserUid);
					await updateDoc(currentUserRef, { image: downloadURL });
					return { data: undefined };
				} catch (error) {
					return { error };
				}
			},
			invalidatesTags: ["CurrentUser"],
		}),
		addFriend: build.mutation<
			void,
			{ currentUserUid: string; friendUid: string }
		>({
			queryFn: async ({ currentUserUid, friendUid }) => {
				try {
					const currentUserRef = createCurrentUserReference(currentUserUid);
					await updateDoc(currentUserRef, { friends: arrayUnion(friendUid) });
					return { data: undefined };
				} catch (error) {
					return { error };
				}
			},
			invalidatesTags: ["CurrentUser"],
		}),
		deleteFriend: build.mutation<
			void,
			{ currentUserUid: string; friendUid: string }
		>({
			queryFn: async ({ currentUserUid, friendUid }) => {
				try {
					const currentUserRef = createCurrentUserReference(currentUserUid);
					await updateDoc(currentUserRef, { friends: arrayRemove(friendUid) });
					return { data: undefined };
				} catch (error) {
					return { error };
				}
			},
			invalidatesTags: ["CurrentUser"],
		}),
		updateAuthorizedUserData: build.mutation<
			void,
			{ currentUserUid: string; fieldName: keyof IUser; fieldValue: string }
		>({
			queryFn: async ({ currentUserUid, fieldName, fieldValue }) => {
				try {
					const userRef = createCurrentUserReference(currentUserUid);
					await updateDoc(userRef, { [fieldName]: fieldValue });
					return { data: undefined };
				} catch (error) {
					return { error };
				}
			},
			invalidatesTags: ["CurrentUser"],
		}),
	}),
});

export const {
	useGetAuthorizedUserDataQuery,
	useGetUsersQuery,
	useGetUserByIdQuery,
	useCreateUserProfileMutation,
	useUploadProfileImageMutation,
	useAddFriendMutation,
	useUpdateAuthorizedUserDataMutation,
	useDeleteFriendMutation,
} = userApi;
