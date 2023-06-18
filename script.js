const letters = {
	2:'abc', 3:'def', 4:'ghi', 5:'jkl',
	6:'mno', 7:'pqrs', 8:'tuv', 9:'wxyz'
}

let res = [];

function letterCombinations(input_digit, index, resStr) {
  //Complete the function

	if(input_digit.length<=index){
		res.push(resStr);
		return;
	}
	
	let num = input_digit[index];
	let str = letters[num];
	for(let i=0;i<str.length;i++){
		letterCombinations(input_digit,index+1,resStr+str[i]);
	}
	
}

letterCombinations("23", 0, "");
alert(res);
module.exports = letterCombinations;
