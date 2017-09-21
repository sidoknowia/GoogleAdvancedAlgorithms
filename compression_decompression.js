/* In this exercise, you're going to decompress a compressed string.

Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:

The input

3[abc]4[ab]c

Would be output as

abcabcabcababababc

Other rules

Number can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa

One repetition can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab

Characters allowed as input include digits, small English letters and brackets [ ].

Digits are only to represent amount of repetitions.

Letters are just letters.

Brackets are only part of syntax of writing repeated substring.

Input is always valid, so no need to check its validity. */

var op_object = {
	'brackets' : [],
	'numbers' : [],
	'str_array' : []
};

var compressed = "";

var decompresses = function(c = ""){
	console.log(c);
	compressed = c;
	// A bit more validation is needed.
	
	if(compressed){ 
		op_object.str_array = compressed.split("");
		console.log(op_object.str_array)
		var op_string = "";

		
		find_numbers();	
		
		
		console.log(op_object)
		
		break_down_string();

		console.log("Final Output");
		console.log(op_object.str_array.toString());
		
		return op_object.str_array.toString();
	}
}

var find_brackets = function(){
	var temp_arr = [];

	for (var i = 0; i <= op_object.str_array.length; i++) {
		if (op_object.str_array[i] == '[' || op_object.str_array[i] == ']') {
			temp_arr.push(i)
		}
	}

	op_object.brackets = temp_arr;
}

var find_numbers = function  () {
	var temp_arr = [];

	for (var i = 0; i <= op_object.str_array.length; i++) {
		if (parseInt(op_object.str_array[i])) {
			temp_arr.push(i)
		}
	}

	op_object.numbers = temp_arr;
}

var break_down_string = function(){

	while(op_object.numbers.length>0){
		find_brackets();

		var mp = ( op_object.brackets.length) / 2;
		var ul = op_object.brackets[mp];
		var ll = op_object.brackets[mp-1];
		var num = op_object.numbers[mp-1]
		var n = op_object.str_array[num];
		var str = "";

		console.log("mp is : ", mp);
		console.log("ul is : ", ul);
		console.log("ll is : ", ll);
		console.log("num is : ", num);
		console.log("n is : ", n);


		while(n>0){
			for(var i = ll+1; i<ul; i++){
				str += op_object.str_array[i];
			}
			n--;
		}

		console.log("str is : ", str);
		op_object.str_array[num] = str;
		op_object.str_array.splice(ll,ul-ll+1);
		op_object.brackets.splice(mp-1,2);
		op_object.numbers.splice(mp-1,1);


		console.log(op_object);
	}
	
}

decompresses("3[a2[b]c]"); // abbcabbcabbc

/* 
{
	brackets : [ 1,4,6,8 ]
	numbers: [0,3]
} 
*/
