import React, { forwardRef } from 'react';
import DetailModal from './DetailModal';

const Modal = forwardRef(({ isOpen, closeModal, stationId }, ref) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      {isOpen && <DetailModal stationId={stationId} closeModal={closeModal} ref={ref} />}
    </div>
  );
});

export default Modal;
