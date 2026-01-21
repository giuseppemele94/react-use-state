import languages from "../../languages"
import LanguageCard from "./LanguageCard"

const LanguageList = () => {

    const renderLanguageCard = () => {
        return languages.map((language) => (
            <LanguageCard key={language.id}
            language={language}/>
        ))
    }

    return (
        <div className="language-list">
            {renderLanguageCard()}
        </div>
    )

}

console.log(LanguageList); 

export default LanguageList