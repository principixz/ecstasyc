<?php
class Tipo_empleado_m extends CI_Model {

    public function __construct()
    {
        parent::__construct();

    }

    public function mostrar_tipoempleado()
    {
        $this->db->select("*");
        $this->db->from("tipo_empleado");
        $this->db->order_by("tipo_empleado.id_tipoempleado","asc");
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
        $this->db->where('id_tipoempleado',$id);
        $this->db->update('tipo_empleado',$elimi);
        return 0;
    }




}



?>