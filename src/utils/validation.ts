export const validatePassword = (password: string): boolean => {
    if (password.length < 8 || password.length > 20) {
        return false;
    }
    let count = 0;
    if (/[a-z]/.test(password)) count++; // 소문자
    if (/[A-Z]/.test(password)) count++; // 대문자
    if (/[0-9]/.test(password)) count++; // 숫자
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) count++; // 특수문자

    return count >= 2;
};

export const isNullOrEmpty = (value: any):boolean => {
    switch (value) {
        case "":
        case null:
        case false:
        case undefined:
        case typeof this === 'undefined':
            return true;
        default:
            return false;
    }
};