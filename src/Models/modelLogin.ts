import mysql, { Connection } from 'mysql2/promise'
import bycript, { compare } from 'bcryptjs'
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

export const loginUser = async (userData: userData): Promise<boolean | undefined> => {
  const { email, password } = userData
  const connection = await connect()
  if (connection !== null) {
    const sql: string = 'select * from users where email = ?'
    const [rows] = await connection.query<RowDataPacket[]>(sql, [email])
    if (rows.length === 0) {
      throw new Error('Error al logearse')
    }
    const user = rows[0]
    const passwordBD = user.password
    const resultLogin = await compare(password, passwordBD)
    if (resultLogin) {
      return await Promise.resolve(true)
    } else {
      return await Promise.resolve(false)
    }
  }
}
