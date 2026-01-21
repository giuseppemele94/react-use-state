import { useState } from "react";
import languages from "../../languages";
import LanguageCard from "./LanguageCard";

const LanguageList = () => {
    
  // selectedLanguage : linguaggio attualmente selezionato 
  // setSelectedLanguage : funzione per cambiarlo 
  // languages[0]
  //imposto inizialmente il primo linguaggio dell'array che sarà il primo
  //che verrà visualizzato 
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <>
      {/* bottoni */}
      <div className="buttons-row">
        {languages.map((language) => (
          <button
            key={language.id}
            className="btn-lang"
            //al cluick del pulsante , la funzione setSelectedLanguage 
            //aggiorna lo stato con il linguaggio cliccato 
            onClick={()=> setSelectedLanguage(language)}
          >
            {language.title}
          </button>
          
        ))}
      </div>

      {/* card */}
      <div className="language-list">
      {/*Card che mostra il linguaggio selezionato ,la variabiile
      selectedLanguage viene aggiornata automaticamente da React */}
      <LanguageCard language={selectedLanguage}
      />
       
    </div>
     </>
  
  );
};


export default LanguageList;
