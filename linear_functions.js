//this function receives a string line as a parameter,
//splittes it into two parts, and returns that two parts
function get_nums(line) {
    nums = line.split(' ')
    return (str(nums[0]), str(nums[1]))
}

//this function checks whether the string is a real number or not
function is_real(str) {
        let countDots = 0
        if(str[0] == '.' || str[str.length - 1] == '.') {
                return false;
        }
        for(i = 0; i < str.length; i++) {
                if(str[i] == '-' && i == 0) {
                        continue
                }
                if(str[i] < '0' || str[i] > '9') {
                        if(str[i] == '.') {
                                countDots++
                        }
                        else{
                                return false
                        }
                }
        }
        return countDots <= 1
}

//this function solves the ax+b=0 linear equation, where str1=a, str2=b
//and returns the answer as a string
function linear(str1, str2) {
	if (!is_real(str1) || !is_real(str2)) {
        	return "mistake";
    	}
    	let a = parseFloat(str1)
    	let b = parseFloat(str2)
	if (a == 0 && b == 0) {
        	return "R";
    	} 
    	if(b != 0 && a == 0) {
        	return "no solution";
    	}
    	if (b == 0) {
        	return "0";
    	}
    	let d = (- b / a).toFixed(3)
    	d=parseFloat(d) //to remove all the traling zeroes
    	return d.toString();    
}

module.exports = {get_nums, is_real, linear}
