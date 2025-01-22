const PostCard = (props) => {
    const { title, content, image } = props.post;
    const onDelete = props.onDelete;


    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3">

            <div className="card">
                <img src={image} alt={title} />
                <div className="card-body">
                    <h5 className="card-title"> {title} </h5>
                    <p className="card-text">{content}</p>
                    <div className="btn btn-danger" onClick={onDelete}>
                        Elimina
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard