
import Dexie from "dexie";

export const evidenceDB = new Dexie("PeekKavachEvidence");

evidenceDB.version(1).stores({
  incidents: "id, updatedAt",
  photos: "++id, incidentId, capturedAt, syncStatus",
  notes: "++id, incidentId, createdAt",
});

// Save a captured photo for an incident.
export async function saveEvidencePhoto({
  incidentId,
  blob,
  latitude = null,
  longitude = null,
  capturedAt = new Date().toISOString(),
  evidenceType = "crop-damage",
}) {
  if (!incidentId) {
    throw new Error("An incident ID is required.");
  }

  if (!(blob instanceof Blob) || blob.size === 0) {
    throw new Error("A valid photo is required.");
  }

  const photo = {
    incidentId,
    blob,
    latitude,
    longitude,
    capturedAt,
    evidenceType,
    syncStatus: "pending",
  };

  return evidenceDB.photos.add(photo);
}

// Retrieve all photos belonging to an incident.
export async function getIncidentPhotos(incidentId) {
  return evidenceDB.photos
    .where("incidentId")
    .equals(incidentId)
    .toArray();
}

// Delete a photo if the farmer chooses to discard it.
export async function deleteEvidencePhoto(photoId) {
  return evidenceDB.photos.delete(photoId);
}
