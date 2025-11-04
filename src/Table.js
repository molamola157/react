import { useRef } from 'react'

const Table = () => {
    const button_handler = () => {

    };

    const data = [
        "Bobo",
        "Gowno",
        "Sraka ptaka",
        "pipi",
    ]
    return (<div>
        <div>
            <div>Name: <input type="text"></input></div>
        </div>
        <table>
            <thead>
                <td>No (Lp.) </td>
                <td>Name</td>
                <td>Surname</td>
            </thead>
            <tbody>
            {
                data.map { (element, index) => {
                    return(
                        <tr key={element.id}></tr>
                    )
                }
            };
            };
            </tbody>
        </table>
    </div>
);
};
