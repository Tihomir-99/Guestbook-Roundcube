const API_URL = 'http://localhost:3001/api';

export async function fetchMessages(page=1) {

    try{
        const response = await fetch(`${API_URL}/messages?page=${page}`);
        if (!response.ok)
            throw new Error('Failed to fetch messages!')
        return await response.json();
    } catch(error){
        console.error('Error fetching messages', error);
        return { messages : [] };
    }
    
}

export async function postMessage(name, message) {
  try {
    const response = await fetch(`${API_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message }),
    });
    return response.ok;
  } catch (error) {
    console.error('Error posting message:', error);
    return false;
  }
}
