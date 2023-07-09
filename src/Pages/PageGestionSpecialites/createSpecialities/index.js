import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import FormGenerator from '../../../Components/authers/FormGenerator'
import { specialityFields } from '../../../Constants/fields'
import { createSpeciality, updateSpeciality } from '../../../services/specialities';

function CreateSpeciality() {
    const { specId } = useParams();
    const [redirect, setRedirect] = useState("")

    const onSubmit = async (data) => {
        if (!specId) {
            const payload = { ...data };
            const result = await createSpeciality(payload);
            if (result.success !== true) return;
            setRedirect("/content/specialites");
        } else {
            //update user
            const result = await updateSpeciality(data, specId);
            if (result.success !== true) return;
            setRedirect("/content/specialites");
        }
    };

    return (
        <FormGenerator
            fields={specialityFields}
            title={"Gestion des specialités"}
            dataId={specId}
            type={"speciality"}
            redirect={redirect}
            onSubmit={onSubmit}
        />
    )
}

export default CreateSpeciality