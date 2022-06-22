import { async } from '@firebase/util';
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
} from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore as db } from '../firebase';
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const PostCols = collection(db, 'Posts');
    const PostSnap = onSnapshot(PostCols, (Posts) => {
      const PostList = Posts.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      console.log(PostList);
      setPosts(PostList);
    });
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Bhargav</div>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}
export default Home;
