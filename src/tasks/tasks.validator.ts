import { body, ValidationChain } from 'express-validator';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

export const createValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('Title is required')
    .trim()
    .isString()
    .withMessage('Title must be a string'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('Date is required')
    .isString()
    .withMessage('Date must be a string'),
  body('description')
    .trim()
    .isString()
    .withMessage('Description must be a string'),
  body('priority')
    .trim()
    .isIn([Priority.normal, Priority.high, Priority.low])
    .withMessage('Priority must be a valid value'),
  body('status')
    .trim()
    .isIn([Status.inProgress, Status.todo, Status.completed])
    .withMessage('Status must be a valid value'),
];

export const updateValidator: ValidationChain[] = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('Id is required')
    .trim()
    .isString()
    .withMessage('Id must be a valid uuid format'),
  body('status')
    .trim()
    .isIn([Status.inProgress, Status.todo, Status.completed])
    .withMessage('Status must be a valid value'),
];
