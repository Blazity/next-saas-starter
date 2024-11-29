import React, { MouseEventHandler, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";

export default function Modal({ onClose, children, title }: { onClose: () => void, children: React.ReactNode, title: string | null }) {
    
    const handleCloseClick: MouseEventHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onClose();
    };
    
    useEffect(() => {
        const disableScroll = (e: Event) => e.preventDefault();
        window.addEventListener('scroll', disableScroll);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('scroll', disableScroll);
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <ModalOverlay>
            {/* Wrap the whole Modal inside the newly created StyledModalWrapper
            and use the ref */}
            <ModalWrapper>
                <ModalArea className="modal">
                    <ModalHeader>
                        <Button onClick={handleCloseClick}>
                            x
                        </Button>
                    </ModalHeader>
                    {title && <h1>{title}</h1>}
                    <ModalBody>{children}</ModalBody>
                </ModalArea>
            </ModalWrapper>
        </ModalOverlay>
    );
};


const ModalWrapper = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    z-index: 1000;
    position: fixed;
`;

const ModalArea = styled.div`
    background: white;
    max-height: 100vh; /* Taşmayı önlemek için maksimum yüksekliği ayarlayın */
    width: 54rem;
    border-radius: 15px;
    padding: 15px;
    overflow-y: hidden; /* İçerik taşarsa kaydırma çubuğu ekleyin */
`;

const ModalOverlay = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
font-size: 20px;
text-align: center;
    padding-top: 10px;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
`;