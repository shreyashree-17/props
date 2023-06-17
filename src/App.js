
import './App.css';
import Joke from './components/jokes';
import NavigationBar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Joke
        number="1" 
        setup="You know why you never see elephants hiding up in trees?"
        punchline="Because they’re really good at it."/>
      <Joke
        number="2" 
        setup="What do you call a parade of rabbits hopping backwards?"  
        punchline="A receding hare-line."/>
      <Joke
        number="3" 
        setup="What do you call bears with no ears?"  
        punchline="B."/>
      <Joke
        number="4" 
        setup="How do you make a tissue dance?"  
        punchline="You put a little boogie in it."/>
      <Joke
        number="5" 
        setup="Why doesn’t the sun go to college?"  
        punchline="Because it has a million degrees!"/>
        <Footer/>
    </div>
  );
}

export default App;
