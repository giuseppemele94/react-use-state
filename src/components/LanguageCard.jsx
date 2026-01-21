function LanguageCard(props) {

    //destrutturo l'oggetto
    const {title, description} = props.language; 

    return (
        <div>
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
    )
}

export default LanguageCard