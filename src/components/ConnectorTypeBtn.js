import { useState, useEffect, useRef } from 'react';
import buttonImg from '../images/buttonImg.png';

function ConnectorTypeBtn({ className, onConnectorChange }) {
    const [showConnectorOptions, setShowConnectorOptions] = useState(false);
    const [selectedConnectors, setSelectedConnectors] = useState([]);
    const containerRef = useRef(null);
    const buttonRef = useRef(null);

    const handleConnectorBtnClick = () => {
        setShowConnectorOptions(prevState => !prevState);
    };

    const handleConnectorOptionClick = (type) => {
        setSelectedConnectors(prevTypes => {
            if (prevTypes.includes(type)) {
                return prevTypes.filter(t => t !== type);
            } else {
                return [...prevTypes, type];
            }
        });
    };

    const handleSubmit = () => {
        if (typeof onConnectorChange === 'function') {
            onConnectorChange(selectedConnectors);
            console.log('선택된 타입: ' + selectedConnectors);
        } else {
            console.error('onConnectorChange는 함수가 아닙니다');
        }
    };

    // 화면 밖 클릭 시 화면 숨기기
    const handleClickOutside = (event) => {
        if (showConnectorOptions && containerRef.current && buttonRef.current &&
            !containerRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
            setShowConnectorOptions(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [showConnectorOptions]);

    return (
        <div>
            <button ref={buttonRef} style={{position:'fixed', left:'120px', width:'100px', backgroundImage: `url(${buttonImg})`, backgroundPosition: '83px 12px'}} onClick={handleConnectorBtnClick} className={`Button ${className}`}>커넥터 타입</button>

            {showConnectorOptions && (
                <div ref={containerRef} className='option-container'>
                    <p style={{ fontSize: '22px', paddingLeft: '20px'}}>커넥터 타입을 선택하세요</p>
                    <div className="option-row">
                        <button className={`type-button${selectedConnectors.includes('차데모') ? ' selected' : ''}`} onClick={() => handleConnectorOptionClick('차데모')}>차데모</button>
                        <button className={`type-button${selectedConnectors.includes('이동형') ? ' selected' : ''}`} onClick={() => handleConnectorOptionClick('이동형')}>이동형</button>
                        <button className={`type-button${selectedConnectors.includes('AC3상') ? ' selected' : ''}`} onClick={() => handleConnectorOptionClick('AC3상')}>AC3상</button>
                        <button className={`type-button${selectedConnectors.includes('DC콤보') ? ' selected' : ''}`} onClick={() => handleConnectorOptionClick('DC콤보')}>DC콤보</button>
                        <button className={`type-button${selectedConnectors.includes('완속') ? ' selected' : ''}`} onClick={() => handleConnectorOptionClick('완속')}>완속</button>
                        <button className={`type-button${selectedConnectors.includes('H2') ? ' selected' : ''}`} onClick={() => handleConnectorOptionClick('H2')}>H2</button>
                    </div>
                    <button className='apply-button' onClick={handleSubmit}><h2>적용하기</h2></button>
                </div>
            )}
        </div>
    );
}

export default ConnectorTypeBtn;
