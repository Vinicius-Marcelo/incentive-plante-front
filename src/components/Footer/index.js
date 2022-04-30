import * as F from "./styles";
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <F.Container>
      <F.SocialMidias>
        <a
          className="social_icon"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          className="social_icon"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          className="social_icon"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          className="social_icon"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube />
        </a>
        <a
          className="social_icon"
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </F.SocialMidias>
      <F.Copyright>
        <p>2022</p>
        <FaRegCopyright />
      </F.Copyright>
    </F.Container>
  );
}
