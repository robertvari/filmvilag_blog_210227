import React, {useState, useEffect} from 'react';
import axios from "axios";

function About(props) {
    const API_URL = process.env.REACT_APP_API_URL
    const [about, set_about] = useState({})

    const fetch = () => {
        axios({
            method: "get",
            url: `${API_URL}/about/`
        })
            .then(res => set_about(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            <h3>{about.title}</h3>
            <small>{about.content}</small>
        </div>
    );
}

export default About;