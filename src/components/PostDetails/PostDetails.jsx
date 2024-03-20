import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    const navigate = useNavigate();
    const postStyle ={
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '20px',
        marginBottom: '15px',
        backgroundColor: 'aquamarine'
    }

    const handleGoBack= () =>{
        navigate(-1);
    }



    return (
        <div style={postStyle}>
            <h3>Post Details About:{id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;