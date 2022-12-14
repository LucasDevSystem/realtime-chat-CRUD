import { CreateMessagesController } from "./controllers/CreateMessagesController";
import { DeleteMessageController } from "./controllers/DeleteMessageController";
import { getInboxController } from "./controllers/GetInboxController";
import { GetMessagesController } from "./controllers/GetMessagesController";
const express = require("express");
const routes = express.Router();

routes.get("/inbox", new getInboxController().handle);
routes.post("/message", new CreateMessagesController().handle);
routes.get("/message", new GetMessagesController().handle);
routes.delete("/message", new DeleteMessageController().handle);

export { routes };
