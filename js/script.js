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

var lostMoney1 = ((data.time1 * data.week1 * 52) / 20) * 3000 
var lostMoney2 = ((data.time2 * data.week2 * 52) / 20) * 3000 
var avgMoney = ((data.time1 * 42 * 52) / 20) * 3000
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

var lostWater1 = (data.time1 * data.week1 * 52) * 50
var lostWater2 = (data.time2 * data.week2 * 52) * 50
var avgWater = (data.time1 * 42 * 52) * 50
$('#promedio-lts').text(avgWater + "lts")
if (lostMoney1 > lostMoney2) {
  $('#mas-agua-nombre').text(data.name1)
  $('#mas-agua-lts').text(lostWater1 + "lts")

  $('#menos-agua-nombre').text(data.name1)
  $('#menos-agua-lts').text(lostWater1 + "lts")
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


// Sexo = input('sexo (M/H): ')
// Edad = int(input('edad: '))
// Altura = float(input('altura: '))# Metros con puntos, no comas
// Peso = int(input('peso: ')) #Kg
// Cigarros = int(input('cigarros fumados diariamente: '))#cigarros diarios
// DH = Edad*0.51 #Daño por edad hombre
// DM = Edad*0.3 #Daño por edad mujer

// if Sexo =='H':
//     Cuenta = 20
    
//     if Cigarros<15:
//         Cuenta+=2
//     elif Cigarros<24:
//         Cuenta+=4
//     elif Cigarros>24:
//         Cuenta+=6
//     Cuenta += int(DH)
    
//     r=''
//     if Cuenta<35:
//         r='1%'
//     elif Cuenta<45:
//         r='1-3%'
//     elif Cuenta<55:
//         r='3-7%'
//     elif Cuenta<65:
//         r='7-17%'
//     elif Cuenta<70:
//         r='17-28%'
//     elif Cuenta<75:
//         r='28-40%'
//     elif Cuenta<80:
//         r='40-56%'
//     print(r)
    
// if Sexo == 'M':
//     Cuenta = 27
//     if Cigarros<15:
//         Cuenta+=8
//     elif Cigarros<24:
//         Cuenta+=15
//     elif Cigarros>24:
//         Cuenta+=18
//     Cuenta += int(DM)
    
//     r=''
//     if Cuenta<60:
//         r='1%'
//     elif Cuenta<70:
//         r='1-3%'
//     elif Cuenta<80:
//         r='3-5%'
//     elif Cuenta<85:
//         r='6-11%'
//     elif Cuenta<90:
//         r='11-19%'
//     elif Cuenta<95:
//         r='19-28%'
//     elif Cuenta<100:
//         r='28-43%'
//     print(r)
