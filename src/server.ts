import express from 'express';

import UserLoginRouter from './infra/routes/User/UserLoginRouter';
import UserRegisterRouter from './infra/routes/User/UserRegisterRouter';
import CursoFindAllRouter from './infra/routes/Curso/CursoFindAllRouter';
import CursoFindNomeRouter from './infra/routes/Curso/CursoFindNameRouter';

async function startServer() {
   
    const app = express();
    app.use(express.json());

    const cursoRouterFindAll = await CursoFindAllRouter();
    const cursoRouterFindNome = await CursoFindNomeRouter();
    const userRouterLogin = await UserLoginRouter();
    const userRouterRegister = await UserRegisterRouter();


  
    app.use('/api', cursoRouterFindAll);
    app.use('/api', cursoRouterFindNome);
    app.use('/api', userRouterLogin);
    app.use('/api', userRouterRegister);
    
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    }
    );

    app.get('/ping', (req, res) => {
        res.send('pong');
      });
      
}

startServer().catch((error) => {
    console.error('Error starting server:', error);
});