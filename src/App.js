import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoadBlogs from './components/Loadblogs/LoadBlogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LoadBlogs></LoadBlogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
