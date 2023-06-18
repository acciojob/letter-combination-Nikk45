
function letterCombinations(input_digit) {
  //Complete the function
	const letters = {
		2:'abc',
		3:'def',
		4:'ghi',
		5:'jkl',
		6:'mno',
		7:'pqrs',
		8:'tuv',
		9:'wxyz'
	}

let res = [];
function solve(index, resStr){
	if(input_digit.length<=index){
		res.push(resStr);
		return;
	}
	
	let num = input_digit[index];
	let str = letters[num];
	for(let i=0;i<str.length;i++){
		solve(index+1,resStr+str[i]);
	}
}
	solve(0,"");
	return res;
}


// letterCombinations("23", 0, "");
// alert(res);
module.exports = letterCombinations;
