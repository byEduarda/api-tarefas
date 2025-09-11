terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 4.0"
    }
  }
  required_version = ">= 1.4.0"
}

provider "google" {
  credentials = file(var.gcp_credentials)
  project     = var.project_id
  region      = var.region
}

# Criação da VM
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
    docker run -d -p 80:3000 ${var.docker_image}
  EOT
}

# Firewall para liberar porta 80
resource "google_compute_firewall" "allow_http" {
  name    = "allow-http-api-tarefas"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["80"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = [google_compute_instance.api_tarefas_vm.name]
}
