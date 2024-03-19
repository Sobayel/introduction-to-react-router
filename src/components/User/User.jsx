import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone, username, website} = user;
    const userStyle ={
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '20px',
        marginBottom: '15px',
        backgroundColor: 'aqua'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Username: {username}</p>
            <p>Website: {website}</p>
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
        </div>
    );
};

export default User;