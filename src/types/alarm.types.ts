export interface AlarmHistoryType {
    id : number;
    alarmMstSeq: number;
    channelType: string;
    contents: string;
    status: string;
    title: string;
    category: string;
    sendDate: string;
    moveUrl: string;
    regDate: string;
    memberCode: string;
    memberName: string;
    memberId: string;
    email: string;
    readYn: boolean;
    memberMarketingTermsAgree: boolean;
}


export interface MemberAlarmSettingType {
    marketingConsent: boolean;
    nightSendAllowed: boolean;
}