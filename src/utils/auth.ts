export const auth: Auth = {
    isLoggedIn: false,
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

export type Auth = {
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
    isLoggedIn: boolean;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
};
