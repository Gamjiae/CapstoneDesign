import React, { useState, useEffect, useRef, useCallback } from 'react';
import charge_7 from '../images/charge_7.png';
import charge_50 from '../images/charge_50.png';
import charge_100 from '../images/charge_100.png';
import charge_200 from '../images/charge_200.png';
import charge_300 from '../images/charge_300+.png';
import buttonImg from '../images/buttonImg.png';

function SpeedBtn({ onSpeedChange }) {
    const [showSpeedOptions, setShowSpeedOptions] = useState(false);
    const [selectedSpeeds, setSelectedSpeeds] = useState([]);
    const containerRef = useRef(null);
    const buttonRef = useRef(null);

    const handleSpeedButtonClick = () => {
        setShowSpeedOptions(prevState => !prevState);
    };

    const handleSpeedOptionClick = (speed) => {
        setSelectedSpeeds(prevSpeeds => {
            if (prevSpeeds.includes(speed)) {
                return prevSpeeds.filter(s => s !== speed);
            } else {
                return [...prevSpeeds, speed];
            }
        });
    };

    const handleSubmit = () => {
        onSpeedChange(selectedSpeeds);
    };

    const handleClickOutside = useCallback((event) => {
        if (showSpeedOptions && containerRef.current && buttonRef.current &&
            !containerRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
            setShowSpeedOptions(false);
        }
    }, [showSpeedOptions]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [handleClickOutside]);

    return (
        <div>
            <button ref={buttonRef} onClick={handleSpeedButtonClick} className="Button" style={{position:'fixed', left:'20px', backgroundImage: `url(${buttonImg})`, backgroundPosition: '60px 12px'}}>충전속도</button>

            {showSpeedOptions && (
                <div ref={containerRef} className='option-container'>
                    <p style={{ fontSize: '22px', paddingLeft: '20px'}}>충전속도를 선택하세요</p>
                    <div>
                        <button className={`speed-button${selectedSpeeds.includes(7) ? ' selected' : ''}`} onClick={() => handleSpeedOptionClick(7)} style={{ backgroundImage: `url(${charge_7})`, marginLeft: '5px' }} />
                        <button className={`speed-button${selectedSpeeds.includes(50) ? ' selected' : ''}`} onClick={() => handleSpeedOptionClick(50)} style={{ backgroundImage: `url(${charge_50})` }} />
                        <button className={`speed-button${selectedSpeeds.includes(100) ? ' selected' : ''}`} onClick={() => handleSpeedOptionClick(100)} style={{ backgroundImage: `url(${charge_100})` }} />
                        <button className={`speed-button${selectedSpeeds.includes(200) ? ' selected' : ''}`} onClick={() => handleSpeedOptionClick(200)} style={{ backgroundImage: `url(${charge_200})` }} />
                        <button className={`speed-button${selectedSpeeds.includes("300+") ? ' selected' : ''}`} onClick={() => handleSpeedOptionClick("300+")} style={{ backgroundImage: `url(${charge_300})` }} />
                    </div>
                    <button className='apply-button' onClick={handleSubmit}><h2>적용하기</h2></button>
                </div>
            )}
        </div>
    );
}

export default SpeedBtn;
