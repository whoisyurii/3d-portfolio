import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Find me there:</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              aria-label={socialImg.name}
              loading="lazy"
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Made with ❤️ by Yurii Mashchuk.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
