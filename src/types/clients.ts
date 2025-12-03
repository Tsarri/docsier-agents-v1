export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  created_at: string;
  document_count: number;
  active: boolean;
}

export interface ClientDocument {
  id: string;
  client_id: string;
  filename: string;
  file_type: string;
  file_size: number;
  uploaded_at: string;
  processed: boolean;
  processing_status: 'pending' | 'processing' | 'completed' | 'failed';
}