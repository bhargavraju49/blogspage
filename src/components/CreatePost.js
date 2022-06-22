import { useState } from "react"

function CreatePost () {
    const [title, setTitle] = useState();
    const [subTitle, setsubTitle] = useState();
    const [content, setContent] = useState();
    console.log(title)
    function handleSubmit (e) {
        e.preventDefault()
        console.log('title',title);
        console.log('content',content);
        console.log('subTitle',subTitle);

    }

    return (
        <div className="create-post">
            <h1>
                CreatePost
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Title</label>
                    <input value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                </div>

                <div className="form-field">
                    <label>Sub-Title</label>
                    <input value={subTitle} onChange={(e)=>{setsubTitle(e.target.value)}} />
                </div>

                <div className="form-field">
                    <label>Content</label>
                    <textarea value={content} onChange={(e)=>{setContent(e.target.value)}}  />
                </div>

                <button className="create-post-btn">CreatePost</button>
            </form>
        </div>
    )
}
export default CreatePost