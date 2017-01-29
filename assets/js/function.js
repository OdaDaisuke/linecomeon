// サニタイズ
function escape(str) {
  var escapeMap = {
    '&': '&amp;',
    "'": '&#x27;',
    '`': '&#x60;',
    '"': '&quot;',
    '<': '&lt;',
    '>': '&gt;'
  };
  var escapeReg = '[';
  var reg;
  for (var p in escapeMap)
    if (escapeMap.hasOwnProperty(p)) escapeReg += p;

  escapeReg += ']';
  reg = new RegExp(escapeReg, 'g');

  str = (str === null || str === undefined) ? '' : '' + str;
  return str.replace(reg, function (match) {
    return escapeMap[match];
  });
}

//ランダム時刻生成
function getRandomTime() {
	var d = new Date(parseInt(Math.random(0,100000000)*100000000));
	return d.getHours() + ':' + ((d.getMinutes() < 10) ? '0' : '') + d.getMinutes();
}
