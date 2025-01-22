import PostCard from "./PostCard"

const PostList = () => {
    return (
        <>
            <div className="container my-5">
                <h1 className="text-center">I miei Post</h1>
                <div className="row">
                    <PostCard />

                </div>

            </div>
            <div className="container my-5">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h2 className="text-center">Aggiungi un nuovo post</h2>
                        </div>
                        <form action="">
                            <div className="m-3">
                                <label htmlFor="image"> URL immagine </label>
                                <input
                                    id='image'
                                    type="text"
                                    name="image"
                                    className="form-control"
                                    placeholder="URL immagine"

                                />
                            </div>
                            <div className="m-3">
                                <label htmlFor="title"> Titolo del Post </label>
                                <input
                                    id='title'
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Titolo"

                                />
                            </div>
                            <div className="m-3">
                                <label htmlFor="content"> Contenuto </label>
                                <input
                                    id='content'
                                    type="text"
                                    name="content"
                                    className="form-control"
                                    placeholder="Inserisci il contenuto del Post"

                                />
                            </div>
                            <div className="m-3">
                                <button className="btn btn-primary" type="submit">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostList