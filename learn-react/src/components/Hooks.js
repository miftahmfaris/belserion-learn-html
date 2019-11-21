import React, { useState } from "react";
import axios from "axios";

export default function About() {
    const [count, setCount] = React.useState(0);
    const [buah, setBuah] = useState({
        mangga: "mangga",
        strawberry: "strawbery"
    });
    const [data, setData] = useState([]);

    // const fetchData = () => {
    //     axios.get("https://api.github.com/users/miftahmfaris").then(res => {
    //         setData(res.data);
    //     });
    // };

    React.useEffect(() => {
        axios.get(process.env.REACT_APP_API_GITHUB).then(response => {
            setData(response.data);
        });
        // fetchData();
    }, []);

    return (
        <div>
            <p>This is count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <p>Buah yang aku suka adalah {buah.mangga}</p>
            <button
                onClick={() => {
                    setBuah({ mangga: "mangga hijau" });
                }}
            >
                Ubah buah
            </button>
            {console.log(data)}
        </div>
    );
}
