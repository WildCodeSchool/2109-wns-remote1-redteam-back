import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 5000;

export const db_port = process.env.DB_PORT || 'MON URL DE DB';
