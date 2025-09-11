output "vm_ip" {
  value       = google_compute_instance.api_tarefas_vm.network_interface[0].access_config[0].nat_ip
  description = "IP público da VM onde a API está rodando"
}
