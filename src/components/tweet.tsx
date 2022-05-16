type TweetProps = {
    text?: string;
}

export function Tweet(props: TweetProps){ //Definindo a props
    return(
        <p>{props.text}</p>
    )
}