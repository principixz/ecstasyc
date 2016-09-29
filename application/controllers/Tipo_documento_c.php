<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Tipo_documento_c extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('Tipo_documento_m');
	}

	public function index(){
		$tipodoc = $this->Tipo_documento_m->mostrar_tipodoc();
		echo $this->load->view('Tipo_documento/Tipo_documento_v.php',compact("tipodoc"));
	}

	public function cambiarestado(){
		$tipodoc = $this->Tipo_documento_m->cambiarestado($this->input->post("estado"),$this->input->post("id"));	
		$this->index();

		
	}

	public function Modificar(){
		$tipodoc = $this->Tipo_documento_m->Modificar($this->input->post("id"));
		echo $this->load->view('Modulos/Modulosmod_v.php',compact("tipodoc"));
	}

}
