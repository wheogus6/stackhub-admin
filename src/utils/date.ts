export const getTodayString = (): string => {
    return new Date().toISOString().split('T')[0];
};

// N개월 전/후 날짜
export const getDateByMonths = (months: number): string => {
    const date = new Date();
    date.setMonth(date.getMonth() + months);
    return date.toISOString().split('T')[0];
};

export const getInitialDateRange = (monthsAgo: number = 1) => {
    return {
        startDate: getDateByMonths(-monthsAgo),
        endDate: getTodayString()
    };
};


export const formatTimeText = (time: string) => {
    if (time === null || time === '') return "";
    const [hour, minute] = time.split(':').map(Number);
    const period = hour < 12 ? 'AM' : 'PM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    return `${period} ${String(displayHour).padStart(2, '0')}시 ${String(minute).padStart(2, '0')}분`;
};


