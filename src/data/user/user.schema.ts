import { SchemaFactory } from "../database";
import { trimmedString } from "../utils/schema";

export const UserSchema = SchemaFactory({
  name: { ...trimmedString, required: true, index: true },
});
