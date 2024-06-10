# Get a random integer number within a range, between two numbers min and max

One **straight** *forward* ***function*** ~~that~~ <mark>returns</mark> <sup>a</sup> <sub>random</sub> `number` between **min** and **max** numbers 😍

## Install
```shell
npm i @ssts/int
```
## Import
```js
import seniorINT from "@ssts/int";
```
## Use
```ts
const num: number = seniorINT(0, 100);
```

## Arguments
> Returns a number

| Order |  Parameter  |   Type   | Default  |
| :---: | :---------: | :------: | :------- |
|   1   |     min     |  number  | required |
|   2   |     max     |  number  | required |

## Examples

```ts
import seniorINT from "@ssts/int";

console.log(seniorINT(0, 10));       // 8
console.log(seniorINT(0, 100));      // 55
console.log(seniorINT(-100, 100));   // 74
console.log(seniorINT(-100, 100));   // -61
console.log(seniorINT(15, 222));     // 48
```

___
---
---
---
***
>   Made With Chocolate By Senior Sedo 😎
>>  Be Chocolateful 💙😍
>>
>>  **ssts** stands for senior-sedo-typescript 💙
>>
>>  So instead of ~~@senior-sedo-typescript/rand-int~~
>>> `@ssts/int` for simplicity sake 😍
***
---
---
---
___