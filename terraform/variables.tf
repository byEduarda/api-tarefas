variable "gcp_credentials" {
  description = "Caminho para o arquivo JSON de credenciais do GCP"
  type        = string
}

variable "project_id" {
  description = "ID do projeto no GCP"
  type        = string
}

variable "region" {
  description = "Região do GCP"
  type        = string
  default     = "us-central1"
}

variable "vm_name" {
  description = "Nome da máquina virtual"
  type        = string
  default     = "api-tarefas-vm"
}

variable "docker_image" {
  description = "Imagem Docker da API"
  type        = string
  default     = "mariaeduardazx/api-tarefas:latest"
}
