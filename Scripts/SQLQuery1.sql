Insert into tblTiposConcep ([tipCodigo],[tipNombre],[tipInactivo])
Values
('PTR','Paciente Attr',0),
('CMB','Comorbilidades',0),
('IDC','Imágenes diagnósticas confirmatorias',0),
('RSN','Respuesta Si o No',0),
('LHF','Cuestionario: Minnesota Living with Heart Failure',0),
('TDC','Tipo de dispositivos cardíacos',0),
('PSC','Forma de presentación del síndrome clínico',0),
('TME','Tipos de manifestaciones extracardíacas',0),
('MEG','Manifestaciones electrocardiográficas',0),
('RMNG','Resonancia Magnética nuclear con Gadolinio',0),
('TRMN','Anormalidad de la resonancia Magnética nuclear',0),
('GPTP','Gammagrafía ósea con Tc-HMDP o pirofosfato (PYP)',0),
('TATR','Tipo ATTR-CM',0),
('IFM','Intervención farmacológica',0),
('MDD','Movilidad',0),
('CPL','Cuidado personal',0),
('ACS','Actividades cotidianas',0),
('DMR','Dolor/malestar',0),
('ADN','Ansiedad/Depresión',0),
('DDS','Desenlace del seguimiento',0),
('ATTR','Attr',0);


Insert Into [tblConceptos] ([conCodigo],[conTipo],[conNombre],[conParametro],[conInactivo],[conOrden])
Values
('NAC','ATTR','No Aplica',0,0,1),

('RS','RSN','Si',0,0,1),
('RN','RSN','No',0,0,2),

('EAD','PTR','Afrodescendiente',0,0,1),
('EIG','PTR','Indigena',0,0,2),
('ERZ','PTR','Raizal',0,0,3),
('ERN','PTR','Romano',0,0,4),
('EOT','PTR','Otro',0,0,5),

('CDB','CMB','Diabetes',0,0,1),
('CHA','CMB','Hipertensión arterial',0,0,2),
('CCR','CMB','Cáncer',0,0,3),
('CEC','CMB','Enfermedad coronaria',0,0,4),
('CHT','CMB','Hipotiriodismo',0,0,5),
('CEPC','CMB','EPOC',0,0,6),

('TAB','TDC','Válvula aórtica biologica',0,0,1),
('TMUOB','TDC','Marcapasos Uni o bicameral',0,0,2),
('TCDR','TDC','Cardiodesfibrilador',0,0,3),
('TMT','TDC','Marcapasos tricameral o resincronizador cardíaco (CRT)',0,0,4),
('TRCD','TDC','Resincronizador cardíaco con desfibrilador (CRT-D)',0,0,5),

('PFC','PSC','Falla Cardíaca',0,0,1),
('PAC','PSC','Arritmias cardíacas',0,0,2),
('PEA','PSC','Estenosis Aórtica',0,0,3),
('POT','PSC','Otro',1,0,4),

('TSTC','TME','Sindrome del tunel del carpo',0,0,1),
('TPTA','TME','Polineuropatía',0,0,2),
('TDTA','TME','Disautonomia',0,0,3),
('TAFO','TME','Afectación ocular',0,0,4),
('TOTR','TME','Otro',0,0,5),

('MNM','MEG','Normal',0,0,1),
('MFA','MEG','Fibrilación auricular',0,0,2),
('MPSI','MEG','Patrón de pseudoinfarto',0,0,3),
('MDCA','MEG','Defectos de conducción AV',0,0,4),

('RNM','RMNG','Normal',0,0,1),
('RANM','RMNG','Anormal',0,0,2),

('TAVE','TRMN','Aumento del volúmen extracelular (VEC)',0,0,1),
('TETN','TRMN','Elevación de T1 Nativo',0,0,2),
('TRTG','TRMN','Realce tardio de gadolinio difuso',0,0,3),

('GNCN','GPTP','No captación',0,0,1),
('GNL','GPTP','Leve',0,0,2),
('GMD','GPTP','Moderada',0,0,3),
('GSVR','GPTP','Severa',0,0,4),

('TWT','TATR','Wild type (wt)',0,0,1),
('THT','TATR','Hereditary (m)',0,0,2),

('ITM','IFM','Tafamidis',0,0,1),
('IDM','IFM','Diflunisal',0,0,2),
('IDX','IFM','Doxiciclina',0,0,3),
('ITR','IFM','Otra',0,0,4),

('MNPC','MDD','No tengo problemas para caminar',0,0,1),
('MTPC','MDD','Tengo algunos problemas para caminar',0,0,2),
('MEC','MDD','Tengo que estar en la cama',0,0,3),

('CNCP','CPL','No tengo problemas con el cuidado personal',0,0,1),
('CPLV','CPL','Tengo algunos problemas para lavarme o vestirme',0,0,2),
('CILV','CPL','Soy incapaz de lavarme o vestime',0,0,3),

('ANPC','ACS','No tengo problemas para realizar mis actividades cotidianas',0,0,1),
('ATPC','ACS','Tengo algunos problemas para realizar mis actividades cotidianas',0,0,2),
('AIPC','ACS','Soy incapaz de realizar mis actividades cotidianas',0,0,3),

('DNTM','DMR','No tengo dolor ni malestar',0,0,1),
('DTTM','DMR','Tengo moderado dolor o malestar',0,0,2),
('DMTM','DMR','Tengo mucho dolor y malestar',0,0,3),

('ANAD','ADN','No estoy ansioso ni deprimido',0,0,1),
('AEAD','ADN','Estoy moderadamente ansioso o deprimido',0,0,2),
('AMAD','ADN','Estoy muy ansioso o deprimido',0,0,3),

('LHF0','LHF','0',0,0,1),
('LHF1','LHF','1',1,0,2),
('LHF2','LHF','2',2,0,3),
('LHF3','LHF','3',3,0,4),
('LHF4','LHF','4',4,0,5),
('LHF5','LHF','5',5,0,6),

('VVO','DDS','Vivo',1,0,1),
('MRT','DDS','Muerte',0,0,1)
;



