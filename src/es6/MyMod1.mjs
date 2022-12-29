// MyMod1.mjs

// export 로 설정 방법은 두 가지.
// export 로 설정하는 방법 1
// 외부로 출력하고자 하는 변수 및 함수, 클래스에 export 를 접두사로 붙임

export const name = '아이유';
export const gender = '여성';
export const job = '가수';

export const getInfo = () => console.log(`이름 : ${name}, 성별 : ${gender}, 직업 : ${job}`);
