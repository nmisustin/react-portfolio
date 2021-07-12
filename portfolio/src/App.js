import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  const [currentCategory, setCurrentCategory] = useState('about')
  const [contactSelected, setContactSelected] = useState(false)
  function render(category){
    if(category==='about'){
      return <About></About>
    }
    else if(category==='my-work'){
      return <Work></Work>
    }
    else if(category==='contact'){
      return<Contact></Contact>
    }
  }
  return (
    <div className="App bg-dark">
      <Header
        setContactSelected={setContactSelected}
        setCurrentCategory={setCurrentCategory}
      ></Header>
      <main className="mb-5">
        {render(currentCategory)}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
