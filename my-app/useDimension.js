const { useEffect, useState } = require('react');

const useDimension = () =>{
    const [dimension, setDimenson] = useState({width: 0, height: 0});

    const updateDimension = () =>{
        const { innerWidth, innerHeight } = window;
        setDimenson({width: innerHeight, height:innerHeight});
    }
    useEffect(()=>{
        updateDimension();

        window.addEventListener('resize', updateDimension);

        return () => {window.removeEventListener("resize", updateDimension)};
    }, []);

    return dimension;
}

export default useDimension;