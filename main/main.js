module.exports = function main(str) {
    console.log("Debug Info");
	var line = [['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.'], ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|'], ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|']];
	var len = str.length;
	var ans = '';
	for (var i = 0; i < 3; i++){
		for (var j = 0; j < len; j++){
			ans += line[i][str[j]];
			if(j != len - 1){
				ans += ' ';
			}
			if(j === len - 1){
				ans += '\n';
			}
		}
	}
    return ans;
};