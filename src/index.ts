import { createCertificate, getAllCertificates, getCertificateById,
    updateCertificate, deleteCertificado
 } from "./service/certificate.service.js";

 const dateExpiration = new Date('2026-10-09')
 const dateEmission = new Date('2026-08-09')
 const certificate = createCertificate("j ", " ", dateEmission, dateExpiration)

 console.log(certificate)