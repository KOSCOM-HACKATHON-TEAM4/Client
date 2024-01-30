/**
 * @param {number} sDay - 시작일
 * @param {number} tDay - 지정 날짜
 * @param {number} start - CMA 계좌에 들어간 초기자본
 * @param {number} rate - 이자율(예를 들어 2퍼)
 * @param {number} added - 월급에서 파생된 추가 납입금
 * @returns {number} - CMA 총액 예상 금액
 */
function cal(sDay, tDay, start, rate, added) {
    const dailyRate = rate / 36500;
    let result = start;

    for (let i = 1; i < tDay - sDay; i++) {
        result += result * dailyRate;
        if (i % 30 === 0) {
            result += added;
        }
        console.log(`${i}일 후 CMA 총액 예상 금액은 ${result.toFixed(3)} 입니다.`);
    }

    return result;
}

cal(1, 400, 1000000, 2, 200000);