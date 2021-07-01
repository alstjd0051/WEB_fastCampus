"use strict";
/**
 * Template String
 * - 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
 * - 이 문자열은 bactick( =backquote) 기호에 둘러쌓여 있습니다.
 * - 포함된 표현식은 `${expr}` 와 같은 형태로 사용합니다.
 */
// let myName: string = 'miiin_sseong';
// myName = "Anna";
// let fullName: string = 'miiin_sseong';
// let age: number = 38;
// let sentence: string = `Hello, my nam is ${ fullName}
// I'll be ${age +1} years old next month.`;
// template string 을 사용하지 않을 경우
// let sentence: string = "hello, my name is" + fullName + ".\n\n" + "I'll be" + (age+1) + "years old next month";
var fullName = 'miiin_sseong';
var age = 26;
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
