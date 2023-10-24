import React, { useState, useRef, useEffect } from "react";
import "./styles/ChatBot.css";
import operador1 from "./assets/operador1.png";
import operador2 from "./assets/operador2.png";
import operador3 from "./assets/operador3.png";

function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const botImages = [
    { name: "Diego", image: operador1 },
    { name: "Clarissa", image: operador2 },
    { name: "Carlos", image: operador3 },
  ];
  const phoneNumber = "543465650158";
  const getBotImage = () => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
      return botImages[0]; // ChatOperador1
    } else if (hour >= 12 && hour < 18) {
      return botImages[1]; // ChatOperador2
    } else {
      return botImages[2]; // ChatOperador3
    }
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const shareOnWhatsApp = () => {
    const message = "Hola, quiero saber más de uno de los producto.";

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // Dispositivo móvil
      window.open(
        `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    } else {
      // Computadora de escritorio
      window.open(
        `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const newUserMessage = { text: inputText, isUser: true };
      setMessages([...messages, newUserMessage]);
      setInputText("");
      setIsLoading(true);
      setIsTyping(true);

      setTimeout(() => {
        const divResponse = (
          <div style={{ backgroundColor: "#eee", padding: "10px" }}>
            <p style={{ color: "#333 " }}>
              Hola, ¿cómo estás? Bienvenido. ¡Encantado de ayudarte!
            </p>
            <p style={{ color: "#222" }}>
              Responde con una de las siguientes opciones:
            </p>
            <ul>
              <li>Navegar</li>
              <li>Redes</li>
              <li>Whatsapp</li>
            </ul>
          </div>
        );

        let botResponse = "";

        if (messages.length === 0) {
          botResponse = divResponse;
        } else {
          if (inputText.toLowerCase().includes("navegar")) {
            botResponse = (
              <>
                <div className="div-respuesta-bot">
                  Mira estos enlaces para ver si te sirven:
                  <ul>
                    <li>
                      <a href="/productos">Productos</a>
                    </li>
                    <li>
                      <a href="/servicios">Servicios</a>
                    </li>
                    <li>
                      <a href="/contactanos">Contacto</a>
                    </li>
                  </ul>
                </div>
                <div style={{ backgroundColor: "#eee", padding: "10px" }}>
                  <p style={{ color: "#333" }}>O responde:</p>
                  <ul>
                    <li>Navegar</li>
                    <li>Redes</li>
                    <li>Whatsapp</li>
                  </ul>
                </div>
              </>
            );
          } else if (inputText.toLowerCase().includes("redes")) {
            botResponse = (
              <>
                <div className="div-respuesta-bot">
                  Síguenos en nuestras redes sociales:
                  <ul className="div-respuesta-bot-link">
                    <li>
                      <a href="https://m.facebook.com/">Facebook</a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com">Instagram</a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">YouTube</a>
                    </li>
                  </ul>
                </div>
                <div style={{ backgroundColor: "#eee", padding: "10px" }}>
                  <p style={{ color: "#333" }}> O responde:</p>
                  <ul>
                    <li>Navegar</li>
                    <li>Redes</li>
                    <li>Whatsapp</li>
                  </ul>
                </div>
              </>
            );
          } else if (inputText.toLowerCase().includes("whatsapp")) {
            botResponse = (
              <div className="div-whatsapp">
                <a
                  className="whatsapp"
                  href="#"
                  onClick={shareOnWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Haz clic aquí para enviar un mensaje de WhatsApp
                </a>
              </div>
            );
          } else {
            botResponse =
              "Para una mejor atención, responde: navegar, redes, Whatsapp";
          }
        }

        const newBotMessage = { text: botResponse, isUser: false };
        setMessages([...messages, newBotMessage]);
        setIsTyping(false);
      }, 2000);

      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const currentBotData = getBotImage();
  const currentBotName = currentBotData.name;
  const currentBotImage = currentBotData.image;

  return (
    <div className={`chatbot ${showChat ? "active" : ""}`}>
      <div className="chatbot-toggle" onClick={toggleChat}>
        <img src={currentBotImage} alt={currentBotName} />
      </div>
      <div className="chatbot-container">
        <div className="chatbot-header">
          <span>Escribe a {currentBotName}</span>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.isUser ? "user-message" : "bot-message"
              }`}
            >
              {message.text}
            </div>
          ))}
          {isTyping && (
            <div className="message bot-message">
              <p>{currentBotName} está escribiendo...</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading}
            className={isLoading ? "jump-animation" : ""}
            style={{
              backgroundColor: isLoading ? "#658ddd" : "#007bff",
              color: isLoading ? "#eddeee" : "white",
              fontWeight: "bold",
            }}
          >
            {isLoading ? "Contestando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
