
import languages from "../../languages";
import LanguageCard from "./LanguageCard";

const LanguageList = () => {
    
  // stato: linguaggio selezionato
  //const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <>
      {/* bottoni */}
      <div className="buttons-row">
        {languages.map((language) => (
          <button
            key={language.id}
            className="btn-lang"
          >
            {language.title}
          </button>
          
        ))}
      </div>

      {/* card */}
      <div className="language-list">
        {languages.map((language) => (
      <LanguageCard key={language.id}
      language={language}
      />
        ))}
    </div>
     </>
  
  );
};


export default LanguageList;
