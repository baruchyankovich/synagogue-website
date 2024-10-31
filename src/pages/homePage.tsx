import React, { useEffect, useState } from 'react';
const HomePage: React.FC = () => {
    const [time, setTime] = useState<string>('');
    const [notifications, setNotifications] = useState<string[]>([
        'our messages',

    ]);

    useEffect(() => {
        const fetchTime = async () => {
            try {
                const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/telaviv');
                const data = await response.json();
                setTime(data.datetime);
            } catch (error) {
                console.error('Error fetching time:', error);
            }
        };

        fetchTime();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>home page</h1>

            <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
                <h2>message</h2>
                <ul>
                    {notifications.map((notification, index) => (
                        <li key={index}>{notification}</li>
                    ))}
                </ul>
            </div>

            <div style={{ border: '1px solid #ccc', padding: '10px' }}>
                <h2>time now</h2>
                {time ? <p>{new Date(time).toLocaleTimeString()}</p> : <p>טוען...</p>}
            </div>
        </div>
    );
};

export default HomePage;
