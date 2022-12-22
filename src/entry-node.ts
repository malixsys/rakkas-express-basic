import express from "express";
import { createMiddleware } from "rakkasjs/node-adapter";
import hattipHandler from "./entry-hattip";
import {appModule} from "../server/app.module";

const app = express();

app.use('/', appModule.router)

app.use(createMiddleware(hattipHandler));

export default app;
