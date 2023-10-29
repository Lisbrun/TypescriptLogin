import mysql, { Connection } from 'mysql2/promise'
import bycript from 'bcryptjs'
import { RowDataPacket } from 'mysql2'
interface userData {
  email: string
  password: string
  cedula: number
}
const DEFAULT_CONFIG = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'logindb'
}

const connect = async (): Promise<Connection> => {
  try {
    const connection = await mysql.createConnection(DEFAULT_CONFIG)
    return connection
  } catch (error) {
    throw new Error(' Error al conectar a la base de datos')
  }
}

export const createUser = async (
  userData: userData
): Promise<RowDataPacket[][] | undefined> => {
  const { email, password, cedula } = userData
  const passwordHash = await bycript.hash(password, 10)
  const connection = await connect()
  if (connection != null) {
    const sql: string = 'INSERT INTO users values(?,?,?)'
    try {
      const [rows] = await connection.query<RowDataPacket[][]>(sql, [
        email,
        passwordHash,
        cedula
      ])
      return rows
    } catch (e) {
      throw new Error('Error al crear usuario')
    }
  }
}
