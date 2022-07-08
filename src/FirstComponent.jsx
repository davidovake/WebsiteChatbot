import React, { useEffect, useState } from 'react'


export const FirstComponent = () => {

    const [count, setCount] = useState(0)

    // count = 3


    useEffect(() => {
        console.log("It's rendering")        
    }, [count])


    // setCount(3)

    const buttonOnClick = () => setCount(count+1) 


    return (

        <div>
            TEST
            <button style={{color: "red", backgroundColor: "blue"}} onClick={buttonOnClick}>
                {count}
            </button>
        </div>
    )
}