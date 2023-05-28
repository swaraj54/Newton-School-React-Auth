import React, { useEffect, useState } from 'react'

const Loader = () => {
    const [showData, setShowData] = useState(false);
    // const [data, setData] = useState()
    useEffect(() => {
        setTimeout(() => {
            setShowData(true);
        }, 5000)
        // async function getData(){
        //     const response = await axios.get('/get-data'); // 1000 - 10000
        //     if(response){
        //         setData(response);
        //         setShowData(true);
        //     }
        // }
        // getData();
    }, [])
    return (
        <div>
            {showData ? <h1>Got the data</h1> : <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' />}

        </div>
    )
}

export default Loader