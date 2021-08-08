const loadData = (url, setData, data)=>{
    fetch(url)
    .then(res=>res.json())
    .then(json=>setData([json]))
}
export default loadData