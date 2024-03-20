import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();
    const postStyle ={
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '20px',
        marginBottom: '15px',
        backgroundColor: 'aquamarine'
    }

    const handleDetails= () => {
        navigate(`/post/${id}`)
    }


    return (
        <div style={postStyle}>
            <h2>Post of Id:{id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Click Me</button></Link>
            <button onClick={handleDetails}>Show Details</button>
        </div>
    );
};

export default Post;