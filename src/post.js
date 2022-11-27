import localforage from 'localforage';
function set(posts){
    localforage.setItem("posts",posts);
}
function create(post){
    const newPost={
        id:Math.random().toString(36).substr(2),
        title:post.title,
        content: post.content,
        created_at: Date.now()
    }
}
export {
    set ,
    
}