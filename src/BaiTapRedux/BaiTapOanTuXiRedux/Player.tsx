import React from "react";


class Player extends React.Component<any, any> {
    render() {
        return (
            <div className='text-center playerGame'>
                <div className='theThink'>
                    <img style={{transform: 'rotate(120deg)'}} className='mt-3' width={100} height={100} src="./gameOanTuXi/bua.png" alt="./gameOanTuXi/bua.png"/>
                </div>
                <div className='speech-bubble'></div>
                <img style={{width: 250, height: 250}} src="./gameOanTuXi/player.png" alt="./gameOanTuXi/player.png"/>

                <div className='row'>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img width={50} height={50} src="./gameOanTuXi/bao.png" alt="./gameOanTuXi/bao.png"/>
                        </button>
                    </div>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img width={50} height={50} src="./gameOanTuXi/bua.png" alt="./gameOanTuXi/bao.png"/>
                        </button>
                    </div>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img width={50} height={50} src="./gameOanTuXi/keo.png" alt="./gameOanTuXi/bao.png"/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;
