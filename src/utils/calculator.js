
// productType - 타입, term - 기간, initialCapital - 초기 자본, interestRate - 수익률, monthlyAdded - 월 납입액
// dateDiff - 현재날짜 빼기 시작일
export default function calculate(prop, dateDiff) {
    if (prop.productType === "" || prop.term === 0 || prop.initialCapital === 0 || prop.interestRate === 0 ) {
        return prop.initialCapital
    }

    if (prop.productType === "예금"){
        const dailyRate = prop.interestRate / 365 / 100;
        let result = prop.initialCapital;
        for (let i = 1; i < Math.round(dateDiff) + 1; i++) {
            if (i % 30 === 0) {
                result += prop.monthlyAdded;
            }
            result += (result * dailyRate);
        }
         return parseInt(result.toFixed(3))

    }
    if (prop.productType === "적금"){
        let result = prop.initialCapital;
        let initialAmount = prop.initialCapital
        let interestRate = prop.interestRate;
        let monthlyDeposit = prop.monthlyAdded
        const startRate = interestRate;
        const monthRate = interestRate / 12;
        for (let i = 1; i <= Math.round(dateDiff); i++) {
            if ((i) % 365 === 0) {
                interestRate = startRate;
            }
            if ((i) % 30 === 0) {
                initialAmount += monthlyDeposit;
                result += monthlyDeposit;
                interestRate -= monthRate;
            }
            result += (monthlyDeposit * interestRate / 3000);
        }
        return parseInt(result)
    }
    if (prop.productType === "CMA"){

        const dailyRate = prop.interestRate / 36500;
        let result = prop.initialCapital;
        for (let i = 1; i <= Math.round(dateDiff); i++) {
            result += result * dailyRate;
            if (i % 30 === 0) {
                result += prop.monthlyAdded;
            }
        }
        return parseInt(result)
    }

    if (prop.productType === "채권"){
        const dailyRate = prop.interestRate / 36500;
        let result = prop.initialCapital;

        for (let i = 1; i <= Math.round(dateDiff); i++) {
            result += prop.initialCapital * dailyRate;
        }

        return parseInt(result);
    }
    if (prop.productType === "배당주"){

    }

    return prop.initialCapital

};

export function getDateDiff(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    const diffDate = date1.getTime() - date2.getTime();

    return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
}