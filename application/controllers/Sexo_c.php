<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Sexo_c extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('Sexo_m');
	}

	public function index(){
		$sexo = $this->Sexo_m->mostrar_sexo();
		echo $this->load->view('Sexo/Sexo_v.php',compact("sexo"));
	}

	public function cambiarestado(){
		$sexo = $this->Sexo_m->cambiarestado($this->input->post("estado"),$this->input->post("id"));	
		$this->index();
	}

	public function Modificar(){
		$sexo = $this->Sexo_m->Modificar($this->input->post("id"));
		echo $this->load->view('Sexo/Sexo_v.php',compact("sexo"));
	}

	public function agregar_cliente(){
		 echo $this->load->view('Sexo/agregar_sexo_v.php');
	}

}
