import React from "react";


class Computer extends React.Component<any, any> {
    render() {
        return (
            <div className='text-center playerGame'>
                <div className='theThink'>
                    <img className='mt-3' width={100} height={100} src="./gameOanTuXi/bua.png" alt="./gameOanTuXi/bua.png"/>
                </div>
                <div className='speech-bubble'></div>
                <img style={{width: 250, height: 250}} src="./gameOanTuXi/computer.png" alt="./gameOanTuXi/computer.png"/>

            </div>
        );
    }
}

export default Computer;
