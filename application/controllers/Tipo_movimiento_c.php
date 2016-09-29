<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Tipo_movimiento_c extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('Tipo_movimiento_m');
	}

	public function index(){
		$TipoMovim = $this->Tipo_movimiento_m->mostrar_TipoMovim();
		echo $this->load->view('Tipo_movimiento/Tipo_movimiento_v.php',compact("TipoMovim"));
	}

	public function cambiarestado(){
		$TipoMovim = $this->Tipo_movimiento_m->cambiarestado($this->input->post("estado"),$this->input->post("id"));	
		$this->index();
	}

	public function Modificar(){
		$TipoMovim = $this->Tipo_movimiento_m->Modificar($this->input->post("id"));
		echo $this->load->view('Tipo_movimiento/Tipo_movimiento_v.php',compact("TipoMovim"));
	}

	public function agregar_cliente(){
		 echo $this->load->view('Sexo/agregar_sexo_v.php');
	}

}
