function LanguageCard(props) {

    //destrutturo l'oggetto
    const {title, description} = props.language; 

    return (
        <div className="language-card">
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
    )
}

export default LanguageCard