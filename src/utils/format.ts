
export function setComma(num: number | string) {
    if (num === null || num === undefined) return ""
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const unComma = (value: string): number => {
    return Number(value.replace(/,/g, ''));
};


export function inputSetComma(e: React.FormEvent<HTMLInputElement>) {
    // 숫자만 추출
    let numericValue = e.currentTarget.value.replace(/[^0-9]/g, '');
    numericValue = numericValue.replace(/^0+/, '');
    // 콤마 추가
    const formatted = setComma(numericValue);
    e.currentTarget.value = formatted;
};


export function formatKoreaDate(dateString: string): string {
    if (!dateString) return "";

    // ISO 8601 형식 파싱 (YYYY-MM-DDTHH:mm:ss)
    const date = new Date(dateString);

    // 유효한 날짜인지 확인
    if (isNaN(date.getTime())) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}년 ${month}월 ${day}일`;
}
export function formatDateTime(dateString: string): string {
    if (!dateString) return "";

    const date = new Date(dateString);

    // 유효한 날짜인지 확인
    if (isNaN(date.getTime())) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
}

export function formatDate(dateString: string): string {
    if (!dateString) return "";

    const date = new Date(dateString);

    // 유효한 날짜인지 확인
    if (isNaN(date.getTime())) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export const formatTodayCompareDateTime = (sendDate: string) => {
    const now = new Date();
    const send = new Date(sendDate);
    const diffMs = now.getTime() - send.getTime();
    const diffMin = Math.floor(diffMs / (1000 * 60));
    const diffHour = Math.floor(diffMin / 60);
    const remainMin = diffMin % 60;

    const isToday = now.toDateString() === send.toDateString();

    if (!isToday) {
        return formatDateTime(sendDate)
    }

    if (diffMin < 1) return '방금 전';
    if (diffHour === 0) return `${diffMin}분 전`;
    if (remainMin === 0) return `${diffHour}시간 전`;
    return `${diffHour}시간 ${remainMin}분 전`;
};

export const splitDateTime = (isoString: string) => {
    if (!isoString) return { date: '', time: '' };

    const dateObj = new Date(isoString);

    const date = dateObj.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\. /g, '.').replace(/\.$/, ''); // 2025.12.28

    const time = dateObj.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }); // 10:15

    return { date, time };
};

export const wonAndPercentFormat = (unit : string) => {
    return unit === "WON" ? "원" : "%";
}



