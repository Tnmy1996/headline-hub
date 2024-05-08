export type Auth = {
    email?: string;
    firstName?: string;
    isLoggedIn: boolean;
    lastName?: string;
    username?: string;

    login: ({
        username,
        firstName,
        lastName,
        email,
    }: {
        username: string;
        firstName: string;
        lastName: string;
        email: string;
    }) => void;
    logout: () => void;
};

export const auth: Auth = {
    email: undefined,
    firstName: undefined,
    isLoggedIn: false,
    lastName: undefined,
    username: undefined,

    login: ({ username, firstName, lastName, email }) => {
        auth.isLoggedIn = true;
        auth.username = username;
        auth.firstName = firstName;
        auth.lastName = lastName;
        auth.email = email;
    },
    logout: () => {
        auth.isLoggedIn = false;
        auth.username = undefined;
    },
};
