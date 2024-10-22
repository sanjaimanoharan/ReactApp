import React from "react";
 class Apple extends React.Component {
    render() {
        const {appleInfo} = this.props;
        const {model, color, price} = appleInfo;
        return (
            <div>
                <h1>Iphone</h1>
                <p>This is a {model} color variant {color} which price around {price}.</p>
            </div>
        );
    }
 }

 export default Apple;