import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 5000;

export const DB_PORT_URL = process.env.DB_PORT || 'MON URL DE DB';

export const JWT_SECRET = process.env.JWT_SECRET || "";
