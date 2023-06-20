import React, { useState } from 'react'
import GestionLayout from '../../Components/authers/GestionLayout'

function PageGestionPatients() {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <GestionLayout />
    )
}

export default PageGestionPatients