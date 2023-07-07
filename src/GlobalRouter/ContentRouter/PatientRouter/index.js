import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CREATE } from '../../../Constants/subRoutes'
import PageGestionPatients from '../../../Pages/PageGestionPatients'
import CreerPatient from '../../../Pages/PageGestionPatients/creerPatient'
import EditePatient from '../../../Pages/PageGestionPatients/modifierPatient'

function PatientRouter() {
    return (
        <Routes>
            <Route path="/" element={<PageGestionPatients />} />
            <Route path={CREATE} element={<CreerPatient />} />
            <Route path="/edite" element={<EditePatient />} />
        </Routes>
    )
}

export default PatientRouter