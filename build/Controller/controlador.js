import express from 'express';
const router = express.Router();
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const inicio = async (_req, res, next) => {
    res.render('inicio');
};
