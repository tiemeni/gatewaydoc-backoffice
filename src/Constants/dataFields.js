export const DATA_TABLE_PRATICIEN_COLONNE = ["Civilité", "Profession", "Nom", "Prenom", "Initials", "Actif", "Date de fin d'activité", "Est chirurgien", "Le groupe", "Lieu", "Prix defaut", "Actions"]

export const DATA_TABLE_LIEU_COLONNE = ["Label", "Ville", "Région", "Code Postal", "Réference", "Initials", "Coordonées geographique", "Actif", "Actions"]
export const DATA_TABLE_MOTIF_COLONNE = ["Label", "Nom", "Temps par défaut", "Couleur Motif", "Reference", "Actif", "Actions"]
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
export const DATA_TABLE_PATIENT_COLONNE = [ { label: "Civilité", name: "civility"}, { label: "Nom", name: "name" }, { label: "Prénom"}, { label:  "Date de naissance", name: "birthdate"}, { label: "Téléphone", name: "telephone" }, { label: "Email", name: "email" }, { label: "Mot de Passe"}, { label: "Initials" }, { label: "Photo" }, { label: "Actif" }, { label: "Droits" }, { label: "Actions", name: "active"} ]
export const DATA_TABLE_GROUPE_COLONNE = ["Nom du groupe", "Description", "Actions"]