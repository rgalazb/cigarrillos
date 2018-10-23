function getData() {
  var inputs = [], hash
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  hashes.forEach((data, i) => {
    hash = hashes[i].split('=');
      inputs.push(hash[0]);
      inputs[hash[0]] = hash[1];
  }) 
  return inputs;
}
data = getData()
$(document).ready(function(){
  $('.tooltipped').tooltip();
});
var lostMoney1 = Math.round(((data.time1 * data.week1 * 52) / 20) * 3000) 
var lostMoney2 = Math.round(((data.time2 * data.week2 * 52) / 20) * 3000) 
var avgMoney = Math.round(((data.time1 * 42 * 52) / 20) * 3000)
$('#monto-promedio').text("$" + avgMoney)
if (lostMoney1 > lostMoney2) {
  $('#mas-dinero-nombre').text(data.name1)
  $('#mas-dinero-monto').text("$" + lostMoney1)

  $('#menos-dinero-nombre').text(data.name2)
  $('#menos-dinero-monto').text("$" + lostMoney2)
} else {
  $('#mas-dinero-nombre').text(data.name2)
  $('#mas-dinero-monto').text("$" + lostMoney2)

  $('#menos-dinero-nombre').text(data.name1)
  $('#menos-dinero-monto').text("$" + lostMoney1)
}

var lostWater1 = Math.round((data.time1 * data.week1 * 52) * 50)
var lostWater2 = Math.round((data.time2 * data.week2 * 52) * 50)
var avgWater = (data.time1 * 42 * 52) * 50
$('#promedio-lts').text(avgWater + "lts")
if (lostMoney1 > lostMoney2) {
  $('#mas-agua-nombre').text(data.name1)
  $('#mas-agua-lts').text(lostWater1 + "lts")

  $('#menos-agua-nombre').text(data.name2)
  $('#menos-agua-lts').text(lostWater2 + "lts")
} else {
  $('#mas-agua-nombre').text(data.name2)
  $('#mas-agua-lts').text(lostWater2 + "lts")

  $('#menos-agua-nombre').text(data.name1)
  $('#menos-agua-lts').text(lostWater1 + "lts")
}

var lostDays1 = data.time1 * data.week1 * 52 * 0.0104
var lostDays2 = data.time2 * data.week2 * 52 * 0.0104
var avgDays = data.time1 * 42 * 52 * 0.0104
$('#promedio-dias').text(Math.round(avgDays))

if (lostDays1 > lostDays2) {
  $('#mas-dias-nombre').text(data.name1)
  $('#mas-dias-cantidad').text(Math.round(lostDays1))

  $('#menos-dias-nombre').text(data.name2)
  $('#menos-dias-cantidad').text(Math.round(lostDays2))
} else {
  $('#mas-dias-nombre').text(data.name2)
  $('#mas-dias-cantidad').text(Math.round(lostDays2))

  $('#menos-dias-nombre').text(data.name1)
  $('#menos-dias-cantidad').text(Math.round(lostDays1))
}

var risk1 = Math.round(data.sex1 === 'h' ? (data.age1 / 3 + data.week1 / 21) : (data.age1 / 2 + data.week1 / 21))
var risk2 = Math.round(data.sex2 === 'h' ? (data.age2 / 3 + data.week2 / 21) : (data.age2 / 2 + data.week2 / 21))
var avgRisk = Math.round(data.sex1 === 'h' ? (data.age1/3 + 42 / 21) : data.age1 / 2 + 42 / 21)
$('#prom-riesgo').text(avgRisk + "%")


if (risk1 > risk2) {
  $('#menos-riesgo-nombre').text(data.name1)
  $('#menos-riesgo-porcent').text(risk1 + "%")

  $('#mas-riesgo-nombre').text(data.name2)
  $('#mas-riesgo-porcent').text(risk2 + "%")
} else {
  $('#menos-riesgo-nombre').text(data.name2)
  $('#menos-riesgo-porcent').text(risk2 + "%")

  $('#mas-riesgo-nombre').text(data.name1)
  $('#mas-riesgo-porcent').text(risk1 + "%")
}