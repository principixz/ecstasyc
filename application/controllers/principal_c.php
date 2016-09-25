<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Principal_c extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Principal_m');

	}

	public function index()
	{
			
		$permisos = $this->Principal_m->traer_modulos();
		$this->load->view('principal/index',compact("permisos"));
	}

	public function cerrar_sesion()
	{
		session_destroy();
		redirect(site_url("Portal_c"));
	}


}

