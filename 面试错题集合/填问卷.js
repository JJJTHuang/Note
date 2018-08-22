let ok = function () {
  var hash = {};
  var a = document.evaluate('//input[(@type="radio") and not(@value="0")]//@name',
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);

  if (a.snapshotLength) {
    for (var i = 0; i < a.snapshotLength; i++) {
      if (!(a.snapshotItem(i).value in hash))
        hash[a.snapshotItem(i).value] = 0;
      hash[a.snapshotItem(i).value]++;
    }
    for (i in hash) {
      document.evaluate('//input[(@type="radio")  and not(@value="0") and @name="' + i + '"]',
        document,
        null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
        null).snapshotItem(Math.floor(Math.random() * hash[i])).click();
    }
  }

  let arr = [$('#question_q-3-DR3P i'), $('#question_q-5-XwVq i'), $('#question_q-6-23SL i'), $('#question_q-7-d7zr i'), $('#question_q-10-9wdv i'), $('#question_q-25-loqF i')]

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length - 1; j++) {
      arr[i][Math.round(j / 1.3)].click()
    }
  }

  var tw = ['o-101-EFGH', 'o-100-ABCD']
  var mo2 = ['o-101-JQIl', 'o-102-Z1Sj', 'o-103-oopJ', 'o-104-iVHf']
  var mo3 = ['o-101-fCkP', 'o-102-jzpi', 'o-103-zvVV', 'o-104-bCSS', 'o-105-Z6VY']
  var mo5 = ['o-101-ALDC', 'o-102-BAWv', 'o-103-amz5', 'o-104-8CRu', 'o-105-WHuq', 'o-106-zeR5']
  var mo6 = ['o-101-Bs9Z', 'o-102-gwJL', 'o-103-YWOo', 'o-104-k56f', 'o-105-yBuv', 'o-106-l0wp']
  var choose = document.getElementsByTagName('select');
  for (var i = 0; i < choose.length; i++) {
    choose[i].focus();
    switch (i) {
      case 2:
        choose[i].value = mo2[parseInt(i * Math.random() * 10 % 3)];
        break;
      case 3:
        choose[i].value = mo3[parseInt(i * Math.random() * 10 % 3)];
        break;
      case 5:
        choose[i].value = mo5[parseInt(i * Math.random() * 10 % 3)];
        break;
      case 6:
        choose[i].value = mo6[parseInt(i * Math.random() * 10 % 3)];
        break;
      default:
        choose[i].value = tw[i % 2];
        break;
    }
    choose[i].blur();
  }
  return true
}

ok()

let time = Math.round((Math.random() + 1) * 100) + 80

setTimeout(() => {
  $('.survey_submit').click()
}, time*1000);