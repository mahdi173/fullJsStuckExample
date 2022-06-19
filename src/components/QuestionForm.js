import { useState } from 'react'


function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}



function QuestionForm (){
	const [inputValue, setInputValue] = useState("Posez votre question ici")
	const isInputError = inputValue.includes('f') 
	    
	    function checkValue(value) {
		    if (!value.includes('f')) {
		        setInputValue(value)
		    }
	    }
     // {(e) => setInputValue(e.target.value)}
   return (
   	  <form onSubmit={handleSubmit}>
            <textarea value={inputValue} onChange={(e) => checkValue(e.target.value)} /> <br/>
            {isInputError && (
			    <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
			)} <br/	>
		    <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>

	  </form>

   	)
}


export default QuestionForm
