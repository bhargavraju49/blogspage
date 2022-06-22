import {Routes, Route} from 'react-router-dom' 
import {Home, PostDetail, CreatePost, Navbar} from './';

function App() {
  return (
    <div className="container"> 
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}  />
        <Route exact path='/post/:postId' element={<PostDetail />} />
        <Route exact path='/creat-post' element={<CreatePost />}  />
      </Routes>
    </div>
  );
}

export default App;
