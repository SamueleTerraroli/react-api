const PostCard = (props) => {


    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3">

            <div className="card">
                <img src="" alt="" />
                <div className="card-body">
                    <h5 className="card-title"> Titolo Post </h5>
                    <p className="card-text"></p>
                    <div className="btn btn-danger">
                        Elimina
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard