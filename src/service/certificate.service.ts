import { certificates } from "../data/certificate.data.js";
import type { Certificate } from "../data/certificate.data.js";
let nextCertificateId = 1;

export function createCertificate(
  name: string,
  issuer: string,
  dateEmission: Date,
  dateExpiration: Date
) {
  const newCertificate: Certificate = {
    id: nextCertificateId++,
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

export function updateCertificate (
  id: number,
  name: string,
  issuer: string,
  dateEmission: Date,
  dateExpiration: Date
) {
  const certificate = certificates.find(certificate => certificate.id === id)
  if(!certificate){
    return undefined
  }

  certificate.name = name
  certificate.issuer = issuer
  certificate.dateEmission = dateEmission
  certificate.dateExpiration = dateExpiration

  return certificate
}

export function deleteCertificado(id: number){
  const indexCertificate = certificates.findIndex(certificate => certificate.id === id)
  if(indexCertificate !== -1){
    return certificates.splice(indexCertificate, 1)
  }
}