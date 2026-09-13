import { certificates } from "../data/certificate.data.js";
import type { Certificate } from "../data/certificate.data.js";

export function createCertificate(
  name: string,
  issuer: string,
  dateEmission: Date,
  dateExpiration: Date
) {
  const newCertificate: Certificate = {
    id: certificates.length + 1,
    name: name,
    issuer: issuer,
    dateEmission: dateEmission,
    dateExpiration: dateExpiration,
  };

  certificates.push(newCertificate);
  return newCertificate;
}

export function getAllCertificates(){
  return certificates
}

export function getCertificateById(id: number){
  const certificate = certificates.find(certificate => certificate.id === id)
  return certificate
}