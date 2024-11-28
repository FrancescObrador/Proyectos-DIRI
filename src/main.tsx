import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskLogging from './TaskLogging.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskLogging />
  </StrictMode>,
)
