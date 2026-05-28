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
  '11. Sus brazos', 
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
  '26. Siempre coge la llamada y cuando no',
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
  '60. Aprecia los detalles, aunque no lo diga'
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