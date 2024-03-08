import { Request, Response } from "express";
import { hashPassword } from "../services/password.service";
import prisma from '../models/user';
import { generatToken } from "../services/auth.service";


export const register = async(req: Request, res: Response): Promise<void> =>{

    const {email, password} = req.body;

    try {
        const hashedPassword = await hashPassword(password);
        console.log(hashedPassword)

        const user = await prisma.create(
            {
                data:{
                    email,
                    password: hashedPassword
                }
            }
        )

        const token = generatToken(user);
        res.status(201).json({token})

    } catch (error) {
        //TODO: MEJORAR LOS ERRORES
        console.log(error)
        res.status(500).json({error: 'Hubo un error en el registro'})
    }
}