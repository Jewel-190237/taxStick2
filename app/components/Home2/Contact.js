import ContactCard2 from "@/app/card/Home2/ContactCard2";

const bgColor = 'bg-white'
const textColor = 'text-[#5D666F]'
const inputBg = 'bg-white'

const Contact = () => {
    
    return (
        <div className='-mt-[650px]'>
            <ContactCard2 bgColor={bgColor} inputBg={inputBg} textColor={textColor} />
        </div>
    );
};

export default Contact;
