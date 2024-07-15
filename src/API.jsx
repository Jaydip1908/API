import React, { useEffect, useState } from 'react';
import axios from 'axios';

function API() {
    const [data, setData] = useState([]);
    const [err, setErr] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error.message);
                setErr(error.message);
            });
    }, []);

    return (
        <>
            {err ? <p>{err}</p> : null}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        const { id, title, body } = item;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{body}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default API;
