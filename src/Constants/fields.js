import * as fieldTypes from './fieldTypes';

export const userFields = {
    fields: [
        {
            id: 0,
            label: "Civilite*",
            name: "civility",
            type: fieldTypes.SELECT,
            required: true,
            placeholder: ""
        },
        
        {
            id: 1,
            label: "Profession",
            name: "job",
            type: fieldTypes.SELECT,
            required: false,
            placeholder: ""
        },
        {
            id: 2,
            label: "Fonction",
            name: "fonction",
            type: fieldTypes.SELECT,
            required: false,
            placeholder: ""
        },
        {
            id: 3,
            label: "Initiales",
            name: "initiales",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "Initiales"
        },
        {
            id: 4,
            label: "Nom*",
            name: "name",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "NOM"
        },
        {
            id: 5,
            label: "Prenom*",
            name: "surname",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "Prenom"
        },
        {
            id: 6,
            label: "Email*",
            name: "email",
            type: fieldTypes.EMAIL,
            required: true,
            placeholder: "Email"
        },
        {
            id: 7,
            label: "Photo",
            name: "picture",
            type: fieldTypes.FILE,
            required: false,
            placeholder: ""
        },
        {
            id: 8,
            label: "Le groupe*",
            name: "groups",
            type: fieldTypes.SELECT,
            required: true,
            placeholder: ""
        },
        {
            id: 9,
            label: "Actif*",
            name: "active",
            type: fieldTypes.RADIO,
            required: true,
            placeholder: ""
        },
        {
            id: 10,
            label: "Filtre sur les praticiens visibles",
            name: "practitionerFilter",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: ""
        },
        {
            id: 11,
            label: "Filtre sur les motifs",
            name: "motifFilter",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: ""
        },
        {
            id: 12,
            label: "Password*",
            name: "password",
            type: fieldTypes.PASSWORD,
            required: false,
            placeholder: ""
        }
    ]
}

export const motifFields = {
    fields: [
        
        {
            id: 0,
            label: "Nom*",
            name: "nom",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "Nom"
        },
        {
            id: 1,
            label: "Couleur*",
            name: "couleur",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: "Couleur"
        },
        {
            id: 2,
            label: "Actif*",
            name: "active",
            type: fieldTypes.RADIO,
            required: true,
            placeholder: ""
        }
    ]
}
export const groupe_droitFields = {
    fields: [
        
        {
            id: 0,
            label: "Titre*",
            name: "title",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "Titre"
        },
        {
            id: 1,
            label: "Description*",
            name: "description",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: "Description"
        },
        {
            id: 2,
            label: "Actif*",
            name: "active",
            type: fieldTypes.RADIO,
            required: true,
            placeholder: ""
        }
    ]
}

export const practitionerFields = {
    fields: [
        {
            id: 1,
            label: "Civilite",
            name: "civility",
            type: fieldTypes.SELECT,
            required: true,
            placeholder: ""
        },
        {
            id: 2,
            label: "Profession",
            name: "job",
            type: fieldTypes.SELECT,
            required: false,
            placeholder: ""
        },
        {
            id: 3,
            label: "Fonction",
            name: "fonction",
            type: fieldTypes.SELECT,
            required: false,
            placeholder: ""
        },
        {
            id: 4,
            label: "Initiales",
            name: "initiales",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: "Initiales"
        },
        {
            id: 5,
            label: "Nom*",
            name: "name",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "NOM"
        },
        {
            id: 6,
            label: "Prenom*",
            name: "surname",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "Prenom"
        },
        {
            id: 7,
            label: "Téléphone*",
            name: "phone",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "Prenom"
        },
        {
            id: 8,
            label: "Email*",
            name: "email",
            type: fieldTypes.EMAIL,
            required: true,
            placeholder: "Email"
        },
        {
            id: 9,
            label: "Photo",
            name: "picture",
            type: fieldTypes.FILE,
            required: false,
            placeholder: ""
        },
        {
            id: 10,
            label: "Le groupe*",
            name: "groups",
            type: fieldTypes.SELECT,
            required: true,
            placeholder: ""
        },
        {
            id: 11,
            label: "Actif*",
            name: "active",
            type: fieldTypes.RADIO,
            required: true,
            placeholder: ""
        },
        {
            id: 12,
            label: "Date de fin d'activité",
            name: "practitionerFilter",
            type: fieldTypes.DATE,
            required: false,
            placeholder: ""
        },
        {
            id: 13,
            label: "Est chirurgien*",
            name: "chirurgien",
            type: fieldTypes.RADIO,
            required: true,
            placeholder: ""
        },
        {
            id: 14,
            label: "Lieu affecté",
            name: "affectation",
            type: fieldTypes.AUTO_COMPLETE,
            required: false,
            placeholder: ""
        },
        {
            id: 15,
            label: "Filtre sur les motifs de rdv",
            name: "motifFilter",
            type: fieldTypes.AUTO_COMPLETE,
            required: false,
            placeholder: ""
        },
        {
            id: 16,
            label: "Prix défaut",
            name: "defaultPrice",
            type: fieldTypes.NUMBER,
            required: false,
            placeholder: ""
        },
    ]
}

export const specialityFields = {
    fields: [
        {
            id: 0,
            label: "Label de la spécialité*",
            name: "label",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: ""
        },
        {
            id: 1,
            label: "Alertes web*",
            name: "webAlert",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: ""
        },
        {
            id: 2,
            label: "Alertes secretaire*",
            name: "secretaryAlert",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: ""
        },
        {
            id: 3,
            label: "active*",
            name: "active",
            type: fieldTypes.RADIO,
            required: true,
            placeholder: ""
        },
    ]
}


export const patientFields = {
    fields: [
        {
            id: 0,
            label: "Civilite*",
            name: "civility",
            type: fieldTypes.SELECT,
            required: true,
            placeholder: ""
        },
        {
            id: 3,
            label: "Initiales",
            name: "initiales",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "Initiales"
        },
        {
            id: 4,
            label: "Nom*",
            name: "name",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "NOM"
        },
        {
            id: 5,
            label: "Prenom*",
            name: "surname",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "Prenom"
        },
        {
            id: 6,
            label: "Email*",
            name: "email",
            type: fieldTypes.EMAIL,
            required: true,
            placeholder: "Email"
        },
        {
            id: 9,
            label: "Actif*",
            name: "active",
            type: fieldTypes.RADIO,
            required: true,
            placeholder: ""
        },
        
        {
            id: 10,
            label: "Telephone*",
            name: "telephone",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: ""
        },
        {
            id: 11,
            label: "Birthdate*",
            name: "birthdate",
            type: fieldTypes.DATE,
            required: true,
            placeholder: ""
        },
        {
            id: 12,
            label: "Password*",
            name: "password",
            type: fieldTypes.PASSWORD,
            required: true,
            placeholder: ""
        }
    ]
}

export const lieuxFields = {
    fields: [
        
        {
            id: 2,
            label: "codePostal",
            name: "codePostal",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: ""
        },
        {
            id: 3,
            label: "initiales",
            name: "initiales",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "initiales"
        },
        {
            id: 4,
            label: "label",
            name: "label",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: "label"
        },
        {
            id: 5,
            label: "reference*",
            name: "reference",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "TEXT"
        },
        {
            id: 6,
            label: "region*",
            name: "region",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "region"
        },
        {
            id: 7,
            label: "Localisation ",
            name: "location",
            type: fieldTypes.GEO_LOCATION,
            required: false,
            placeholder: "Geo Coordonnes"
        },
        {
            id: 8,
            label: "ville*",
            name: "ville",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "ville"
        },
        {
            id: 1,
            label: "active",
            name: "active",
            type: fieldTypes.RADIO,
            required: true,
            placeholder: ""
        }
    ]
}

export const structureFields = {
    fields: [
        {
            id: 1,
            label: "nom",
            name: "nom",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: ""
        },
        {
            id: 2,
            label: "localisation",
            name: "localisation",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: ""
        },
        {
            id: 3,
            label: "types de centres",
            name: "typeCentre",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "types de centres"
        },
        {
            id: 4,
            label: "Addresse",
            name: "addresse",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: "label"
        },
        {
            id: 5,
            label: "email*",
            name: "email",
            type: fieldTypes.EMAIL,
            required: true,
            placeholder: "TEXT"
        },
        {
            id: 6,
            label: "raisonSocial*",
            name: "raisonSocial",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "region"
        },
        {
            id: 7,
            label: "url Site",
            name: "urlSite",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: "Url Site"
        },
        {
            id: 8,
            label: "forme Juridque*",
            name: "formeJuridque",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "formeJuridque"
        },
    ]
}


export const professionFields = {
    fields: [
        {
            id: 1,
            label: "nom",
            name: "name",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: ""
        },
    ]
}
export const civilityFields = {
    fields: [
        {
            id: 1,
            label: "label",
            name: "label",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: ""
        },
    ]
}
const fieldsMap = {
    'user': userFields,
    'lieu': lieuxFields,
    'patient': patientFields,
    'speciality': specialityFields,
    'motif': motifFields,
    'groupe': groupe_droitFields,
    'praticien': practitionerFields,
    'structure': structureFields,
    'profession': professionFields,
    'civility': civilityFields
}
export default fieldsMap;