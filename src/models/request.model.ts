export interface Request {
  document: string;
  documentType: string;
  description: string;
  id: number;
  insertedAt: string;
  status: "INITIAL_REQUEST" | "VALIDATED" | "REFUSED";

  user: {
    identityCode: string;
    identityType: string;
  };
}
