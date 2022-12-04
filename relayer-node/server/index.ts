import "dotenv/config";
import http from "http";
import app from "./app";

const port = process.env.PORT || "3000";
let server;
const init = async () => {
  /**
   * Get port from environment and store in Express.
   */
  app.set("port", port);
  server = http.createServer(app);
  (async () => {
    try {
      server.listen(port);
    } catch (error) {
      console.log(error);
    }
  })();
};

init();
