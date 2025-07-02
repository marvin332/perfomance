import React from 'react'
import { createRoot } from 'react-dom/client'
import {Header} from "./header/Header"
import {Main} from "./main/Main"


import "./reset.css"
import "./bootstrap.css"
import "./fonts.css"
import "./styles.css"


const root = createRoot(document.getElementById('app'))
root.render( <>
    <Header />
    <Main />
</>)