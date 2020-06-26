
import { Router } from 'express';

const webRouter = Router();

webRouter.get('/test', (req, res) => {
    res.render('test', { name: "Yomi"});
});


export default webRouter;