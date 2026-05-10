export interface TermsBaseType {
    id: number;
    termsCode: string;
}

export interface TermsTypes extends TermsBaseType {
    termsName: string;
    termsGroupCode: string;
    contents: string;
    essential: boolean;
}

export interface TermsAgreeTypes extends TermsBaseType {
    title: string;
    contents: string;
    startDate: string;
    agreeDate: string;
    termsYn: boolean;
}