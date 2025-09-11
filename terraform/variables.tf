variable "gcp_credentials" {
  description = "Caminho para as credenciais do GCP"
  type        = string
}

variable "project_id" {
  description = "ID do projeto GCP"
  type        = string
}

variable "region" {
  description = "Região do GCP"
  type        = string
  default     = "us-central1"
}

variable "vm_name" {
  description = "Nome da VM para rodar a API"
  type        = string
  default     = "api-tarefas-vm"
}
