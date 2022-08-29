import { useState, useEffect } from "react"

export default function useFetch({ fmwSelected, pages}){
    const [ dataList, setDataList ] =  useState([])
    const [ isFetching, setFetching ] = useState(true)
    
    useEffect(() => {
        
      fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${fmwSelected}&page=${pages}`)
        .then(res => res.json())
        .then(data => {
          setDataList(data.hits)
          setFetching(false)
        console.log(fmwSelected);
        console.log(pages);
        })
    },[ fmwSelected, pages ])
  
    return [
      dataList,
      isFetching
    ]
}