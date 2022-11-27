export default function NewPost() {
    return (
        <>
            <h1 class="title">Create new post
                <br />
                <span class="subtitle"></span>
            </h1>

            <form action="/action_page.php">
                <label for="fname">Post Title</label>
                <input type="text" id="title" name="title" placeholder="Title of the post" />

                <label for="content">Content</label>
                <textarea type="text" id="content" name="content" placeholder=""></textarea>


                <input type="submit" value="Submit" />
            </form>
        </>
    );
}