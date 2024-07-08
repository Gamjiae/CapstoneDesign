function StationDetail({ station, openModal }) {
  return (
    <div className='detail-container'>
      <h3 style={{ fontSize: '20px', wordWrap: 'break-word', marginRight:'40px' }}>{station.name}</h3>
      <div style={{ fontSize: '15px' }}>{station.address}</div>
      <div className="connector-container">
        {station.connectorTypes.map((connector, index) => (
          <div key={index} className="connector-box">
            {connector}
          </div>
        ))}
      </div>
      <button className="open-modal-btn" onClick={openModal}/>
    </div>
  );
}

export default StationDetail;