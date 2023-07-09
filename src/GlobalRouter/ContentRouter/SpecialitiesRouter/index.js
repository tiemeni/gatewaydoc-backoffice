import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CREATE } from '../../../Constants/subRoutes'
import PageGestionSpecialites from '../../../Pages/PageGestionSpecialites'
import CreateSpeciality from '../../../Pages/PageGestionSpecialites/createSpecialities'
import EditeSpeciality from '../../../Pages/PageGestionSpecialites/editeSpecialites'

function SpecialitiesRouter() {
    return (
        <Routes>
            <Route path="/" element={<PageGestionSpecialites />} />
            <Route path={CREATE} element={<CreateSpeciality />} />
            <Route path={CREATE+"/:specId"} element={<CreateSpeciality />} />
            <Route path="/edite" element={<EditeSpeciality />} />
        </Routes>
    )
}

export default SpecialitiesRouter