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

//URL正規表現
function isURL(s) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

  if(!pattern.test(s)) return false;
  else return true;
}
