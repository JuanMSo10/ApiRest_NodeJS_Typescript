import bcrypt from 'bcrypt';

const SALT_ROUND: number = 10;

export const hashPassword = async (password: string):Promise<string> =>{
    return await bcrypt.hash(password, SALT_ROUND);
}


//Leer y comparar con el hash de la base de datos