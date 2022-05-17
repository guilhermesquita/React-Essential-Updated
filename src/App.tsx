import { Tweet } from "./components/Tweet"
import { Counter } from "./components/Counter"
import { useState } from "react";
import { AppRoutes } from "./AppRoutes";

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
    
  <button onClick={createTweet} //Estilização: CSS in JSX
  style={{
    
  backgroundColor:'#8257e6', 
  border: 0,
  color: "white" 


}}
  >Adicionar Tweet</button>

  <AppRoutes />

  </>
  )
}

export default App
