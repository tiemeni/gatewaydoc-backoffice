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
            name: "initial",
            type: fieldTypes.TEXT,
            required: false,
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
            name: "group",
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
            label: "Lieu affecté",
            name: "affectation",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: ""
        },
        {
            id: 12,
            label: "Filtre sur les motifs",
            name: "motifFilter",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: ""
        },
    ]
}

export const practitionerFields = {
    fields: [
        {
            id: 1,
            label: "Civilite*",
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
            name: "initial",
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
            name: "group",
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
            type: fieldTypes.TEXT,
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
            type: fieldTypes.TEXT,
            required: false,
            placeholder: ""
        },
        {
            id: 15,
            label: "Filtre sur les motifs de rdv",
            name: "motifFilter",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: ""
        },
        {
            id: 16,
            label: "Prix défaut",
            name: "defaultPrice",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: ""
        },
    ]
}