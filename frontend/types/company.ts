export interface Company {
  id: number;
  name: string;
  website: string;
  industry: string;
  country: string;
  funding: number;
  description: string;

  foundedYear?: number;
  employees?: number;
  fundingStage?: string;
  headquarters?: string;
  aiScore?: number;
}