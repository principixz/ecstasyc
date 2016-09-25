<?php
class Modulos_m extends CI_Model {

    public function __construct()
    {
        parent::__construct();

    }

    public function mostrar()
    {
        $this->db->select("modulo.nombre,modulo.id_modulo,modulo.url,modulo.orden,modulo.id_padre,modulo.estado,modulo.modulo_padre,modulo.icono");
        $this->db->from("modulo");
        $this->db->where("id_padre <>", 0);
        $this->db->order_by("id_padre","asc");
        $r = $this->db->get();      
        return $r->result();
    }

    public function cambiarestado($estado,$id){
        if($estado==1){
            $elimi =array('estado' => 0);
        }
        if($estado !=1){
            $elimi =array('estado' => 1);   
        }
        $this->db->where('id_modulo',$id);
        $this->db->update('modulo',$elimi);
        return 0;
    }

    public function modificar($id)
    {
        $this->db->select("modulo.nombre,modulo.id_modulo,modulo.url,modulo.orden,modulo.id_padre,modulo.estado,modulo.modulo_padre,modulo.icono");
        $this->db->from("modulo");
        $this->db->where("id_modulo",$id );
        $this->db->order_by("id_padre","asc");
        $r = $this->db->get();      
        return $r->result();
    }
  




}



?>