import Logger, { createLogger } from "bunyan";
import dotenv from "dotenv";

import { createRequestSerializer, errSerializer, resSerializer } from "@app/data/utils";

dotenv.config();

export const Log: Logger = createLogger({
  name: process.env.SERVICE_NAME,
  serializers: {
    res: resSerializer,
    req: createRequestSerializer("password"),
    err: errSerializer
  }
});
