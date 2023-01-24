import { Response, Request } from "express";

//services
import { createUser } from "../services";

const createUserController = (req: Request, res: Response) => {
    const newUser = createUser();
    res.json({
        newUser,
    });
};

export { createUserController };