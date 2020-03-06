interface ChangeTheme {
    type: String;
}

export const changeTheme = (): ChangeTheme => {
    return ({
        type: 'CHANGE_THEME',
    });
}

export type Action = ChangeTheme;