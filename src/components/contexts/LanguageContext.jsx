import { createContext } from "react";
import { useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en"

export const translations =  {
 es:{
 headerProduct: "Productos",
 headerPricing: "Precios",
 headerQuiz: "QuizGPT",
 flagURL: "https://i.pinimg.com/originals/4d/d3/24/4dd324d40befaccb490fe9be5a7a02e9.png", 
 pageLanguage: "ES",
 headerButton: "Generar Prueba",
 quizFormTittle: "QuizGPT: Generador de pruebas",
 quizFormP: "Esta app te permite generar una prueba sobre cualquier tema y cualquier nivel de dificultad. Esta basada en Inteligencia artificial avanzada llamada GPT-3 para darte un resultado único en cada ejecución",
 quizTopic: "Tema de la prueba",
 quizTopicPlaceholder: "Historia de los derechos civiles en Estados Unidos",
 questionsNumber: "Número de preguntas",
 questionsLanguage: "Idioma preguntas",
 questionLanguagePlaceholder: "Ingles, USA",
 choicesNumber: "Número de alternativas por pregunta",
 difficulty: "Dificultad",
 difficultyPlaceholder: "Escuela primaria",
 answerComments: "Comentarios",
 answerCommentsPlaceholder: "Activados",
 formButton: "Enviar",
 screenTit: "Resultados:",
 screenText: "Ingresa tus requerimientos para generar increibles pruebas!"
 },
 en:{
 headerProduct: "Products",
 headerPricing: "Pricing",
 headerQuiz: "QuizGPT",
 flagURL: "https://img.freepik.com/iconos-gratis/estados-unidos-america_318-452242.jpg", 
 pageLanguage: "EN",
 headerButton: "Create Quizz",
 quizFormTittle: "QuizGPT: Quiz Generator",
 quizFormP: "This app allows you to generate a quiz on any topic and any difficulty level. It uses an advanced AI called GPT-3 to give you a unique result with each run!",
 quizTopic: "Quiz Topic:",
 quizTopicPlaceholder: "Historia de los derechos civiles en Estados Unidos",
 questionsNumber: "Number of Questions",
 questionLanguage: "Questions Language",
 questionLanguagePlaceholder: "English, USA",
 choicesNumber: "Number of Choices per Question",
 difficulty: "Difficulty",
 difficultyPlaceholder: "Elementary school",
 answerComments: "Answer Comments:",
 answerCommentsPlaceholder: "Activated",
 formButton: "Submit",
 screenTit: "Results:",
 screenText: "Submit your requirements to get your amazing quizzes!"
 } 
};

const LanguageProvider = ({children}) => {
 const [ language, setLanguage ] = useState(initialLanguage);
 const [ texts, setTexts ] = useState(translations[language]); 
  

 const handleLanguage = (e) => {
  console.log(e.target.value)
 if (language === "en") {
 setLanguage("es")
 setTexts(translations.es)
 }
 if (language === "es"){
 setLanguage("en")
 setTexts(translations.en)
 } 
 };
 
const data ={ language, texts, handleLanguage };
return (
 <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
)
};


export { LanguageProvider };
export default LanguageContext
