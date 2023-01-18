
function Index() {
return (
 <div className="App-header">
 <header>
  <div className="redSquare"></div>
  <div className="greenSquare"></div>
  <div className="blueSquare"></div>
  <div className="yellowSquare"></div>
  <h2 className="tools">QuizTools</h2>
  <nav>
   <h3>Product</h3>
   <h3>Pricing</h3>
   <h3>QuizGPT</h3>
   <h3>Blog</h3>         
  </nav>
  <div className="LangFlag">
  <h3>EN</h3>
  <img src="https://img.freepik.com/iconos-gratis/estados-unidos-america_318-452242.jpg" width="35" height="20" alt="" />
  </div>
  <button className="createQuizz">Create Quizz</button>
 </header>
 <h2 className="result">Result:</h2>
 <div className="quizForm">
  <h2>QuizGPT: Quiz Generator</h2>
  <p>
   This app allows you to generate a quiz on any topic and any difficulty level. 
   It uses an advanced AI called GPT-3 to give you a unique result with each run!
  </p>
  <div className="inputs">  
   <label htmlFor="topic">Quiz Topic:</label>
   <input name="topic" type="text" className="topic" placeholder="History of civil rights in the United States" />
   <div className="inputNest">
    <div className="inputInnerNest">
     <label htmlFor="questionsNumber">Number of Questions</label>
     <input className="qNumber" name="questionsNumber" type="text" defaultValue={5} />
    </div>
    <div className="inputInnerNest2">
     <label className="spLabel" htmlFor="language">Questions Language:</label>
     <select className="lang" name="language" id="">
      <option value="es">Spanish</option>
      <option value="en" selected>English, USA</option>
     </select>
    </div>
   </div>
   <label htmlFor="long">Number of Choices per Question</label>
    <select name="long" id="" className="long">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option> 
   </select>
   <div className="inputNest">
   <div className="inputInnerNest3 marginRight">
    <label className="spLabel" htmlFor="difficulty">Difficulty:</label>
    <select className="lang" name="difficulty" id="">
     <option value="es">Spanish</option>
     <option value="en" selected>Elementary school</option>
    </select>
    </div>
    <div className="inputInnerNest3">
     <label className="spLabel" htmlFor="comments">Answer Comments:</label>
     <select className="lang" name="comments" id="">
      <option value="es">Spanish</option>
      <option value="en" selected>Activated</option>
     </select>
    </div>
   </div>  
   <button className="submit">Submit</button>   
  </div>
</div>
 <div className="resultScreen">
  <div className="resultScreenContent">
   <img src="https://scontent.fscl11-2.fna.fbcdn.net/v/t39.30808-6/326274439_741676943722414_1277584229060021232_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=NV8VahXQnE0AX9F-WD9&tn=Gt7aswZVcFH4kO-i&_nc_ht=scontent.fscl11-2.fna&oh=00_AfC_aAoUvu6PPpce_j3LIQLOP0csCFAZFuGNA_dYIhP7Ag&oe=63CD5F5A" height="100" alt="" />
   <h3 className="screenText">Submit your requirements to get your amazing quizzes!</h3>
  </div>
 </div>
 </div>
 
)
}

export default Index