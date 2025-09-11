resource "google_compute_instance" "api_tarefas_vm" {
  name         = var.vm_name
  machine_type = "e2-micro" # nível gratuito
  zone         = "${var.region}-a"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  network_interface {
    network = "default"
    access_config {}
  }

  metadata_startup_script = <<-EOT
    #!/bin/bash
    apt-get update
    apt-get install -y docker.io
    systemctl start docker
    docker run -d -p 80:3000 mariaeduardazx/api-tarefas:latest
  EOT
}
