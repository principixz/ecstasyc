<?php
class Tipo_movimiento_m extends CI_Model {

    public function __construct()
    {
        parent::__construct();

    }

    public function mostrar_TipoMovim()
    {
        $this->db->select("*");
        $this->db->from("tipo_movimiento");
        $this->db->order_by("tipo_movimiento.id_tipomovimiento","asc");
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
        $this->db->where('id_tipomovimiento',$id);
        $this->db->update('tipo_movimiento',$elimi);
        return 0;
    }




}



?>