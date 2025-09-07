function openModal(setIsModalOpen) {
    setIsModalOpen(true);
}

function closeModal(setIsModalOpen) {
    setIsModalOpen(false);
}

function alertCloseModal(setIsModalOpen) {
    alert('Ok')
    setIsModalOpen(false);
}

export {openModal, closeModal, alertCloseModal};