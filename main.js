// Lista original de razones (debes tenerla definida antes)
const list_of_reasons = [
  '1. Ella', 
  '2. Su olor', 
  '3. Su cara', 
  '4. Su sonrisa', 
  '5. Sus cejas',
  '6. Sus dientes bonitos', 
  '7. Sus labios', 
  '8. Sus ojos saltones y a la vez hundidos',
  '9. Su silueta', 
  '10. Sus manos', 
  '11. Sus abrazos', 
  '12. Su mood tan cambiante',
  '13. Sus costumbre al piso', 
  '14. Sus canciones inventadas', 
  '15. Sus celos',
  '16. Su capacidad de caer bien', 
  '17. Su multifacétic version', 
  '18. Su voz de ternura',
  '19. Su autocontrol',
  '20. Su enfóque', 
  '21. Lo aplicada que es', 
  '22. Su lado tierno ',
  '23. Su risa de loca', 
  '24. Su logica tan extraña, pero funcional',
  '25. E` la mejor trouble shutel (arregló la video llamada)',
  '26. Siempre coge la llamada y cuando no, tira pa´tra desde que se libra',
  '27. Un sarcasmo agresivo (ojala no se le safe frenter a mami)', 
  '28. Come como camionero',
  '29. Tira unos sticker´s to raro', 
  '30. La confianza que me da', 
  '31. Le Cae bien a todo el mundo ',
  '32. Tiene como 3 colores en el cuerpo', 
  '33. Sabe poner limites sin hacerme sentir mal',
  '34. Esta conciente de que tiene que mejorar y aun así se ama a si misma', 
  '35. Es persistente',
  '36. Cocina', 
  '37. Tiene buenas amistades en la congregación',
  '38. Cuando se enoja es tan linda',
  '39. Filtra', '40. Trata bien aunque no le caiga bien', 
  '41. Le gusta dormir',
  '42. Sabe leer e interpretar', 
  '43. E´ una ingeniera (no e poca mieida)',
  '44. Tiene mas datos random que casi google', 
  '45. Habla sola, y en vo´ alta con to e introsive thoughts',
  '46. Sabe identificar las personas que estan dobladas al castellano (gays)',
  '47. Lee su biblia y si no, hace el esfuerzo por mantener su espiritualidad',
  '48. Chismea como una doña', 
  '49. Sabe amar de una manera curiosamente poco comun',
  '50. Tiene tantas cosas hermosas en su personalidad, que su fisico es lo menos atractivo (y e bunisima que ta´)',
  '51. Me enseña amarme ', 
  '52. Pelea hasta sola', 
  '53. Me acepta',
  '54. Me dices como mejorar',
  '55. Me hace sentir amado', 
  '56. Me saca de mi zona de confort',
  '57. Me dió una razón para prolongar la vida',
  '58. Es humilde',
  '59. Disfruta de lo simple',
  '60. Aprecia los detalles, aunque no lo diga',
  '61. Tiene un corazón tan grande que a veces me pregunto cómo cabe tanto amor ahí dentro',
  '62. Tiene una relación interesante con su mama',
  '63. Tiene calle y tigueraje, aunque no lo nota',
  '64. Me avisa y comunica cuando necesita tiempo',
  '65. Piensa en los demas, en ocasiones antes que en ella misma',
  '66. No le da miedo llorar conmigo, y me da la misma confianza para llorar con ella', 
  '67. Es perspicaz', 
  '68. Es bastante intuitiva', 
  '69. Tiene una voluntad de hierro, dificil de quebrar', 
  '70. Puedo quedarme callado y ella me entiende',
   '71. Juzga para Curarse',
   '72. Habla en ingles cuando le gusta algo',
   '73. Tiene mañas bonitas',
   '74. Nunca dejo de conocerla',
   '75. Ama el gimnasio',
  // '76.',
  // '77.',
  // '78.',
  // '79.',
  // '80.',
  // '81.',
  // '82.',
  // '83.',
  // '84.',
  // '85.',
  // '86.',
  // '87.',
  // '88.',
  // '89.',
  // '90.',
  // '91.',
  // '92.',
  // '93.',
  // '94.',
  // '95.',
  // '96.',
  // '97.',
  // '98.',
  // '99.',
  '100. Te Amo en Afrikáans: Ek het jou lief',
  '101. Te Amo en Albanés: Unë të dua',
  '102. Te Amo en Alemán: Ich liebe dich',
  '103. Te Amo en Amárico: እወድሻለሁ (iwedishalehu)',
  '104. Te Amo en Árabe: أحبك (uhibek)',
  '105. Te Amo en Armenio: Ես քեզ սիրում եմ (Yes k’ez sirum yem)',
  '106. Te Amo en Azerbaiyano: Mən səni sevirəm',
  '107. Te Amo en Bengalí: আমি তোমায় ভালোবাসি (Ami tomake bhalobashi)',
  '108. Te Amo en Bielorruso: я цябе кахаю (ja ciabie kahaju)',
  '109. Te Amo en Birmano: မင်းကိုချစ်တယ် (Mainnkohkyittaal)',
  '110. Te Amo en Bosnio: Volim te',
  '111. Te Amo en Búlgaro: Обичам те (Obicham te)',
  '112. Te Amo en Cantonés: 我愛你 (Ngo oiy ney a)',
  '113. Te Amo en Catalán: T estimo',
  '114. Te Amo en Checo: Miluji tě',
  '115. Te Amo en Chichewa: Ndimakukondani',
  '116. Te Amo en Chino (Mandarín): 我爱你 (Wǒ ài nǐ)',
  '117. Te Amo en Coreano: 사랑해 (Saranghae)',
  '118. Te Amo en Corso: Ti tengu caru',
  '119. Te Amo en Criollo haitiano: Mwen renmen ou',
  '120. Te Amo en Croata: Volim te',
  '121. Te Amo en Danés: Jeg elsker dig',
  '122. Te Amo en Eslovaco: Ľúbim ťa',
  '123. Te Amo en Esloveno: Ljubim te',
  '124. Te Amo en Español: Te amo',
  '125. Te Amo en Estonio: Ma armastan sind',
  '126. Te Amo en Euskera: Maite zaitut',
  '127. Te Amo en Ewe: Melɔ̃ wò',
  '128. Te Amo en Farsi (Persa): دوستت دارم (Dooset daram)',
  '129. Te Amo en Fijiano: Au domoni iko',
  '130. Te Amo en Filipino (Tagalo): Mahal kita',
  '131. Te Amo en Finés: Rakastan sinua',
  '132. Te Amo en Francés: Je t aime',
  '133. Te Amo en Gaélico escocés: Tha gaol agam ort',
  '134. Te Amo en Galés: Rwy n dy garu di',
  '135. Te Amo en Gallego: Quérote',
  '136. Te Amo en Georgiano: Მიყვარხარ (Miq’varkhar)',
  '137. Te Amo en Griego: Σ αγαπώ (S’agapo)',
  '138. Te Amo en Guaraní: Rohayhu',
  '139. Te Amo en Hawaiano: Aloha wau iā ʻoe',
  '140. Te Amo en Hebreo: אני אוהב אותך (ani ohev otkha)',
  '141. Te Amo en Hindi: मैं तुमसे प्यार करता हूँ (main tumse pyaar karta hoon)',
  '142. Te Amo en Hmong: Kuv hlub koj',
  '143. Te Amo en Holandés (Neerlandés): Ik hou van je',
  '144. Te Amo en Húngaro: Szeretlek',
  '145. Te Amo en Igbo: A hụrụ m gị nanya',
  '146. Te Amo en Ilocano: Ay-ayaten ka',
  '147. Te Amo en Indonesio: Aku mencintaimu',
  '148. Te Amo en Inglés: I love you',
  '149. Te Amo en Irlandés: Tá grá agam ort',
  '150. Te Amo en Islandés: Ég elska þig',
  '151. Te Amo en Italiano: Ti amo',
  '152. Te Amo en Japonés: 愛してる (Aishiteru)',
  '153. Te Amo en Jemer (Camboyano): ខ្ញុំស្រលាញ់អ្នក',
  '154. Te Amo en Kurdo: Ez hej te dikim',
  '155. Te Amo en Laosiano: ຂ້າພະເຈົ້າຮັກເຈົ້າ',
  '156. Te Amo en Letón: Es tevi mīlu',
  '157. Te Amo en Lituano: Aš tave myliu',
  '158. Te Amo en Luxemburgués: Ech hun dech gär',
  '159. Te Amo en Malayo: Saya cintakan awak',
  '160. Te Amo en Maltés: Inħobbok',
  '161. Te Amo en Mapudungún: Inche tañi ayun',
  '162. Te Amo en Maya K iche: K o wi in k ulmataj',
  '163. Te Amo en Mongol: Bi chamd khairtai',
  '164. Te Amo en Náhuatl: Nimitztlazohtla',
  '165. Te Amo en Nepalí: Ma tapailai maya garchhu',
  '166. Te Amo en Noruego: Jeg elsker deg',
  '167. Te Amo en Oriya: Mu tumaku bhalapaee',
  '168. Te Amo en Polaco: Kocham cię',
  '169. Te Amo en Portugués: Eu te amo',
  '170. Te Amo en Punyabí: Main tainu pyaar karda haan',
  '171. Te Amo en Quechua: Kuyayki',
  '172. Te Amo en Rumano: Te iubesc',
  '173. Te Amo en Ruso: Я тебя люблю (Ya tebya liubliu)',
  '174. Te Amo en Serbio: Volim te',
  '175. Te Amo en Shona: Ndinokuda',
  '176. Te Amo en Sinhala: Mama oyāṭa ādareyi',
  '177. Te Amo en Somalí: Waan ku jeclahay',
  '178. Te Amo en Suajili: Nakupenda',
  '179. Te Amo en Sueco: Jag älskar dig',
  '180. Te Amo en Tailandés: ฉันรักคุณ (chan rak khun)',
  '181. Te Amo en Tamil: Naan unnaik kathalikiraen',
  '182. Te Amo en Tayiko: Man toro dust medoram',
  '183. Te Amo en Telugu: Nenu ninnu premistunnanu',
  '184. Te Amo en Tibetano: Nga khyö la skye bo',
  '185. Te Amo en Turco: Seni seviyorum',
  '186. Te Amo en Uzbeko: Men seni sevaman',
  '187. Te Amo en Urdu: میں تم سے محبت کرتا ہوں (main tum se mohabbat karta hoon)',
  '188. Te Amo en Vietnamita: Anh yêu em (de hombre a mujer)',
  '189. Te Amo en Xhosa: Ndiyakuthanda',
  '190. Te Amo en Yoruba: Mo nifẹ rẹ',
  '191. Te Amo en Zulú: Ngiyakuthanda',
  '192. Te Amo en Aymara: Munsmawa',
  '193. Te Amo en Bengalí (variante): Ami tomake bhalobashi',
  '194. Te Amo en Criollo (variante): Mwen renmen ou',
  '195. Te Amo en Georgiano: Me shens miq varxar',
  '196. Te Amo en Guaraní: Rohayhu',
  '197. Te Amo en Hawaiano: Aloha wau iā ʻoe',
  '198. Te Amo en Irlandés: Taim i ngra leat',
  '199. Te Amo en Javanés: Aku tresna sampeyan',
  '200. Te Amo en Húngaro (variante): Szeretlek',
];

// Array con las razones que aún no han aparecido (se reinicia al acertar la fecha)
let remainingReasons = [];

// Muestra una razón aleatoria sin repetir, pero solo actualiza el contenedor de texto
function mostrarRazonAleatoria() {
  const reasonTextDiv = document.getElementById('reasonText');
  const nextBtn = document.getElementById('nextReasonBtn');

  // Si ya no quedan razones, mostramos mensaje final y deshabilitamos el botón
  if (remainingReasons.length === 0) {
    reasonTextDiv.innerHTML = `<p class="reason-text">✨ No hay más razones... porque el amor verdadero no se cuenta, se siente. ✨</p>`;
    if (nextBtn) nextBtn.disabled = true;
    return;
  }

  // Elegir un índice aleatorio dentro de las razones restantes
  const randomIndex = Math.floor(Math.random() * remainingReasons.length);
  const reason = remainingReasons[randomIndex];
  // Eliminar esa razón del array para que no vuelva a salir
  remainingReasons.splice(randomIndex, 1);

  // Mostrar la razón en el div específico (no borra el botón)
  reasonTextDiv.innerHTML = `<p class="reason-text">💖 ${reason} 💖</p>`;
  if (nextBtn) nextBtn.disabled = false;
}

// Crea el botón "Next" (solo una vez) y lo agrega al div specialMessage
function crearBotonNext() {
  const messageDiv = document.getElementById('specialMessage');
  if (document.getElementById('nextReasonBtn')) return; // ya existe

  const nextBtn = document.createElement('button');
  nextBtn.id = 'nextReasonBtn';
  nextBtn.textContent = 'Next ➡️';
  nextBtn.className = 'btn btn-success mt-3';
  nextBtn.style.display = 'block';
  nextBtn.style.margin = '1rem auto 0';
  nextBtn.addEventListener('click', mostrarRazonAleatoria);
  messageDiv.appendChild(nextBtn);
}

// Verifica la fecha promesa
function verifyPromiseDate() {
  const dateInput = document.getElementById('dateInput');
  const selectedDate = dateInput.value;
  const targetDate = "2026-04-19";

  if (!selectedDate) {
    alert("💖 Please select a date first, my love. 💖");
    return;
  }

  if (selectedDate === targetDate) {
    // 1. Ocultar el selector de fecha (input + botón Submit)
    const dateWrapper = document.querySelector('.date-wrapper');
    if (dateWrapper) dateWrapper.style.display = 'none';

    // 2. Reiniciar el array de razones disponibles (copia completa)
    remainingReasons = [...list_of_reasons];

    // 3. Mostrar el div de mensajes
    const messageDiv = document.getElementById('specialMessage');
    messageDiv.style.display = 'block';

    // Asegurar que exista el contenedor de texto (por si no está en el HTML)
    if (!document.getElementById('reasonText')) {
      const textContainer = document.createElement('div');
      textContainer.id = 'reasonText';
      messageDiv.appendChild(textContainer);
    }

    // 4. Mostrar la primera razón aleatoria
    mostrarRazonAleatoria();

    // 5. Crear el botón Next (si no existe)
    crearBotonNext();
  } else {
    alert("❌ No es la fecha correcta, mi amor. Inténtalo de nuevo. ❌");
  }
}

// Evento: si el usuario cambia la fecha después de un intento fallido, ocultamos el mensaje
const dateInputElem = document.getElementById('dateInput');
if (dateInputElem) {
  dateInputElem.addEventListener('change', function() {
    const specialDiv = document.getElementById('specialMessage');
    if (specialDiv) specialDiv.style.display = 'none';
  });
}
