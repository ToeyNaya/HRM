import express from 'express';
import employeeRoutes from './routes/employeeRoutes';
import educationRoutes from './routes/educationRoutes';
import leaveRoutes from './routes/leaveRoutes';
import workExperienceRoutes from './routes/workExperienceRoutes';
import cors from 'cors';  
import departmentRoutes from './routes/departmentRoutes';

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', employeeRoutes);
app.use('/api', educationRoutes);
app.use('/api', leaveRoutes);
app.use('/api', workExperienceRoutes);
app.use('/api', departmentRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the Employee Management API');
});

export default app;
