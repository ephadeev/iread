export interface IUser {
	Hometown: string;
	firstName: string;
	friends: string[];
	image: string;
	lastName: string;
}

export interface UserWithId extends IUser {
	userId: string;
}

export interface IAuthUser {
	uid: string;
	email: string | null;
	displayName: string | null;
	photoURL: string | null;
}

export interface ICurrentUser {
	authorizedUser: IAuthUser;
	authorizedUserData: IUser;
}
