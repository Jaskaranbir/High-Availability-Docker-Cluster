# -*- mode: ruby -*-
# vi: set ft=ruby :

plugin_dependencies = [
  "vagrant-docker-compose",
  "vagrant-vbguest"
]

needsRestart = false

# Install plugins if required
plugin_dependencies.each do |plugin_name|
  unless Vagrant.has_plugin? plugin_name
    system("vagrant plugin install #{plugin_name}")
    needsRestart = true
    puts "#{plugin_name} installed"
  end
end

# Restart vagrant if new plugins were installed
if needsRestart === true
  exec "vagrant #{ARGV.join(' ')}"
end

Vagrant.configure(2) do |config|
  config.vm.define "codetalkvm" do |codetalkvm|
    codetalkvm.vm.hostname = "codetalk"
    codetalkvm.vm.box = "bento/ubuntu-16.04"
    codetalkvm.vm.network "forwarded_port", guest: 80, host: 8080, auto_correct: true
    codetalkvm.vm.network "forwarded_port", guest: 8181, host: 8181, auto_correct: true

    codetalkvm.vm.provider "virtualbox" do |vb|
      vb.name = "codetalkvm"
      vb.gui = false
      vb.memory = "2048"
      vb.cpus = 2
    end

    # Run as non-login shell, sourcing it to /etc/profile instead of /root/.profile
    # Due to clashing configurations for vagrant and base box.
    # See: https://github.com/mitchellh/vagrant/issues/1673#issuecomment-28288042
    codetalkvm.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'"

    codetalkvm.vm.provision "shell", inline: "apt-get update"
    codetalkvm.vm.provision "shell", inline: "apt-get install -y mysql-client"
    codetalkvm.vm.provision "docker"
    codetalkvm.vm.provision :docker
    codetalkvm.vm.provision :docker_compose, compose_version: "1.15.0", project_name: "CodeTalk", yml: ["/vagrant/docker-compose.yml"]
  end
end
