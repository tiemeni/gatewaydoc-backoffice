export const DATA_TABLE_SPECIALITE_COLONNE = [
    {
        label: "Label de la spécialité",
        name: "title"
    },
    {
        label: "Alertes web",
        name: "webAlert"
    },
    {
        label: "Alerte secretaire",
        name: "secretaryAlert"
    },
    {
        label: "Active",
        name: "active"
    },
    {
        label: "Actions"
    }
]
export const DATA_TABLE_LIEU_COLONNE = 
[ { label:"active", name:"active"}, { label:"codePostal", name:"codePostal"}, { label:"initiales", name:"initiales"}, { label:"label", name:"label"}, { label:"reference", name:"reference"}, { label:"region", name:"region"}, { label:"ville", name:"ville"}, { label:"Actions", name:"Actions"} ]
export const DATA_TABLE_MOTIF_COLONNE = 
[ { label:"couleur", name:"couleur"},{ label:"name", name:"name"}, { label:"Actions", name:"Actions"}]
export const DATA_TABLE_USERS_COLONNE = [
    {
        label: "Profession",
        name: 'job'
    },
    {
        label: "Initiales",
        name: 'initiales'
    },
    {
        label: "Nom",
        name: 'name'
    },
    {
        label: "Prénom",
        name: 'surname'
    },
    {
        label: "Téléphone",
        name: 'telephone'
    },
    {
        label: "Email",
        name: 'email'
    },
    {
        label: "Le groupe",
        name: 'groups'
    },
    {
        label: "Lieu affecté",
        name: 'affectations'
    },
    {
        label: "Mot de Passe",
        name: 'password'
    },
    {
        label: "Actif",
        name: 'active'
    },
    {
        label: "Actions"
    }
]
export const DATA_TABLE_PATIENT_COLONNE = [{ label: "Civilité", name: "civility" }, { label: "Nom", name: "name" }, { label: "Prénom" }, { label: "Date de naissance", name: "birthdate" }, { label: "Téléphone", name: "telephone" }, { label: "Email", name: "email" }, { label: "Mot de Passe" }, { label: "Initials" }, { label: "Photo" }, { label: "Actif" }, { label: "Droits" }, { label: "Actions", name: "active" }]

export const DATA_TABLE_PRATICIEN_COLONNE = [
    {
        label: "Civilité",
        name: "civility",
    },
    {
        label: "Nom",
        name: "name",
    },
    {
        label: "Prénom",
        name: "surname",
    },
    {
        label: "Email",
        name: "email",
    },
    {
        label: "Actif",
        name: "active",
    },
    {
        label: "Actions",
    },
];

export const DATA_TABLE_PAIEMENT_COLONNE = [
    {
        label: "Date du RDV",
        name: "date_rdv",
    },
    {
        label: "Praticien",
        name: "praticien",
    },
    {
        label: "Patient",
        name: "patient",
    },
    {
        label: "Motif",
        name: "motif",
    },
    {
        label: "Lieu",
        name: "lieu",
    },
    {
        label: "Mode de règlement",
        name: "mode_reglement",
    },
    {
        label: "Montant",
        name: "montant",
    },
];

export const DATA_TABLE_GROUPE_COLONNE = [{
    label: "Nom",
    name: "title",
},
{
    label: "Descriptions",
    name: "description",
},
{
    label: "Actions",
}]

export const DATA_TABLE_STRUCTURE_COLONNE = [{
    label: "Nom",
    name: "nom",
},
{
    label: "Descriptions",
    name: "localisation",
},
{
    label: "addresse",
    name: "addresse",
},
{
    label: "email",
    name: "email",
},
{
    label: "telephone",
    name: "telephone",
},
{
    label: "raisonSocial",
    name: "raisonSocial",
},
{
    label: "formeJuridque",
    name: "formeJuridque",
},
{
    label: "Actions",
}]

const data_tables = {
    'user': DATA_TABLE_USERS_COLONNE,
    'lieu': DATA_TABLE_LIEU_COLONNE,
    'patient': DATA_TABLE_PATIENT_COLONNE,
    'speciality': DATA_TABLE_SPECIALITE_COLONNE,
    'motif': DATA_TABLE_MOTIF_COLONNE,
    'groupe': DATA_TABLE_GROUPE_COLONNE,
    'practitien': DATA_TABLE_PRATICIEN_COLONNE,
    'structure': DATA_TABLE_STRUCTURE_COLONNE
}
export default data_tables; 