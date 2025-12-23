let IS_PROD = true;

const server = IS_PROD
  ? "https://realtime-videocalling-app-zqi7.onrender.com"
  : "http://localhost:8000";

export default server;
