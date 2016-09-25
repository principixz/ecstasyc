<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Modulos_c extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('Modulos_m');
	}

	public function index(){
		$modulos = $this->Modulos_m->mostrar();
		echo $this->load->view('Modulos/Modulos_v.php',compact("modulos"));
	}

	public function cambiarestado(){
		$modulos = $this->Modulos_m->cambiarestado($this->input->post("estado"),$this->input->post("id"));	
		$this->index();
	}

	public function Modificar(){
		$modulos = $this->Modulos_m->Modificar($this->input->post("id"));
		echo $this->load->view('Modulos/Modulosmod_v.php',compact("modulos"));
	}

}
