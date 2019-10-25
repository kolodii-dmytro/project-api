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

