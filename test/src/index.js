import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit");

// Отправляет событие нативному клиенту
bridge.send("VKWebAppInit", {});

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}

if (bridge.supports("VKWebAppResizeWindow")) {
  bridge.send("VKWebAppResizeWindow", {"width": 630, "height": 800});
}
// Sending event to client
bridge
  .send('VKWebAppGetEmail')
  .then(data => {
    // Обработка события в случае успеха
    console.log(data.email);
  })
  .catch(error => {
    // Обработка события в случае ошибки
  });