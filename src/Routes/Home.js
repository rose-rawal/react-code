export default function Home() {
    const posts=[{
        id:'123',
        title:'Abusing chromium headless as a test runner',
        content:'',
        created_at:'28.06.2020'
    },{
        id:'124',
        title:'Abusing chromium headless as a test runner',
        content:'',
        created_at:'28.06.2020'
    }]
    return (
        <>
            <h1 className="title">Blog</h1>
            <ul className="posts">
                {
                    posts.map(n=>{
                return(        
                <li className="post">
                    <a href="/posts/abusing-chromium-headless-as-a-test-runner/index.html">
                        <date>{n.created_at}</date>
                        <span>{n.title}</span>
                    </a>
                </li>)
                    })
                }



            </ul>
        </>
    )
}