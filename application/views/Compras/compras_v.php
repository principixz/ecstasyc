<div class="page-container" name="nuevo">
	<div class="page-head">
		<div class="container">
			<div class="page-title">
				<h1>Compras <small>...</small></h1>
			</div>
		</div>
	</div>
	<div class="page-content">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="portlet light">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-cogs font-green-sharp"></i>
								<span class="caption-subject font-green-sharp bold uppercase">Registro de Compras</span>
							</div>
						</div>
						<div class="portlet-body">
							<div class="table-toolbar">
								<div class="row">
									<div class="col-md-6">
										<div class="btn-group">
											<button id="sample_editable_1_new" onclick="Registrar()" class="btn green">
												Agregar <i class="fa fa-plus"></i>
											</button>
										</div>
									</div>
									<div class="col-md-6">
										<div class="btn-group pull-right">
											<button class="btn dropdown-toggle" data-toggle="dropdown">Tools <i class="fa fa-angle-down"></i>
											</button>
											<ul class="dropdown-menu pull-right">
												<li>
													<a href="javascript:;">
														Print </a>
													</li>
													<li>
														<a href="javascript:;">
															Save as PDF </a>
														</li>
														<li>
															<a href="javascript:;">
																Export to Excel </a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<table class="table table-striped table-bordered table-hover" id="sample_3">
											<thead>
												<tr>
													<th>Id.</th>
													<th>Fecha</th>
													<th>Proveedor</th>
													<th>Empleado</th>
													<th>Modalidad Tran.</th>
													<th>Monto</th>											
													<th>Estado</th>
													
												</tr>
											</thead>
											<tbody>
												<?php
												foreach ($compras as $value) {?>									
												<tr>
													<td><?php echo $value->id_compras?></td>
													<td><?php echo $value->fecha  ?></td>
													<td><?php  foreach ($proveedor as $values) {
														if ($value->id_proveedor==$values->id_proveedor) {
															echo $values->razon_social;}
														}?>
													</td>
													<td>
														<?php foreach ($empleado as $values) {
															if ($value->id_empleado==$values->id_empleado) {
																echo $values->nombre.' '.$values->apellido_paterno;
															}
														}?>
													</td>
													<td>
														<?php foreach ($modalidad as $values) {
															if ($value->id_modalidad_transaccion==$values->id_modalidad_transaccion) {
																echo $values->descripcion;
															}
														}?>
													</td>											
													<td><?php echo $value->monto; ?></td>

													<td align="center">
														<?php  if($value->estado==1){ ?>
														<a onclick='Estados("1","<?php  echo $value->id_rutina ?>")' data-toggle="modal" href="#small"><span class="label label-sm label-success">Habilitado</span></a>
														<?php  } 
														if($value->estado==0){	?>
														<a onclick='Estados("0","<?php  echo $value->id_rutina ?>")'> <span class="label label-sm label-warning">Inhabilitado</span></a>
														<?php  } ?>											
													</td>
													
												</tr>

												<?php } ?>		</tbody> 
											</table>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>



				<script>
					tabla();
					function tabla(){
						var table = $('#sample_3');
						var total;
						var productos=[],empleado,ruc;
						function fnFormatDetails(oTable, nTr) {
							var aData = oTable.fnGetData(nTr);
							var total = "";
							$.ajax({
								url : "<?php echo site_url('Compras_c/comprasc'); ?>",
								data : { id_compras :aData[1] },
								type : 'POST',
								async: false,
								dataType : 'json',
								success : function(json,datos) {
									total = json.length;
									for (var i = 0; i < json.length; i++) {
										productos[i] = json[i].nombre;
									}
								},
								error : function(xhr, status) {
									alert("ERROR");
								},
							});
							var sOut = '<table table-striped table-bordered table-hover>';
							sOut += '<thead><tr><th>Categoria &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th></tr></thead>';
							for (var i = 0; i < total; i++) {
								sOut += '<tbody>'
								sOut += '<tr><td>' + productos[i] + '</td>';
								
							}
							sOut += '</tbody></table>';

							return sOut;
						}
						var nCloneTh = document.createElement('th');
						nCloneTh.className = "table-checkbox";

						var nCloneTd = document.createElement('td');
						nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';

						table.find('thead tr').each(function () {
							this.insertBefore(nCloneTh, this.childNodes[0]);
						});

						table.find('tbody tr').each(function () {
							this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
						});
						var oTable = table.dataTable({
							language: {
								search: "Buscar ... ",
								sLengthMenu:"",
								sZeroRecords: "No se encontraron resultados",
								sInfo:"",
								sInfoEmpty:"",
								sInfoFiltered:"",
								oPaginate: {
									"sNext":"Siguiente",
									"sPrevious":"Anterior"
								}
							}
						});
						var tableWrapper = $('#sample_3_wrapper');
						tableWrapper.find('.dataTables_length select').select2();
						table.on('click', ' tbody td .row-details', function () {
							var nTr = $(this).parents('tr')[0];
							if (oTable.fnIsOpen(nTr)) {
								/* This row is already open - close it */
								$(this).addClass("row-details-close").removeClass("row-details-open");
								oTable.fnClose(nTr);
							} else {
								/* Open this row */
								$(this).addClass("row-details-open").removeClass("row-details-close");
								oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), 'details');
							}
						});


					}
					function cargarmodulo(){
						$.post("<?php echo base_url();?>Rutinas_c",
							function(data){
								$('#sample_3').DataTable().destroy('#sample_3');
								$('#nuevo').empty();
								$('#nuevo').append(data);
								$('#sample_3').DataTable( {
									language: {
										search: "Buscar ... ",
										sLengthMenu:"",
										sZeroRecords: "No se encontraron resultados",
										sInfo:"",
										sInfoEmpty:"",
										sInfoFiltered:"",
										oPaginate: {
											"sNext":"Siguiente",
											"sPrevious":"Anterior"
										}
									}
								});
							});
					}




					function Estado(estado,id){
						$.post("<?php echo base_url();?>Rutinas_c/cambiarestado",{"estado":estado, "id":id });
						cargarmodulo();
					}

					function Registrar(){
						$.post("<?php echo base_url();?>Compras_c/nuevo",
							function(data){
								$('#nuevo').empty();
								$('#nuevo').append(data);
							});
					}

					
				</script>