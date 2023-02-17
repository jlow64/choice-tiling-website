import Image from 'next/image';
import { ContactBody, ContactTitle, ContactDescription } from './Contact.theme';
import { MdOutlineEmail, MdPhone } from 'react-icons/md';

const Contact = () => {
  return (
    <ContactBody>
      <ContactTitle>Contact us</ContactTitle>
      <ContactDescription>
        <MdOutlineEmail size={'1.2rem'} />
        Main@choicetiling.co.nz
        <MdPhone size={'1.2rem'} />
        Call us: 0274988483
      </ContactDescription>
    </ContactBody>
  );
};

export default Contact;
