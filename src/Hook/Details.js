import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const useDetails=id=>{
    const [inventories, setDetail] = useState({})
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [id])
    return [inventories];
}
export default useDetails;