export type PrepaidSettingTypes = {
    id: number;
    anonMinChargeOnce: number; // 무기명 1회 최소 충전 금액
    anonMaxChargeOnce: number; // 무기명 1회 최대 충전 금액
    anonMaxChargeDaily: number; // 무기명 1일 최대 충전 금액
    anonMaxBalance: number; // 무기명 1인 최대 보유 금액
    namedMinChargeOnce: number; // 기명 1회 최소 충전 금액
    namedMaxChargeOnce: number; // 기명 1회 최대 충전 금액
    namedMaxChargeDaily: number; // 기명 1일 최대 충전 금액
    namedMaxBalance: number; // 기명 1인 최대 보유 금액
    chargeFeeUnderValue: number; // 충전 수수료 금액/비율 (기준금액 이하)
    chargeFeeUnderUnit: 'WON' | 'PERCENT'; // 충전 수수료 단위
    chargeFeeOverValue: number; // 충전 수수료 금액/비율 (기준금액 초과)
    chargeFeeOverUnit: 'WON' | 'PERCENT'; // 충전 수수료 단위
    chargeCancelLimit: number; // 충전 거래 완료 후 취소 가능 일수 (D+N)
    expireYears: number; // 충전일 기준 유효기간 (년 단위)
    paymentFeeRate: number; // 결제 수수료율 (%)
    minUseOnce: number; // 1회 최소 결제 금액
    maxUseOnce: number; // 1회 최대 결제 금액
    maxUseDaily: number; // 1일 최대 결제 금액
    refundMinUsedRate: number; // 최소 사용률
    refundMinAmountValue: number; // 최소 잔액 환불 가능 금액
    refundMinAmountUnit: 'WON' | 'PERCENT'; // 최소 잔액 환불 가능 단위
    refundFeeUnderValue: number; // 잔액 환불 수수료 금액/비율 (기준금액 이하)
    refundFeeUnderUnit: 'WON' | 'PERCENT'; // 잔액 환불 수수료 단위
    refundFeeOverValue: number; // 잔액 환불 수수료 금액/비율 (기준금액 초과)
    refundFeeOverUnit: 'WON' | 'PERCENT'; // 잔액 환불 수수료 단위
    expireRefundRate: number; // 유효기간 만료 시 환불률 (예: 90 또는 100)
}