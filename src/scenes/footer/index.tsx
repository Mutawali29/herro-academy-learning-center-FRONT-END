import heroLogo from "@/assets/heroAcademy2.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 flex flex-col justify-between">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={heroLogo} />
          <p className="my-5">
            Join Hero Academy and embark on a journey of academic excellence.
            Let us help you achieve your dreams and reach new heights in your educational journey.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a href="#" target="_blank" rel="noopener noreferrer" className="my-5 block text-blue-500 hover:underline">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="my-5 block text-blue-500 hover:underline">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="block text-blue-500 hover:underline">
            LinkedIn
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">heroacademy@gmail.com</p>
          <p>(035)285-1982</p>
        </div>
      </div>
      <div className="mt-20 text-center w-full">
        <p>Qusay Mutawali© All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FaInstagram size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
