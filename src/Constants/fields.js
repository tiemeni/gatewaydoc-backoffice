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
      placeholder: "",
    },
    {
      id: 2,
      label: "Nom*",
      name: "name",
      type: fieldTypes.TEXT,
      required: true,
      placeholder: "NOM",
    },
    {
      id: 3,
      label: "Prenom*",
      name: "surname",
      type: fieldTypes.TEXT,
      required: true,
      placeholder: "Prenom",
    },
    {
      id: 4,
      label: "Le groupe*",
      name: "groups",
      type: fieldTypes.SELECT,
      required: true,
      placeholder: "",
    },
    {
      id: 5,
      label: "Spécialté",
      name: "job",
      type: fieldTypes.SELECT,
      required: true,
      placeholder: "",
    },
    {
      id: 6,
      label: "Initiales",
      name: "initiales",
      type: fieldTypes.TEXT,
      required: false,
      placeholder: "Initiales",
    },
    {
      id: 7,
      label: "Email*",
      name: "email",
      type: fieldTypes.EMAIL,
      required: true,
      placeholder: "Email",
    },
    {
      id: 8,
      label: "Téléphone*",
      name: "phone",
      type: fieldTypes.TEXT,
      required: false,
      placeholder: "Téléphone",
    },
    {
      id: 9,
      label: "Photo",
      name: "picture",
      type: fieldTypes.FILE,
      required: false,
      placeholder: "",
    },
    {
      id: 10,
      label: "Actif*",
      name: "active",
      type: fieldTypes.RADIO,
      required: true,
      placeholder: "",
    },
    {
      id: 11,
      label: "Date de fin d'activité",
      name: "practitionerFilter",
      type: fieldTypes.TEXT,
      required: false,
      placeholder: "",
    },
    {
      id: 12,
      label: "Est chirurgien*",
      name: "chirurgien",
      type: fieldTypes.RADIO,
      required: true,
      placeholder: "",
    },
    {
      id: 13,
      label: "Lieu affecté",
      name: "affectation",
      type: fieldTypes.AUTO_COMPLETE,
      required: false,
      placeholder: "",
    },
    {
      id: 14,
      label: "Filtre sur les motifs de rdv",
      name: "motifFilter",
      type: fieldTypes.AUTO_COMPLETE,
      required: false,
      placeholder: "",
    },
    {
      id: 15,
      label: "Prix défaut",
      name: "defaultPrice",
      type: fieldTypes.TEXT,
      required: false,
      placeholder: "",
    },
  ],
};

export const specialityFields = {
    fields: [
        {
            id: 0,
            label: "Label de la spécialité*",
            name: "title",
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
        }
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
            label: "Date de naissance*",
            name: "birthdate",
            type: fieldTypes.DATE,
            required: true,
            placeholder: ""
        },
        {
            id: 12,
            label: "Mot de passe*",
            name: "password",
            type: fieldTypes.PASSWORD,
            required: true,
            placeholder: ""
        }
    ]
}

export const motifsFields = {
    fields: [
        {
            id: 1,
            label: "couleur*",
            name: "couleur",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: ""
        },
        {
            id: 2,
            label: "nom*",
            name: "nom",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: ""
        },
        {
            id: 3,
            label: "actif*",
            name: "active",
            type: fieldTypes.RADIO,
            required: true,
            placeholder: ""
        },
        {
            id: 4,
            label: "label*",
            name: "label",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: ""
        },
        {
            id: 5,
            label: "Temps par defaut(minutes)*",
            name: "default_time",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: ""
        },
        {
            id: 6,
            label: "Reference",
            name: "reference",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: ""
        }
    ]
}

export const lieuxFields = {
    fields: [
        {
            id: 1,
            label: "Actif",
            name: "active",
            type: fieldTypes.RADIO,
            required: true,
            placeholder: ""
        },
        {
            id: 2,
            label: "Code postal",
            name: "codePostal",
            type: fieldTypes.TEXT,
            required: false,
            placeholder: ""
        },
        {
            id: 3,
            label: "Initiales",
            name: "initiales",
            type: fieldTypes.TEXT,
            required: false,
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
            label: "Réference*",
            name: "reference",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "TEXT"
        },
        {
            id: 6,
            label: "Région*",
            name: "region",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "region"
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
            label: "Ville*",
            name: "ville",
            type: fieldTypes.TEXT,
            required: true,
            placeholder: "ville"
        },
    ]
}
