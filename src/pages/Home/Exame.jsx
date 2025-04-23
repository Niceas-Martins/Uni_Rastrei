import { useRef, useState } from "react";
import "./Style(ExameDoPaciente).css"; 

function Exame() {
    const fileInputRef = useRef(null);
    const [images, setImages] = useState([]);
    const [showButtons, setShowButtons] = useState(false); // Controla visibilidade dos botões
   
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        if (files.length > 0) {
            const imageUrls = files.map(file => URL.createObjectURL(file));
            setImages(imageUrls);
            setShowButtons(true); // Mostra os botões e esconde "Adicionar imagens"
        }
    };

    const handleSend = () => {
        alert("Imagens enviadas com sucesso!");
        setShowButtons(false);
        setImages([]);
    };

    const handleCancel = () => {
        setShowButtons(false);
        setImages([]);
    };

    return (
        <div>
            <div className="Main_Ava">
                <h1 className="Title_Ava">Avaliação de Fundo de Olho</h1>
                {!showButtons && (
                    <button className="Add_Img" onClick={handleButtonClick}>
                        + Adicionar imagens
                    </button>
                )}

                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>
            {showButtons && (
                <div>
                    <div className="image-preview">
                        {images.map((src, index) => (
                            <img key={index} src={src} alt={`Preview ${index}`} className="preview-img" />
                        ))}
                    </div>

                    <div className="button-group">
                        <button className="Send_Img" onClick={handleCancel}>Voltar</button>
                        <button className="Cancel_Img" onClick={handleSend}>Enviar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Exame;
