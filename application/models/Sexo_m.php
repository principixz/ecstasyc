<?php
class Sexo_m extends CI_Model {

    public function __construct()
    {
        parent::__construct();

    }

    public function mostrar_sexo()
    {
        $this->db->select("*");
        $this->db->from("sexo");
        $this->db->order_by("sexo.id_sexo","asc");
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
        $this->db->where('id_sexo',$id);
        $this->db->update('sexo',$elimi);
        return 0;
    }




}



?>