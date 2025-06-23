import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import MessageList from '../components/MessageList'
import { fetchMessages } from "../api";


const HomePage = () => {
    const [hasNextPage, setHasMore] = useState(true)
    const [page, setPage] = useState(1);
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const loadMessages = async () => {
            try{
                const data = await fetchMessages(page);
                setMessages(data.messages || []);
                setHasMore(data.hasNextPage);
            }catch(error){
                console.error('Error fetching messages', error);
            }
        }

        loadMessages();
    }, [page]);

    return(
        <div>
            <h1>Guestbook</h1>
            <p>See what people wrote about us and feel free to leave a message</p>
            <MessageList messages={messages} />
            <button onClick={() => navigate('/leave-message')}>
                Leave a message
            </button>
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
                    Previous
                </button>
                <span style={{ margin: '0 10px' }}>Page {page}</span>
                <button onClick={() => setPage((prev) => prev + 1)}   disabled={!hasNextPage}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default HomePage;