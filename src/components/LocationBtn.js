function LocationBtn({ onClick }) {
    return(
        <div>
            <button className="Location" onClick={onClick}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[22px]" preserveAspectRatio="none"
                >
                    <line x1="11.5" x2="11.5" y2="6.6" stroke="#073DFF"></line>
                    <line x1="15.3999" y1="11.6" x2="21.9999" y2="11.6" stroke="#073DFF"></line>
                    <line y1="11.6" x2="6.6" y2="11.6" stroke="#073DFF"></line>
                    <line x1="11.5" y1="15.4" x2="11.5" y2="22" stroke="#073DFF"></line>
                    <circle cx="11.55" cy="11.55" r="7.75" stroke="#073DFF"></circle>
                </svg>
            </button>
        </div>
    )
}

export default LocationBtn;