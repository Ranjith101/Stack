import React , { useEffect , useState} from 'react'
import './tick.css'
import axios from 'axios'


require("es6-promise").polyfill();
require("isomorphic-fetch");

function Tickets() {

        const [data, setData] = useState([]);
        const [q, setQ] = useState("")

        useEffect(() => {
            fetch("http://localhost:4352/tickets")
            .then(response => response.json())
            .then((json) => setData(json));
        } , [])

        const coloumns = data[0] && Object.keys(data[0])

    return (
        <div>
            <h5 align="left">All Tickets</h5>
           <table  cellPadding={10} cellSpacing={100}>
               <thead>
               <tr>
                  <tr>{data[0] && coloumns.map(Tickets=> <th width="100%">{Tickets}</th> )}</tr>
                </tr>
                </thead>
                <tbody>
                    {data.map( row => <tr>
                        {
                            coloumns.map(Tickets => <td>{
                                row[Tickets ]}</td>)
                        }
                    </tr>)}
                    
                </tbody>
           </table>
        </div>
    )
}

export default Tickets
