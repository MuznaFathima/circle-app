import  { useState } from "react";
import style from "./Contact.module.css";
import floatingImg from "../assets/basil-leaf.png";
import { FaPhone } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import logoImg from "../assets/logo_leaf.png";
import { FaSortDown } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import { FAQ } from "../Data/data";
const Contact = () => {
  const [faqIndex, setFaqIndex] = useState({});
  const handleToggle = (index) => {
    setFaqIndex((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className={style.About}>
      <div className={style.header}>
        <p>Get In Touch</p>
      </div>
      <div className={style.questions}>
        <div className={style.topContainer}>
          <div className={style.floatingContainer}>
            <div className={style.logoImage}>
              <img src={floatingImg} alt="image" />
            </div>
            <div className={style.contacts}>
              <div className={style.phone}>
                <div className={style.icons}>
                  <FaPhone />
                </div>
                <div className={style.contactText}>
                  <p>
                    +123 456 7890 <br />
                    +123 456 7890
                  </p>
                </div>
              </div>
              <div className={style.emails}>
                <div className={style.icons}>
                  <FaRegEnvelope />
                </div>
                <div className={style.contactText}>
                  <p>
                    info@example.com
                    <br />
                    support@example.com
                  </p>
                </div>
              </div>
              <div className={style.places}>
                <div className={style.icons}>
                  <FaMapMarkerAlt />
                </div>
                <div className={style.contactText}>
                  <p>
                    1569 Ave, New York,
                    <br />
                    NY 10028, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.questionBox}>
            <div className={style.title}>
              <p>Frequently Asked Question!</p>
            </div>
            <div className={style.logoLeaf}>
              <img src={logoImg} alt="image" />
            </div>
            <div className={style.Faq}>
              {FAQ &&
                FAQ.map((item, index) => (
                  <div className={style.FaqBox} key={index}>
                    <div
                      className={style.FaqQs}
                      onClick={() => handleToggle(index)}
                    >
                      <span>{item.question}</span>
                      {faqIndex[index] ? <FaSortUp /> : <FaSortDown />}
                    </div>
                    <div
                      className={`${style.FaqAnswer} ${
                        faqIndex[index] ? style.answer : ""
                      }`}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
