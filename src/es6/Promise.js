// Promise.js
//
// 자바스크립트에서 비동기 함수의 동기 처리를 하기 위해서 사용하는 객체
// 자바스크립트는 기본적으로 1 쓰레드 비동기 처리 방식을 사용하고 있음
// 자바스크립트에서 순차적으로 실행을 하고 싶을 경우 콜백 함수를 이용하여야 함
// 순차적으로 실행할 것이 많아지게 되면 콜백지옥이라고 불리는 형태가 만들어지게 됨
// 프로미스는 이러한 콜백 지옥을 해결하기 위해서 사용하는 객체임
//
// promise 에는 pending, fulfilled, rejected 3가지 상태가 존재함
//
// < 상태정보는 실제로 쓰는것은 아니고 상태정보일 뿐임 >
// pending : 대기 상태, 비동기 함수가 실행되고, 아직 처리가 완료되지 않은 상태
// fulfilled : 완료 상태, 비동기 함수가 실행된 후 정상적으로 처리가 완료된 상태
// rejected : 거부 상태, 비동기 함수가 실행된 후 오류가 발생한 상태
//
// promise 에는 실행 시 콜백함수가 실행되고, 해당 콜백함수의 매개변수로 resolve(), reject() 이라는 함수를 제공함
// resolve(매개변수) : 프로미스 실행 후 fulfilled 상태일 경우 실행하는 함수로 나중에 then() 함수를 제공함
// reject(매개변수) : 프로미스 실행 후 rejected 상태일 경우 실행하는 함수로 나중에 catch() 하수를 제공함
//
// 프로미스에는 완료 및 오류처리를 위해서 then(), catch() 함수를 제공하고 있음
// then(매개변수) : 비동기 함수 실행이 완료된 후 실행되는 함수
// catch(매개변수) : 비동기 함수 실행이 거부된 후 실행되는 함수

// 사용법
// 선언 :
// function 프로미스를 사용할 함수명(매개변수) {
//    return new Promise(function(resolve, reject) {
//        비동기 통신 소스...
//        비동기 통신 결과에 따라 resolve(), reject();
//    });
// }
//
// 실행 :
// 프로미스를 사용한 함수명()
// .then(function(매개변수)) {
//    성공 시 실행할 내용
// }
// .catch(function(매개변수)) {
//    실패 시 실행할 내용


import React from "react";
import $ from 'jquery';

// 프로미스 객체를 사용할 함수
function getData() {
  // 콜백함수 resolve, reject
  return new Promise(function (resolve, reject) {
    const data = 100;
    // resolve 를 실행하게되면 .then ~ 부분이 실행이 되고, reject 를 실행하게 되면 .catch ~ 부분이 실행이 됨
    resolve(data);
    // reject(data);
  });
}

getData()
  .then(function (data) {
    console.log(`프로미스 사용 반환값 : ${data}`);
  })
  .catch(function (err) {
    console.log(`프로미스 사용 오류 시 출력 : ${err}`)
  });

const getData1 = function () {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: 'http://localhost:8080/async/data1',
      type: 'post',
      success: function (data) {
        console.log('통신 성공');
        resolve(data);
      },
      error: function () {
        reject('오류 발생!');
      }
    });
  });
};



export {getData, getData1};