import React, { useContext, useRef, useState } from "react";
import { LanguageContext } from "../hooks/LanguageContextProvider";

import emailjs from "@emailjs/browser";
import "./contact.css";

const Result = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      {language === "eng" ? (
        <div className="result-succeful">
          <p>message send sucesfully!!!</p>
          <p>thank u :) </p>
        </div>
      ) : (
        <div className="result-succeful">
          <p>mensaje enviado con exito!!!</p>
          <p>gracias :)</p>
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s1x1o3l",
        "template_q858v5k",
        form.current,
        "oWuc4H7s-pEX06kYe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div id="contact" className="skills-container">
      <div className="skills-info">
        {language === "eng" ? (
          <p className="section-title">Contact</p>
        ) : (
          <p className="section-title">Contacto</p>
        )}
        <div className="background">
          <div className="contac-container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close" />
                  <div className="screen-header-button maximize" />
                  <div className="screen-header-button minimize" />
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis" />
                  <div className="screen-header-ellipsis" />
                  <div className="screen-header-ellipsis" />
                </div>
              </div>
              <div className="screen-body">
                {language === "eng" ? (
                  <div className="screen-body-item left">
                    <div className="app-title">
                      <span>CONTACT</span>
                      <span>ME</span>
                    </div>
                    <div className="contact-info">
                      <p>Location: Cali Colombia</p>
                      <p>Phone: +57 310 461 5959</p>
                      <p>E-mail: nicoescandonvarela123@gmail.com</p>
                      <p>GitHub: NEV117</p>
                      <p>Linkdein: in/nicolas-escandon/</p>
                    </div>
                    <div className="app-contact">
                      CONTACT INFO : +57 310 461 5959
                    </div>
                  </div>
                ) : (
                  <div className="screen-body-item left">
                    <div className="app-title">
                      <span>CONTACTÁME</span>
                    </div>
                    <div className="contact-info">
                      <p>Ubicación: Cali Colombia</p>
                      <p>Celular: +57 310 461 5959</p>
                      <p>E-mail: nicoescandonvarela123@gmail.com</p>
                      <p>GitHub: NEV117</p>
                      <p>Linkdein: in/nicolas-escandon/</p>
                    </div>
                    <div className="app-contact">
                      INFORMACIÓN DE CONTACTO : +57 310 461 5959
                    </div>
                  </div>
                )}

                <div className="screen-body-item">
                  {language === "eng" ? (
                    <form className="app-form" ref={form} onSubmit={sendEmail}>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="NAME"
                          name="from_name"
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="EMAIL"
                          name="email"
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="CONTACT REASON"
                          name="reazon"
                        />
                      </div>
                      <div className="app-form-group message">
                        <textarea
                          className="app-form-control form-text-area "
                          placeholder="MESSAGE"
                          name="message"
                        />
                      </div>
                      <div className="app-form-group buttons">
                        <button className="app-form-button">CANCEL</button>
                        <button className="app-form-button">SEND</button>
                      </div>

                      <div>{result ? <Result /> : null}</div>
                    </form>
                  ) : (
                    <form className="app-form" ref={form} onSubmit={sendEmail}>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="NOMBRE"
                          name="from_name"
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="EMAIL"
                          name="email"
                          type="email"
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="RAZÓN DE CONTACTO"
                          name="reazon"
                        />
                      </div>
                      <div className="app-form-group message">
                        <textarea
                          className="app-form-control"
                          placeholder="MENSAJE"
                          name="message"
                        />
                      </div>
                      <div className="app-form-group buttons">
                        <button className="app-form-button">CANCELAR</button>
                        <button className="app-form-button">ENVIAR</button>
                      </div>
                      <div>{result && <Result />}</div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
