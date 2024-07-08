import SpeedBtn from './SpeedBtn';
import ConnectorTypeBtn from './ConnectorTypeBtn';

function Filter({ onSpeedChange, onConnectorChange }) {
    return (
        <div style={{position:'fixed', zIndex:'3', top:'89px'}}>
            <SpeedBtn onSpeedChange={onSpeedChange}/>
            <ConnectorTypeBtn onConnectorChange={onConnectorChange}/>
        </div>
    )
}

export default Filter