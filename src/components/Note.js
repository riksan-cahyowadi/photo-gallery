import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import sticker from '../assets/party-popper-svgrepo-com.png';

const NoteContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 30px;
  background: #ffeb3b;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  color: black;
  align-items: center;
  flex-direction: column;
  animation: slideIn 0.5s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const NoteText = styled.p`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin: 0;
  font-weight: bold;
 font-family: "Caveat", cursive;
`;

const Sticker = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 10px;
`;

const Button = styled.button`
  background: #ff6f61;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  &:hover {
    background: #e65c50;
  }
`;

const Note = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <NoteContainer>
      <NoteText>Ada pesan <br></br> untuk kamu....</NoteText>
      <Sticker src={sticker} alt="Sticker" />
      <Button onClick={openModal}>Klik aku </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Pesan untuk kamu yang terspesial~~</h2>
        <p>
        Happy Girlfriend Day, sayangku! Di hari yang istimewa ini, aku ingin kamu tahu betapa bersyukurnya aku memiliki kamu di hidupku. Setiap senyumanmu adalah sinar matahari yang menerangi hariku, dan setiap pelukanmu adalah rumah yang paling nyaman untuk hatiku. Aku mencintaimu lebih dari kata-kata yang bisa menggambarkan, dan aku akan selalu berusaha untuk membuatmu bahagia. Terima kasih telah menjadi pacar yang luar biasa. 💖        </p>
      </Modal>
    </NoteContainer>
  );
};

export default Note;
