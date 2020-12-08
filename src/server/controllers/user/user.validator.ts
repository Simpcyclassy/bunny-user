import Joi from '@hapi/joi';
import { JoiValidator } from '@app/data/utils';

export const isUser = Joi.object({
  name: JoiValidator.validateString().required(),
});

export const isID = Joi.object({
  id: JoiValidator.validateID()
});

export const isUserUpdate = Joi.object({
  name: JoiValidator.validateString().required(),
});
