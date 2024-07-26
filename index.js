let Centro = document.getElementById('centro')
let Indice = document.getElementById('Indice')
Indice.style.display = 'none'
let Niveles = document.getElementById('niveles')
Niveles.style.display = 'none'
let NivelBásico = document.getElementById('Básico')
let NivelMedio = document.getElementById('Medio')
let NivelAvanzado = document.getElementById('Avanzado')
let botónSeleccionar = document.getElementById('Seleccionar')
botónSeleccionar.addEventListener('click' ,SelecciónNiveles)
let PreguntaBásica = document.getElementById('PreguntaBásica')
PreguntaBásica.style.display = 'none'
let PreguntaMedia = document.getElementById('PreguntaMedia')
PreguntaMedia.style.display = 'none'
let PreguntaAvanzada = document.getElementById('PreguntaAvanzada')
PreguntaAvanzada.style.display = 'none'
let BtnFinalizar  = document.getElementById('Finalizar')
BtnFinalizar.addEventListener('click', OcultarPgt)
let BtnFinalizar2  = document.getElementById('Finalizar2')
BtnFinalizar2.addEventListener('click', OcultarPgt2)
let Final = document.getElementById('Final')
Final.style.display = 'none'
let BtnIndice = document.getElementById('Comenzar2')
BtnIndice.addEventListener('click', ComenzarBtn)
function IniciarPagina() {
    let InicioPagina = document.getElementById('Comenzar')
    InicioPagina.addEventListener('click', Comenzar)
}
function Comenzar(){
    Centro.style.display = 'none'
    Indice.style.display = 'block'
    Niveles.style.display = 'none'
}
function ComenzarBtn(){
    Centro.style.display = 'none'
    Indice.style.display = 'none'
    Niveles.style.display = 'block'
}
function SelecciónNiveles(){
    if(NivelBásico.checked){
        Niveles.style.display = 'none'
        PreguntaBásica.style.display = 'block'
    }else if(NivelMedio.checked){
        Niveles.style.display = 'none'
        PreguntaMedia.style.display = 'block'
    }else if(NivelAvanzado.checked){
        Niveles.style.display = 'none'
        PreguntaAvanzada.style.display = 'block'
    }
}
        // Función para verificar la respuesta seleccionada y mostrar retroalimentación
        function checkAnswer(event) {
            const selectedOption = event.target;
            const questionDiv = selectedOption.closest('.question');
            const feedbackDiv = questionDiv.querySelector('.feedback');

            // Deshabilitar todos los inputs de la pregunta actual
            const allInputs = questionDiv.querySelectorAll('input[type="radio"]');
            allInputs.forEach(input => input.disabled = true);

            // Mostrar retroalimentación y sumar puntos si la respuesta es correcta
            if (selectedOption.value === "correct") {
                feedbackDiv.textContent = "¡Correcto!";
                feedbackDiv.style.color = "green";
                score += 1; // Sumar un punto por respuesta correcta
            } else {
                feedbackDiv.textContent = "Incorrecto.";
                feedbackDiv.style.color = "red";
            }

            // Mostrar la puntuación final si todas las preguntas han sido respondidas
            const allQuestions = document.querySelectorAll('.question');
            const allAnswered = Array.from(allQuestions).every(q => {
                const selected = q.querySelector('input[type="radio"]:checked');
                return selected !== null;
            });
        }

        // Agregar event listeners a todos los radio buttons
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', checkAnswer);
        });
function OcultarPgt() {
    Final.style.display = 'block'
    PreguntaBásica.style.display = 'none'
    PreguntaMedia.style.display = 'none'
    PreguntaAvanzada.style.display = 'none'
}
function OcultarPgt2() {
    Final.style.display = 'block'
    PreguntaBásica.style.display = 'none'
    PreguntaMedia.style.display = 'none'
    PreguntaAvanzada.style.display = 'none'
}
window.addEventListener('load',IniciarPagina)
