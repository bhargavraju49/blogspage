import { collection, addDoc } from 'firebase/firestore/lite';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { firestore as db } from '../firebase';
import { useFormInput } from '../hooks';

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('title', title);
    console.log('content', content);
    console.log('subTitle', subTitle);
    const data = {
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
      createdAt: new Date(),
    };
    // firebase in-build functions to add a new doc with random doc name {docRef.id}
    const docRef = await addDoc(collection(db, 'Posts'), {
      data,
    });
  }

  return (
    <div className="create-post">
      <h1>CreatePost</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub-Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content} />
        </div>

        <button className="create-post-btn">CreatePost</button>
      </form>
    </div>
  );
}
export default CreatePost;
