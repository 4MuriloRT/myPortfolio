import { FaWhatsapp } from "react-icons/fa";
import { DefaultButton } from "../default/DefaultButton";

export const MessageArea = () => {
    const handleSendMessage = () =>{
        const phoneNumber = '5538998854375';
        const message = "Olá, achei seu portfólio muito interessante e quero saber mais detalhes."
        
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
    };

    return(
        <div>
            <div className="text-center md:text-left">
                <div className="text-2xl font-bold lg:text-3xl">
                    Gostou do meu portfólio ? 
                </div>
                <div className="text-muted-foreground mt-2 lg:text-lg"> 
                    Mande uma mensagem e vamos trabalhar juntos !
                </div>
                <div className="mt-10">
                    <DefaultButton
                        label="Enviar mensagem"
                        onClick={handleSendMessage}
                        Icon={FaWhatsapp}
                    />
                </div>
            </div>
        </div>
    );
};