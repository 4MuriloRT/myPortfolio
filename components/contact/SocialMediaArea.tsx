import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"
import { SocialMediaItem } from "./SocialMediaItem"

export const SocialMediaArea = () => {
    return(
        <div className="flex flex-col justify-center gap-4"> 
            <div className="text-lg text-center font-bold mb-5 lg:text-2xl">
                Minhas redes sociais: 
            </div>
            <SocialMediaItem
                label="LinkedIn"
                Icon={FaLinkedin}
                url="https://www.linkedin.com/in/murilo-rodrigues-taborda-558043276/"
            />
            <SocialMediaItem
                label="Git Hub"
                Icon={FaGithub}
                url="https://github.com/4MuriloRT"
            />
            <SocialMediaItem
                label="Email: murilo.dev46@gmail.com"
                Icon={FaEnvelope}
                url="https://mail.google.com/mail/?view=cm&fs=1&to=murilo.dev46@gmail.com&su=Quero%20saber%20mais%20sobre%20seu%20trabalho&body=Olá,%20gostei%20do%20seu%20portfólio!"
            />
            <SocialMediaItem
                label="Telefone: (38) 9 9885-4375"
                Icon={FaPhone}
                url="https://wa.me/5538998854375?text=Olá%2C%20gostei%20do%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!"
            />
        </div>

    )
}