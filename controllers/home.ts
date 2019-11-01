import { Request, Response } from "express";

export let index = (req: Request, res: Response) => {
    let languages = [
        {
            language: 'Spanish3'
        },
        {
            language: "French"
        },
        {
            langauge: "German"
        }
    ];
    res.json(languages);
};

export const getObjectKeys = (req: Request, res: Response) => {
    const obj = {
        data: {
            key: {
                subkey: 1,
                subkey2: 2
            },
            kel:4
        },
        current: 3
    }
    const getObjKeys = (data: any, path: string, result: any) => {
        Object.keys(data).forEach((key: string) => typeof data[key] === 'object' 
            ? getObjKeys(data[key], `${path ? path+'.' : ''}${key}`, result) 
            : result[`${path ? path+'.' : ''}${key}`] = data[key])
        return result
    }

    const result = getObjKeys(obj, '', {})
    res.json([obj, result])
}
