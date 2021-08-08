import loadData from "../funcionalitys/loadData"
export default function ({data, setData}){
    return(
        <>
        <button onClick={()=>loadData((data[0].info.prev), setData, data)}>prev</button>
        <button onClick={()=>loadData((data[0].info.next), setData, data)}>next</button>
        </>
    )
}