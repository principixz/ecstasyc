<?php
class Modulos_m extends CI_Model {

    public function __construct()
    {
        parent::__construct();

    }

    public function traer_modulos()
    {
        $this->db->select("mo.id_modulo as idpadre, mo.nombre as padre, pa.nombre as hijo,pa.id_modulo as id_hijo, mo.icono as icono, pa.url as url, pa.estado as estado");
        $this->db->from("modulo as mo");
        $this->db->join("modulo as pa","mo.id_modulo=pa.id_padre");
        $this->db->join("permisos as pe","pa.id_modulo=pe.id_modulo");
        $this->db->join("perfil_usuario as pu","pe.id_perfil_usuario=pu.id_perfil_usuario");
        $this->db->where("pu.id_perfil_usuario",$_SESSION["idperfil"]);
        $this->db->where("pe.estado","1");
        $this->db->order_by("mo.id_modulo","asc");
        $this->db->order_by("pa.id_modulo","asc");
        $r = $this->db->get();      
        return $r->result();
    }
  




}



?>