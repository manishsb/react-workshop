import React from 'react';
import './line.css'
export default class Line extends React.Component{
    render() {
        return (
            <div className="object">
                <p>{this.props.id}</p>
                <p>{this.props.title}</p>
                <p>{this.props.userId}</p>
                <p>{this.props.completed}</p>
            </div>
        )
    }
}
// export default function Line() {
//     return (
//         <p>
//             First React App
//         </p>
//     )
// }
