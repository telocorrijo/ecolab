let Indice = document.getElementById('centro')
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
let score = 0;
function IniciarPagina() {
    let InicioPagina = document.getElementById('Comenzar')
    InicioPagina.addEventListener('click', Comenzar)
}
function Comenzar(){
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

            if (allAnswered) {
                const finalScoreDiv = document.getElementById('final-score');
                finalScoreDiv.textContent = `Has terminado el cuestionario. ¡Buen trabajo! Tu puntuación es: ${score}/15 preguntas`;
                finalScoreDiv.style.color = "black";
            }
        }

        // Agregar event listeners a todos los radio buttons
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', checkAnswer);
        });
window.addEventListener('load',IniciarPagina)