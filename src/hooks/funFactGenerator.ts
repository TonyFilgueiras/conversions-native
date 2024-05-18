export interface FactType  {
  [key:string]: string
}
  

export interface GroupFactType  {
  [key:string]: FactType[]
  
}

export let facts:GroupFactType = {
  temperature: [
      {
          en: "In universe temperatures range from about 3,500,000,000 Kelvin (a supernova) to 3 Kelvin (space)", pt: "No universo, as temperaturas variam de cerca de 3.500.000.000 Kelvin (uma supernova) a 3 Kelvin (espaço)."
      },
      {
          en:"Sun is known to be a class G yellow star .The average surface temperature of Sun is 5,600 Kelvin.",
          pt:"O Sol é conhecido por ser uma estrela amarela de classe G. A temperatura média da superfície do Sol é de 5.600 Kelvin."
      },
      {
          en:"Absolute zero is the coldest theoretical temperature. Reaching this temperature substance does not possess any heat energy. It has been defined as 0 Kelvin",
          pt:"O zero absoluto é a temperatura teórica mais baixa. Atingindo esta temperatura, a substância não possui nenhuma energia térmica. Foi definido como 0 Kelvin"
      },
      {
          en:"The temperature of a substance has been defined as a result of the speed at which its molecules move. The theory states that faster the molecules will move, higher the temperature of the substance will be.",
          pt:"A temperatura de uma substância foi definida como resultado da velocidade com que suas moléculas se movem. A teoria afirma que mais rápido as moléculas se moverão, maior será a temperatura da substância."
      },
      {
          en:"Fahrenheit and Celsius are equal at -40 degrees.",
          pt:"Fahrenheit e Celsius são iguais a -40 graus."
      },
      {
          en: "Celsius is the world's most common way of measuring temperature.",
          pt:"Celsius é a maneira mais comum do mundo de medir a temperatura."
      },
      {
          en:"Temperature affects physical properties of materials whether it is solid, liquid, gaseous or plasma: density; solubility; vapour pressure and electrical conductivity.",
          pt:"A temperatura afeta as propriedades físicas dos materiais, sejam eles sólidos, líquidos, gasosos ou plasma: densidade; solubilidade; pressão de vapor e condutividade elétrica."
      },
      {
          en:"Temperature affects the rate and extent to which chemical reactions take place.",
          pt:"A temperatura afeta a taxa e a extensão em que as reações químicas ocorrem."
      },
      {
          en:"Temperature affects the amount as well as properties of thermal radiation which emits from the surface of an object.",
          pt:"A temperatura afeta a quantidade, bem como as propriedades da radiação térmica que emite da superfície de um objeto."
      },
      {
          en:"57.8 °C is the hottest temperature ever recorded on Earth. It was recorded on September 13, 1922 in Al 'Aziziyah located in Libya.",
          pt:"57,8 °C é a temperatura mais quente já registrada na Terra. Foi registrado em 13 de setembro de 1922 em Al 'Aziziyah localizado na Líbia."
      },
      {
          en:"-89.2 °C is the coldest temperature ever recorded on Earth. It was recorded at Vostok Station located in Antarctica on July 21, 1983.",
          pt:"-89,2 °C é a temperatura mais baixa já registrada na Terra. Foi gravado na Estação Vostok localizada na Antártica em 21 de julho de 1983."
      },
      {
          en:"Conduction (occurs in solid), convection (occurs in liquid) and radiation (takes place through space) are the three processes of transferring heat from a substance at a higher temperature to one at a lower temperature.",
          pt:"Condução (ocorre no sólido), convecção (ocorre no líquido) e radiação (ocorre no espaço) são os três processos de transferência de calor de uma substância a uma temperatura mais alta para outra a uma temperatura mais baixa."
      },
      {
          en:"Galileo Galilei invented the rudimentary water thermometer in 1593 which, for the first time allowed temperature variations to be measured.",
          pt:"Galileo Galilei inventou o termômetro de água rudimentar em 1593 que, pela primeira vez, permitiu que as variações de temperatura fossem medidas."
      },
  ],
  speed: [
      {
          en:"The first person to measure speed in this way, calculating distance over time to find speed was the famous Italian astronomer and physicist Galileo Galilei.",
          pt:"A primeira pessoa a medir a velocidade, calculando a distância ao longo do tempo para encontrar a velocidade, foi o famoso astrônomo e físico italiano Galileo Galilei."
      },
      {
          en:"Your spacecraft would have to attain a speed of at least 11.186 km/s to escape the Earth's gravitational pull",
          pt:"Sua espaçonave teria que atingir uma velocidade de pelo menos 11,186 km/s para escapar da atração gravitacional da Terra"
      },
      {
          en:"The escape velocity is the speed at which any particular object must need to travel to break free from the gravitational pull of any particular planet",
          pt:"A velocidade de escape é a velocidade na qual qualquer objeto em particular precisa viajar para se libertar da atração gravitacional de qualquer planeta em particular."
      },
      {
          en:"The escape velocity from Jupiter is 59.5 km/s. And the escape velocity from the Sun is 618 km/s.",
          pt:"A velocidade de escape de Júpiter é de 59,5 km/s. E a velocidade de escape do Sol é de 618 km/s."
      },
      {
          en:"The average speed of a 3-toed sloth is about 0.003 mi/h. That means, the 3-toed sloth cannot move over 100 feet in a day. As a result, most of these sloths live their entire life in the same place.",
          pt:"A velocidade média de uma preguiça de três dedos é de cerca de 0,003 mi/h. Isso significa que a preguiça de 3 dedos não pode se mover mais de 30 metros por dia. Como resultado, a maioria dessas preguiças vive toda a sua vida no mesmo lugar."
      },
      {
          en:"Usain Bolt finished a 100-meter sprint in just 9.58 seconds back in 2009. In that instance, his average speed was 37.58 km/h. Whereas the top speed was 44.16 km/h.",
          pt:"Usain Bolt terminou uma corrida de 100 metros em apenas 9,58 segundos em 2009. Nesse caso, sua velocidade média foi de 37,58 km/h. Enquanto a velocidade máxima foi de 44,16 km/h."
      },
      {
          en:"The average orbital speed of Earth is about 30 km/s. And, at the equator, the surface of the Earth moves at a speed of about 460 m/s. ",
          pt:"A velocidade orbital média da Terra é de cerca de 30 km/s. E, no equador, a superfície da Terra se move a uma velocidade de cerca de 460 m/s."
      },
      {
          en:"Most of the tornadoes have wind speeds from 65 mi/h to 110 mi/h. The Oklahoma Tornado that hit the Oklahoma City on 3rd May 1999 was the fastest tornado recorded ever in Earth. The highest wind speed of that Tornado was about 318 mi/h.",
          pt:"A maioria dos tornados tem velocidades de vento de 65 mi/h a 110 mi/h. O Tornado de Oklahoma que atingiu a cidade de Oklahoma em 3 de maio de 1999 foi o tornado mais rápido registrado na Terra. A maior velocidade do vento daquele Tornado foi de cerca de 318 mi/h."
      },
      {
          en:"The Peregrine Falcon is the fastest animal on Earth. It can attain a maximum speed of up to 390 km/h while in a dive.",
          pt:"O falcão peregrino é o animal mais rápido da Terra. Pode atingir uma velocidade máxima de até 390 km/h durante um mergulho."
      },
      {
          en:"The Cheetah is the fastest animal in the land. It has a recorded speed from 109 km/h to 120 km/h.",
          pt:"A chita é o animal mais rápido da terra. Tem uma velocidade registrada de 109 km/h a 120 km/h."
      },
      {
          en:"The Sailfish is the fastest fish in the world. They can attain a speed of up to 68 mi/h or 110 km/h in a short amount of time. They weigh about 100 kg and grows up to over 10 feet.",
          pt:"O Sailfish é o peixe mais rápido do mundo. Eles podem atingir uma velocidade de até 68 mi/h ou 110 km/h em um curto espaço de tempo. Eles pesam cerca de 100 kg e crescem até mais de 10 pés."
      },
      {
          en:"The speed of light is the highest in a vacuum and that is about 299,792 km/s. If you could attain that speed, you can revolve around the Earth 7.5 times in a second",
          pt:"A velocidade da luz é a mais alta no vácuo e é de cerca de 299.792 km/s. Se você pudesse atingir essa velocidade, poderia girar em torno da Terra 7,5 vezes em um segundo"
      },
      {
          en:"The speed of sound in the air is roughly 343 m/s.",
          pt:"A velocidade do som no ar é de aproximadamente 343 m/s."
      },
      {
          en:"The current land speed record is held by the ThrustSSC. This was a (twin turbofan) jet-powered car. In October 1997, this special supercar achieved a speed of up to 1227.9 km/h. It was the first land vehicle that broke the sound barrier.",
          pt:"O atual recorde de velocidade terrestre é mantido pelo ThrustSSC. Este era um carro movido a jato (turbofan duplo). Em outubro de 1997, este supercarro especial atingiu uma velocidade de até 1.227,9 km/h. Foi o primeiro veículo terrestre a quebrar a barreira do som."
      },
      {
          en:"The fastest aircraft speed record is held by the Hypersonic X-43A, made by NASA. It achieved this feat on Nov. 16, 2004, when it reached a top speed of roughly 7,000 mi/h.",
          pt:"O recorde de velocidade de aeronave mais rápida é mantido pelo Hypersonic X-43A, fabricado pela NASA. Ele alcançou esse feito em 16 de novembro de 2004, quando atingiu a velocidade máxima de aproximadamente 11.000 km/h."
      },
  ],
  weight: [
      {
          en:"Switzerland eats the most chocolate equating to 10 kilos per person per year",
          pt:"A Suíça come mais chocolate, o que equivale a 10 quilos por pessoa por ano"
      },
      {
          en:"Americans eat 35,000 tons of pasta a year",
          pt:"Americanos comem 35.000 toneladas de macarrão por ano"
      },
      {
          en:"The bones of a pigeon weigh less than its feathers",
          pt:"Os ossos de um pombo pesam menos que suas penas"
      },
      {
          en:"The Earth weighs 6,588,000,000,000,000,000 tons",
          pt:"A Terra pesa 6.588.000.000.000.000.000 de toneladas"
      },
      {
          en:"Every year the sun loses 360 million tons",
          pt:"Todos os anos o sol perde 360 milhões de toneladas"
      },
      {
          en:"The average iceberg weighs 20,000,000 tons",
          pt:"O iceberg médio pesa 20 milhões de toneladas"
      },
      {
          en:"You have to eat 5kg of potatoes to put on 0.5kg of weight (a potato has no more calories than an apple)",
          pt:"Você tem que comer 5kg de batatas para engordar 0,5kg de peso (uma batata não tem mais calorias que uma maçã)"
      },
      {
          en:"The average woman will consume over 2.7kg of lipstick in their lifetime",
          pt:"A mulher média consumirá mais de 2,7 kg de batom em sua vida"
      },
      {
          en:"The Empire State Building in New York weighs over 365,000 tons",
          pt:"O Empire State Building em Nova York pesa mais de 365.000 toneladas"
      },
  ]
  
}

function shuffle(array: Array<{}>) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
  
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function funFactGenerator(facts:GroupFactType, typeOfConversion: string|undefined)  {   
  if (typeOfConversion){
      shuffle(facts[typeOfConversion])
      return facts[typeOfConversion]
  }
}