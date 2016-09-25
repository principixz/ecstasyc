<?php

class Portal_m extends CI_Model {

   	public function __construct()
    {
        parent::__construct();

    }

    public function comprobar()
    {
    	$data["usuario"] = $this->input->post("usuario");
    	$data["clave"] = $this->input->post("pass");
    	$res = $this->db->get_where("empleado",$data);        
    	return $res->result();
    }
}

?>