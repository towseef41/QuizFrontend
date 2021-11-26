import React, { useState, useEffect }  from 'react';


const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [task, setTask] = useState([]);    useEffect(() => {
        fetch("http://localhost:8000/generateRandomTask/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setTask(data);
                    console.log(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, []);
      
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <h1>{task['description']}</h1>
        );
    }
};

export default Home;
