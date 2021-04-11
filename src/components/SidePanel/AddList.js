import React, {useState, useEffect} from 'react';
import axios from "axios";

function AddCard(props){
    const {image, url} = props.data

    return(
        <div>
            <a href={url}>
                <img src={image} alt="" style={{width:"100%"}}/>
            </a>
        </div>
    )
}

function AddList(props) {
    const API_URL = process.env.REACT_APP_API_URL
    const [add_list, set_add_list] = useState([])

    const fetch = () => {
        axios({
            method: "get",
            url: `${API_URL}/adds/`
        })
            .then(res => set_add_list(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch()
    }, [])


    return (
        <div>
            {
                add_list.map(add_data => <AddCard key={add_data.id} data={add_data}/>)
            }
        </div>
    );
}

export default AddList;