import { Tweet } from "./components/tweet"
import { Counter } from "./components/counter"
import { useState } from "react";

function App() {

      //Criando um estado (para maior esclarecimento use o arquivo COUNTER.TSX)
      const [tweet, setTweets] = useState<string[]>([
        'tweet 01',
        'tweet 02',
        'tweet 03',
        'tweet 04',
    ]) 


    function createTweet(){
      setTweets([...tweet, 'tweet 05'])
    }

  return (
  <>

  <Tweet text = "Tweet 1"/>
  <Tweet text = "Tweet 2"/>
  <Tweet num= {2}/>

  {tweet.map(tweet => {
    return <Tweet text = {tweet}/>
  })}
 


  <Counter />

      
  <button onClick={createTweet}>Adicionar Tweet</button>

  </>
  )
}

export default App
