import React from 'react'
import { createRoot } from 'react-dom/client'
import {Header} from "./header/Header"
import {Main} from "./main/Main"
const root = createRoot(document.getElementById('app'))
root.render( <>
    <Header />
    <Main />
</>)