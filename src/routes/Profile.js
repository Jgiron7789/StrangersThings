import { useOutletContext } from "react-router-dom";
import jwt_decode from 'jwt-decode';
const Profile = () => {
    // const [messages, setMessages] = useState([]);
    const [token] = useOutletContext();
    const {username} = jwt_decode(token);
    // console.log(decoded);
    return (
        <h1>Welcome {username}!</h1>
);
}
export default Profile;