import React from 'react'
import { useParams } from 'react-router-dom';
import FormGenerator from '../../../Components/authers/FormGenerator'
import { motifsFields } from '../../../Constants/fields';
import { createMotif, updateMotif } from '../../../services/motif';

function AddMotif() {

    const { fields } = motifsFields;
    const { motifId } = useParams();

    const [redirect, setRedirect] = React.useState(false);

    React.useEffect(() => {
    }, []);

    const onSubmit = async (data) => {
        if (!motifId) {
            const payload = { ...data };
            const result = await createMotif(payload);
            if (result.success !== true) return;
            setRedirect("/content/motifs");
        } else {
            const result = await updateMotif(data, motifId);
            if (result.success !== true) return;
            setRedirect("/content/motifs");
        }
    };

    return (
        <FormGenerator
            fields={motifsFields}
            title={"Gestion des motifs"}
            dataId={motifId}
            type={"motif"}
            redirect={redirect}
            onSubmit={onSubmit}
        />
    )
}

export default AddMotif