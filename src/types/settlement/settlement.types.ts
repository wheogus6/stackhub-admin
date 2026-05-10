export interface SettlementDetailTypes {
    id: number;
    settlementCode: string;
    transactionName: string;
    useDate: string;
    settlementStatusDescription: string;
    settlementPendingDate: string;
    settlementDate: string;
    cancelDate: string;
    paymentMethod: string;
    settlementStatus: string;
    cancelSubject: string;
    elderName: string;
    serviceType: string;
    careStartDate: string;
    careEndDate: string;
    workStartTime: string;
    workEndTime: string;
    workType: string;
    jobPostingCode: string;
    jobPostingStatus: string;
    settlementAmount: number;
    paymentAmount: number;
    dailyPay: number;
    isCashReceipt: boolean;
}


export interface WithdrawalTypes  {
    requestAmt: number;
    withdrawalFee: number;
}


export interface WithdrawalSettingType {
    withdrawMinAmount: number; //출금 가능 최소 금액
    withdrawFeeUnderValue: number; // 1만원 이하 출금 수수료
    withdrawFeeUnderUnit: string; //단위
    withdrawFeeOverValue: number; //1만원 초과 출금 수수료
    withdrawFeeOverUnit: string; // 단위
}

export interface WithdrawalInfoTypes {
    id : string;
    requestAmount : number;
    withdrawalAmount: number;
    withdrawalFee: number;
    withdrawalCode: string;
    regDate: string;
    bankCode: string;
    bankName: string;
    bankAccount: string;
    accountHolder: string;
    status: string;
    balanceBefore: number;
    balanceAfter: number;
}