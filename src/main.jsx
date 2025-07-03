import React, { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
const Header = lazy(() => import('./header/Header'))
const Main   = lazy(() => import('./main/Main'))


import "./reset.css"

import "./fonts.css"
import "./styles.css"


const root = createRoot(document.getElementById('app'))
root.render( <>
    <Suspense fallback={<div className="loader">Загрузка…</div>}>
        <Header />
        <Main />
    </Suspense>,
</>)