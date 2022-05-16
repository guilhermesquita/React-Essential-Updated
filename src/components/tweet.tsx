//DEFININDO AS PROPS

type TweetProps = {
    text?: string;
    num?: number;
}

export function Tweet(props: TweetProps){ //Definindo a props
    return(
        <>
        <p>{props.text}</p>  
        <p>{props.num}</p>   
        </>
    )
}