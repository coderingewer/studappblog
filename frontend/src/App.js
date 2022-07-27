import logo from './logo.svg';
import './App.css';
import Navi from './bars/Navi';
import { Container } from 'react-bootstrap';
import PostList from './posts/PostList';
import ListOfBestPosts from './carousel/ListOfBestPosts';
import Dashboard from './layouts/Dashboard';
import Explore from './layouts/Explore';
import Popular from './posts/Popular';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Popular/>
      <Container>
          <Navi />     
          <Container>
          <Explore/>
          <PostList />
            </Container>    
         

  
      </Container>
    </div>
  );
}

export default App;
