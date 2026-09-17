import { createCertificate, getAllCertificates, getCertificateById,
    updateCertificate, deleteCertificado
 } from "./service/certificate.service.js";
 import { certificates } from "./data/certificate.data.js";

 const dateExpiration = new Date('2026-10-09')
 const dateEmission = new Date('2026-08-09')
 const certificate = createCertificate("j ", " g", dateEmission, dateExpiration)

 