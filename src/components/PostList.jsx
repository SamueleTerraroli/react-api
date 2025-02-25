import PostCard from "./PostCard";
import axios from "axios";
import { useEffect, useState } from 'react';

const PostList = () => {

    const initialFormData = {
        title: '',
        image: '',
        content: ''
    }

    const baseApiUrl = 'http://localhost:3001';

    const [posts, setPosts] = useState([])
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const fetchPosts = () => {
        axios.get(`${baseApiUrl}/posts`)
            .then(res => {
                setPosts(res.data)
            })
            .catch(error => {
                console.error('Errore durante il caricamento dei post')
            })
    }

    const handleDeletePost = (id) => {
        axios.delete(`${baseApiUrl}/posts/${id}`)
            .then(res => {
                fetchPosts()
            })
            .catch(error => {
                console.error('Errore', error)
            })
    }

    const handleAddPost = (e) => {
        e.preventDefault();

        const newPost = { ...formData }

        axios.post(`${baseApiUrl}/posts`, newPost)
            .then(res => {
                console.log(res.data)
                setPosts((prevPosts) => [...prevPosts, res.data])
                setFormData(initialFormData)
            })

    }



    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <>
            <div className="container my-5">
                <h1 className="text-center">I miei Post</h1>
                <div className="row">
                    {posts.map(post => (
                        <PostCard
                            key={post.id}
                            post={post}
                            onDelete={() => handleDeletePost(post.id)}
                        />

                    ))}

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
                                    value={formData.image}
                                    onChange={handleInputChange}

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
                                    value={formData.title}
                                    onChange={handleInputChange}

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
                                    value={formData.content}
                                    onChange={handleInputChange}

                                />
                            </div>
                            <div className="m-3">
                                <button className="btn btn-primary" type="submit" onClick={handleAddPost}>
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