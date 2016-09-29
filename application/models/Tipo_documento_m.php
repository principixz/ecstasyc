<?php
class Tipo_documento_m extends CI_Model {

    public function __construct()
    {
        parent::__construct();

    }

    public function mostrar_tipodoc()
    {
        $this->db->select("*");
        $this->db->from("tipo_documento");
        $this->db->order_by("tipo_documento.id_tipodocumento","asc");
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
        $this->db->where('id_tipodocumento',$id);
        $this->db->update('tipo_documento',$elimi);
        return 0;
    }

}

?>