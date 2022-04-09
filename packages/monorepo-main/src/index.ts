//@ts-ignore
import { isOdd } from '@monorepo/sdk';

function checkOddNumber() {
  console.log('IsOdd : ', isOdd);
  console.log('7 is odd : ', isOdd(7));
}

checkOddNumber();
