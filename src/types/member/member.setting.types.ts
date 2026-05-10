export interface MemberSettingTypes {
    id: number;
    minAgeEnabled: boolean;
    minAge: number;
    allowDuplicateLogin : boolean;
    accessTimeLimitEnabled: boolean;
    accessTimeLimitMin: number;
    allowPhotoCapture: boolean;
    passwordChangeNoticeMode: string;
    passwordChangeNoticeMonth: number;
    passwordChangeRenotifyMode: string;
    passwordChangeRenotifyDay: number;
}