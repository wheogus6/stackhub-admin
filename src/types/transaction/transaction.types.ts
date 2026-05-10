export interface TransactionBaseType {
    id: number;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    status: string;
    regDate: string;
    transactionCode: string;
}

export interface ChargeRequestTypes {
    chargeAmount: number; // 충전 요청 금액
    chargeFee: number; // 충전 수수료,
    paymentAmount: number; // pg 결제 금액 (응답 amt)
    paymentTransactionId: string; //결제거래ID (응답 tid)
    paymentCompany: string; //결제회사 (응답 van)
}

export interface ChargeRequestLogTypes {
    chargeAmount: number; // 충전 요청 금액
    chargeFee: number; // 충전 수수료,
    tid: string; //결제거래ID (응답 tid)
    payToken: string; //결제회사 (응답 van)
    paymentData: Record<string, unknown> | null;
}


export interface ChargeCancelRequestTypes {
    transactionCode: string;
    paymentTransactionId: string; //결제거래ID (응답 tid)
}

export interface ChargeTypes extends TransactionBaseType {
    chargeType: string;
    chargeCode: string;
    paymentMethod: string;
    paymentTransactionId: string;
    contents: string;
    cancelPossible: boolean;
    chargeFee: number;
    parentChargeCode: string;
    parentChargeDate: string;
    parentPaymentAmount: number;
    parentPaymentMethod: string;
};


export interface PayUseTypes extends TransactionBaseType {
    useCode: string;
    serviceType: string;
    isCancelPossible: boolean;
}

export interface PayUseDetailTypes extends TransactionBaseType {
    useCode: string;
    serviceType: string;
    paymentMethod: string;
    useType: string;
    adjust: boolean;
    paymentAmount: number;
    paymentFee: number;
    cancellationFee: number;

    //취소정보
    cancelSubject: string;
    cancelDate: string;

    //코디정보
    coordinatorName: string;
    coordinatorCode: string;

    //공고정보
    jobPostingCode: string;
    elderName: string;
    careServiceType: string;
    workType: string;
    jobPostingStatus: string;
    careStartDate: string;
    careEndDate: string;
    dailyPay: number;
    workStartTime: string;
    workEndTime: string;

    //원거래
    originUseCode: string;
    originPaymentMethod: string;
    originPaymentAmount: number;
    originPaymentDate: string;
}


export interface RefundTypes extends TransactionBaseType {
    refundCode: string;
    refundRequestCode: string;
    refundAmount: number;
    refundableAmount: number;
    refundFee: number;
    refundMethod: string;
    statusDescription: string;
    bankName: string;
    accountHolder: string;
    bankAccount: string;
    bankCode: string;
    refundDate: string;
}


export interface ExpirationTypes extends TransactionBaseType {
    transactionCode: string;
    status: string;
    expireDate: string;
    originalAmount: number;
}

