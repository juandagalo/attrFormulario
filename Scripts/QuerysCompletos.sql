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

select * from [attrPacientes];

CREATE TABLE [attrPacientes]
(
	     [attrPersonaId] INT IDENTITY(1,1),
         
         [attrNumero] INT NOT NULL PRIMARY KEY,

         [attrEtnia] SMALLINT NOT NULL,

         [attrOcupacion] NVARCHAR(200) NOT NULL,

         [attrComorbilidad] SMALLINT NOT NULL,

         [attrImplanteDispositivo] SMALLINT NOT NULL,

         [attrTipoImplanteDispositivo] SMALLINT NOT NULL,

         [attrFormaSindClinico] SMALLINT NOT NULL,

         [attrOtraFormaSindClinico] NVARCHAR(100),

         [attrManifestExtracardiaca] SMALLINT NOT NULL,

         [attrTipoManifestExtracardiaca] SMALLINT NOT NULL,

         [attrOtroTipoManifestExtracardiaca] NVARCHAR(200),

         [attrManifestElectro] SMALLINT NOT NULL,

         [attrNTproBN] FLOAT NOT NULL,

         [attrTroponinT] FLOAT NOT NULL,

         [attrGrosorVentri] SMALLINT NOT NULL,

		  attrFracEyecc SMALLINT,

		  attrDeformLong SMALLINT,

		  attrResoNucleGodolinio SMALLINT NOT NULl,

         [attrTipoAnormGadolinio] SMALLINT NOT NULL,

         [attrGammagr] SMALLINT NOT NULL,

         [attrAmiloidosis] SMALLINT NOT NULL,

         [attrAttrCm] SMALLINT NOT NULL, 

         [attrFechaAttrCm] SMALLDATETIME,

         [attrTipoAttrCm] SMALLINT NOT NULL,

		 attrInterFamaco SMALLINT NOT NULL,

         [attrDesenlace] SMALLINT,

         [attrFechaFallece] SMALLDATETIME,

         [attrEdadFallece] TINYINT,

         [CreateDate] SMALLDATETIME NOT NULL DEFAULT getDate(),

         [UpdateDate] SMALLDATETIME,

        CONSTRAINT FK_hisPacientes_attrPersonas_attrNumero FOREIGN KEY ([attrNumero])
            REFERENCES hisPacientes(pacNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrEtnia FOREIGN KEY ([attrEtnia])
            REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrComorbilidad FOREIGN KEY ([attrComorbilidad])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrImplanteDispositivo FOREIGN KEY ([attrImplanteDispositivo])
			REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrTipoImplanteDispositivo FOREIGN KEY ([attrTipoImplanteDispositivo])
            REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrFormaSindClinico FOREIGN KEY ([attrFormaSindClinico])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrManifestExtracardiaca FOREIGN KEY ([attrManifestExtracardiaca])
			REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrTipoManifestExtracardiaca FOREIGN KEY ([attrTipoManifestExtracardiaca])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrManifestElectro FOREIGN KEY ([attrManifestElectro])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrGrosorVentri FOREIGN KEY ([attrGrosorVentri])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrResoNucleGodolinio FOREIGN KEY (attrResoNucleGodolinio)
            REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrTipoAnormGadolinio FOREIGN KEY ([attrTipoAnormGadolinio])
            REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrGammagr FOREIGN KEY ([attrGammagr])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrAmiloidosis FOREIGN KEY ([attrAmiloidosis])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrAttrCm FOREIGN KEY ([attrAttrCm])
            REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrTipoAttrCm FOREIGN KEY ([attrTipoAttrCm])
            REFERENCES tblConceptos(conNumero),

		CONSTRAINT FK_tblConceptos_attrPersonas_attrInterFamaco FOREIGN KEY (attrInterFamaco)
            REFERENCES tblConceptos(conNumero),

        CONSTRAINT FK_tblConceptos_attrPersonas_attrDesenlace FOREIGN KEY ([attrDesenlace])
            REFERENCES tblConceptos(conNumero)
)



CREATE TABLE [attrEncuesta]
(
	attrNumero INT NOT NULL,
	attrIsuficiencia SMALLINT,
	attrHinchazon SMALLINT,
	attrDesncanso SMALLINT,
	attrDificCaminar SMALLINT,
	attrDificJardin SMALLINT,
	attrDificAfuera SMALLINT,
	attrDificDormir SMALLINT,
	attrDificSocial SMALLINT,
	attrDificTrabajo SMALLINT,
	attrDificHobbie SMALLINT,
	attrDificSexual SMALLINT,
	attrDificCoidas SMALLINT,
	attrDificRespir SMALLINT,
	attrFatiga SMALLINT,
	attrHospital SMALLINT,
	attrCostoMedico SMALLINT,
	attrEfectoSecund SMALLINT,
	attrCargaFamili SMALLINT,
	attrAutoControl SMALLINT,
	attrPreocuparse SMALLINT,
	attrConcentrarse SMALLINT,
	attrDepresion SMALLINT,
	[CreateDate] SMALLDATETIME NOT NULL DEFAULT getDate(),
	CONSTRAINT FK_Encuesta_Persona_AttrNumero FOREIGN KEY ([AttrNumero])
		REFERENCES attrPaciente([AttrNumero]),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrIsuficiencia FOREIGN KEY (attrIsuficiencia)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrHinchazon FOREIGN KEY (attrHinchazon)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrDesncanso FOREIGN KEY (attrDesncanso)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrDificCaminar FOREIGN KEY (attrDificCaminar)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrDificJardin FOREIGN KEY (attrDificJardin)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrDificAfuera FOREIGN KEY (attrDificAfuera)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrDificDormir FOREIGN KEY (attrDificDormir)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrDificSocial FOREIGN KEY (attrDificSocial)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrDificTrabajo FOREIGN KEY (attrDificTrabajo)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrDificHobbie FOREIGN KEY (attrDificHobbie)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrDificSexual FOREIGN KEY (attrDificSexual)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrDificCoidas FOREIGN KEY (attrDificCoidas)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrDificRespir FOREIGN KEY (attrDificRespir)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrFatiga FOREIGN KEY (attrFatiga)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrHospital FOREIGN KEY (attrHospital)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrCostoMedico FOREIGN KEY (attrCostoMedico)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrEfectoSecund FOREIGN KEY (attrEfectoSecund)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrCargaFamili FOREIGN KEY (attrCargaFamili)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrAutoControl FOREIGN KEY (attrAutoControl)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrPreocuparse FOREIGN KEY (attrPreocuparse)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrConcentrarse FOREIGN KEY (attrConcentrarse)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuensta_attrDepresion FOREIGN KEY (attrDepresion)
            REFERENCES tblConceptos(conNumero),
)



CREATE TABLE [attrHospitalizacion]
(
	[attrHospId] INT IDENTITY(1,1) PRIMARY KEY,

	[attrPacNum] INT NOT NULL,

	[attrHospitalizacion] NVARCHAR(2) NOT NULL,

	[attrUltimaHosp] SMALLDATETIME,

	[attrEgresoUltimaHosp] SMALLDATETIME,

	[attrDiagUltimaHosp] SMALLDATETIME,

	[attrDiagEgresoUltimaHosp] SMALLDATETIME, 

	[CreateDate] SMALLDATETIME NOT NULL DEFAULT getDate(),

	CONSTRAINT FK_attrPersona_attrHospitalizacion_attrPacNum FOREIGN KEY ([attrPacNum])
		REFERENCES attrPacientes([AttrNumero])
)


----Creación de procedimientos
CREATE PROCEDURE [stpCraateHospitalizacionAttr]
	@userId INT,
	@attrPacNum INT,
	@attrHospitalizacion NVARCHAR(2),
	@attrUltimaHosp SMALLDATETIME,
	@attrEgresoUltimaHosp SMALLDATETIME,
	@attrDiagUltimaHosp SMALLDATETIME,
	@attrDiagEgresoUltimaHosp SMALLDATETIME,
    @result INT OUTPUT
AS

SET NOCOUNT ON

SET @result = 0

INSERT INTO attrHospitalizacion(
	[AttrPacNum],
	[AttrHospitalizacion],
	[AttrUltimaHosp],
	[AttrEgresoUltimaHosp],
	[AttrDiagUltimaHosp],
	[AttrDiagEgresoUltimaHosp]
)VALUES(
	@attrPacNum,
	@attrHospitalizacion,
	@attrUltimaHosp,
	@attrEgresoUltimaHosp,
	@attrDiagUltimaHosp,
	@attrDiagEgresoUltimaHosp
)


RETURN 0




CREATE PROCEDURE [stpCreateEncuesta]
	@userId INT,
	@attrNumero INT,
	@attrIsuficiencia smallint,
	@attrHinchazon smallint,
	@attrDesncanso smallint,
	@attrDificCaminar smallint,
	@attrDificJardin smallint,
	@attrDificAfuera smallint,
	@attrDificDormir smallint,
	@attrDificSocial smallint,
	@attrDificTrabajo smallint,
	@attrDificHobbie smallint,
	@attrDificSexual smallint,
	@attrDificCoidas smallint,
	@attrDificRespir smallint,
	@attrFatiga smallint,
	@attrHospital smallint,
	@attrCostoMedico smallint,
	@attrEfectoSecund smallint,
	@attrCargaFamili smallint,
	@attrAutoControl smallint,
	@attrPreocuparse smallint,
	@attrConcentrarse smallint,
	@attrDepresion smallint,
	@result INT OUTPUT
AS

SET NOCOUNT ON

SET @result = 0

INSERT INTO [attrEncuesta] (
		attrNumero,
		attrIsuficiencia,
		attrHinchazon,
		attrDesncanso,
		attrDificCaminar,
		attrDificJardin,
		attrDificAfuera,
		attrDificDormir,
		attrDificSocial,
		attrDificTrabajo,
		attrDificHobbie,
		attrDificSexual,
		attrDificCoidas,
		attrDificRespir,
		attrFatiga,
		attrHospital,
		attrCostoMedico,
		attrEfectoSecund,
		attrCargaFamili,
		attrAutoControl,
		attrPreocuparse,
		attrConcentrarse,
		attrDepresion
)

VALUES (    
	@attrNumero,
    @attrIsuficiencia,
    @attrHinchazon,
    @attrDesncanso,
    @attrDificCaminar,
    @attrDificJardin,
    @attrDificAfuera,
    @attrDificDormir,
    @attrDificSocial,
    @attrDificTrabajo,
    @attrDificHobbie,
    @attrDificSexual,
    @attrDificCoidas,
    @attrDificRespir,
    @attrFatiga,
    @attrHospital,
    @attrCostoMedico,
    @attrEfectoSecund,
    @attrCargaFamili,
    @attrAutoControl,
    @attrPreocuparse,
    @attrConcentrarse,
    @attrDepresion 
)





CREATE PROCEDURE [stpCreatePacienteAttr]
    @userId INT,

	@attrNumero INT,
    @attrEtnia SMALLINT,
    @attrOcupacion NVARCHAR,
    @attrComorbilidad SMALLINT,
    @attrImplanteDispositivo SMALLINT,
    @attrTipoImplanteDispositivo SMALLINT,
    @attrFormaSindClinico SMALLINT,
    @attrOtraFormaSindClinico NVARCHAR,
    @attrManifestExtracardiaca SMALLINT,
    @attrTipoManifestExtracardiaca SMALLINT,
    @attrOtroTipoManifestExtracardiaca NVARCHAR,
    @attrManifestElectro SMALLINT,
    @attrNTproBN FLOAT,
    @attrTroponinT FLOAT,
    @attrGrosorVentri SMALLINT,
	@attrFracEyecc SMALLINT,
	@attrDeformLong SMALLINT,
	@attrResoNucleGodolinio SMALLINT,
    @attrTipoAnormGadolinio SMALLINT,
    @attrGammagr SMALLINT,
    @attrAmiloidosis SMALLINT,
    @attrAttrCm SMALLINT,
    @attrFechaAttrCm SMALLDATETIME,
    @attrTipoAttrCm SMALLINT,
	@attrInterFamaco SMALLINT,
    @attrDesenlace SMALLINT,
    @attrFechaFallece SMALLDATETIME,
    @attrEdadFallece TINYINT,

    @result INT OUTPUT
AS

SET NOCOUNT ON

SET @result = 0

INSERT INTO [attrPacientes] (
         [attrNumero],
         [attrEtnia],
         [attrOcupacion],
         [attrComorbilidad],
         [attrImplanteDispositivo],
         [attrTipoImplanteDispositivo],
         [attrFormaSindClinico],
         [attrOtraFormaSindClinico],
         [attrManifestExtracardiaca],
         [attrTipoManifestExtracardiaca],
         [attrOtroTipoManifestExtracardiaca],
         [attrManifestElectro],
         [attrNTproBN],
         [attrTroponinT],
         [attrGrosorVentri],
		 [attrFracEyecc],
		 [attrDeformLong],
		 [attrResoNucleGodolinio],
         [attrTipoAnormGadolinio],
         [attrGammagr],
         [attrAmiloidosis],
         [attrAttrCm],
         [attrFechaAttrCm],
         [attrTipoAttrCm],
		 [attrInterFamaco],
         [attrDesenlace],
         [attrFechaFallece],
         [attrEdadFallece],
		 [UpdateDate])

VALUES (    
	@attrNumero,
    @attrEtnia,
    @attrOcupacion,
    @attrComorbilidad,
    @attrImplanteDispositivo,
    @attrTipoImplanteDispositivo,
    @attrFormaSindClinico,
    @attrOtraFormaSindClinico,
    @attrManifestExtracardiaca,
    @attrTipoManifestExtracardiaca,
    @attrOtroTipoManifestExtracardiaca,
    @attrManifestElectro,
    @attrNTproBN,
    @attrTroponinT,
    @attrGrosorVentri,
	@attrFracEyecc,
	@attrDeformLong,
	@attrResoNucleGodolinio,
    @attrTipoAnormGadolinio,
    @attrGammagr,
    @attrAmiloidosis,
    @attrAttrCm,
    @attrFechaAttrCm,
    @attrTipoAttrCm,
	@attrInterFamaco,
    @attrDesenlace,
    @attrFechaFallece,
    @attrEdadFallece,
	getDate()
)

IF(@@ROWCOUNT > 0 )
	SET @result = SCOPE_IDENTITY();

GO

DROP PROCEDURE IF EXISTS dbo.[stpCreatePacienteAttr];  
GO 



CREATE PROCEDURE [stpGetEncustaByPacienteId]
	@userId INT,
	@pacienteId INT
AS

SET NOCOUNT ON

SELECT 
	attrNumero,
	attrIsuficiencia,
	attrHinchazon,
	attrDesncanso,
	attrDificCaminar,
	attrDificJardin,
	attrDificAfuera,
	attrDificDormir,
	attrDificSocial,
	attrDificTrabajo,
	attrDificHobbie,
	attrDificSexual,
	attrDificCoidas,
	attrDificRespir,
	attrFatiga,
	attrHospital,
	attrCostoMedico,
	attrEfectoSecund,
	attrCargaFamili,
	attrAutoControl,
	attrPreocuparse,
	attrConcentrarse,
	attrDepresion
FROM attrEncuesta
WHERE attrNumero = @pacienteId

GO






CREATE PROCEDURE [stpGetHospitalizacionByPacienteId]

	@userId INT,
	@PacienteId INT

AS

SET NOCOUNT ON

SELECT

	[AttrPacNum],
	[AttrHospitalizacion],
	[AttrUltimaHosp],
	[AttrEgresoUltimaHosp],
	[AttrDiagUltimaHosp],
	[AttrDiagEgresoUltimaHosp]

FROM attrHospitalizacion
WHERE [AttrPacNum] = @PacienteId

GO




CREATE PROCEDURE [stpGetPacienteByIdentification]
    @userId INT,
	@uniqueId INT
AS

SET NOCOUNT ON

SELECT 
	@UserId as UserId,
    [attrNumero],
    [attrEtnia],
    [attrOcupacion],
    [attrComorbilidad],
    [attrImplanteDispositivo],
    [attrTipoImplanteDispositivo],
    [attrFormaSindClinico],
    [attrOtraFormaSindClinico],
    [attrManifestExtracardiaca],
    [attrTipoManifestExtracardiaca],
    [attrOtroTipoManifestExtracardiaca],
    [attrManifestElectro],
    [attrNTproBN],
    [attrTroponinT],
    [attrGrosorVentri],
	[attrFracEyecc],
	[attrDeformLong],
	[attrResoNucleGodolinio],
    [attrTipoAnormGadolinio],
    [attrGammagr],
    [attrAmiloidosis],
    [attrAttrCm],
    [attrFechaAttrCm],
    [attrTipoAttrCm],
	[attrInterFamaco],
    [attrDesenlace],
    [attrFechaFallece],
    [attrEdadFallece]
FROM [attrPacientes]
WHERE [AttrNumero] = @uniqueId

GO

DROP PROCEDURE IF EXISTS dbo.[stpGetPacienteByIdentification];  
GO 







CREATE PROCEDURE [stpUdateEncuestaAttr]
	@userId INT,
	@attrNumero INT,
	@attrIsuficiencia DECIMAL(1,0),
	@attrHinchazon DECIMAL(1,0),
	@attrDesncanso DECIMAL(1,0),
	@attrDificCaminar DECIMAL(1,0),
	@attrDificJardin DECIMAL(1,0),
	@attrDificAfuera DECIMAL(1,0),
	@attrDificDormir DECIMAL(1,0),
	@attrDificSocial DECIMAL(1,0),
	@attrDificTrabajo DECIMAL(1,0),
	@attrDificHobbie DECIMAL(1,0),
	@attrDificSexual DECIMAL(1,0),
	@attrDificCoidas DECIMAL(1,0),
	@attrDificRespir DECIMAL(1,0),
	@attrFatiga DECIMAL(1,0),
	@attrHospital DECIMAL(1,0),
	@attrCostoMedico DECIMAL(1,0),
	@attrEfectoSecund DECIMAL(1,0),
	@attrCargaFamili DECIMAL(1,0),
	@attrAutoControl DECIMAL(1,0),
	@attrPreocuparse DECIMAL(1,0),
	@attrConcentrarse DECIMAL(1,0),
	@attrDepresion DECIMAL(1,0),
	@result INT OUTPUT
AS
SET NOCOUNT ON
SET @result = 0

UPDATE [attrEncuesta]
    SET
		attrIsuficiencia = @attrIsuficiencia,
		attrHinchazon = @attrHinchazon,
		attrDesncanso = @attrDesncanso,
		attrDificCaminar = @attrDificCaminar,
		attrDificJardin = @attrDificJardin,
		attrDificAfuera = @attrDificAfuera,
		attrDificDormir = @attrDificDormir,
		attrDificSocial = @attrDificSocial,
		attrDificTrabajo = @attrDificTrabajo,
		attrDificHobbie = @attrDificHobbie,
		attrDificSexual = @attrDificSexual,
		attrDificCoidas = @attrDificCoidas,
		attrDificRespir = @attrDificRespir,
		attrFatiga = @attrFatiga,
		attrHospital = @attrHospital,
		attrCostoMedico = @attrCostoMedico,
		attrEfectoSecund = @attrEfectoSecund,
		attrCargaFamili = @attrCargaFamili,
		attrAutoControl = @attrAutoControl,
		attrPreocuparse = @attrPreocuparse,
		attrConcentrarse = @attrConcentrarse,
		attrDepresion = @attrDepresion
WHERE attrNumero = @attrNumero

IF(@@ROWCOUNT > 0 )
	SET @result = 1;





CREATE PROCEDURE [stpUpdateHospitalizacionAttr]
	@userId INT,
	@attrPacNum INT,
	@attrHospitalizacion NVARCHAR(2),
	@attrUltimaHosp SMALLDATETIME,
	@attrEgresoUltimaHosp SMALLDATETIME,
	@attrDiagUltimaHosp SMALLDATETIME,
	@attrDiagEgresoUltimaHosp SMALLDATETIME,
    @result INT OUTPUT
AS

SET NOCOUNT ON

SET @result = 0

UPDATE attrHospitalizacion
SET

	[AttrHospitalizacion] = @attrHospitalizacion,
	[AttrUltimaHosp] = @attrUltimaHosp,
	[AttrEgresoUltimaHosp] = @attrEgresoUltimaHosp,
	[AttrDiagUltimaHosp] = @attrDiagUltimaHosp,
	[AttrDiagEgresoUltimaHosp] = @attrDiagEgresoUltimaHosp

WHERE [AttrPacNum] = @attrPacNum


IF(@@ROWCOUNT > 0 )
	SET @result = 1;




CREATE PROCEDURE [dbo].[stpUpdatePacienteAttr]
	@userId INT,

	@attrNumero INT,
    @attrEtnia SMALLINT,
    @attrOcupacion NVARCHAR,
    @attrComorbilidad SMALLINT,
    @attrImplanteDispositivo SMALLINT,
    @attrTipoImplanteDispositivo SMALLINT,
    @attrFormaSindClinico SMALLINT,
    @attrOtraFormaSindClinico NVARCHAR,
    @attrManifestExtracardiaca SMALLINT,
    @attrTipoManifestExtracardiaca SMALLINT,
    @attrOtroTipoManifestExtracardiaca NVARCHAR,
    @attrManifestElectro SMALLINT,
    @attrNTproBN FLOAT,
    @attrTroponinT FLOAT,
    @attrGrosorVentri SMALLINT,
	@attrFracEyecc SMALLINT,
	@attrDeformLong SMALLINT,
	@attrResoNucleGodolinio SMALLINT,
    @attrTipoAnormGadolinio SMALLINT,
    @attrGammagr SMALLINT,
    @attrAmiloidosis SMALLINT,
    @attrAttrCm SMALLINT,
    @attrFechaAttrCm SMALLDATETIME,
    @attrTipoAttrCm SMALLINT,
	@attrInterFamaco SMALLINT,
    @attrDesenlace SMALLINT,
    @attrFechaFallece SMALLDATETIME,
    @attrEdadFallece TINYINT,

    @result INT OUTPUT
AS

SET NOCOUNT ON
SET @result = 0
	
UPDATE [AttrPaciente]
    SET
		[attrEtnia] = @attrEtnia,
		[attrOcupacion] = @attrOcupacion,
		[attrComorbilidad] = @attrComorbilidad,
		[attrImplanteDispositivo] = @attrImplanteDispositivo,
		[attrTipoImplanteDispositivo] = @attrTipoImplanteDispositivo,
		[attrFormaSindClinico] = @attrFormaSindClinico,
		[attrOtraFormaSindClinico] = @attrOtraFormaSindClinico,
		[attrManifestExtracardiaca] = @attrManifestExtracardiaca,
		[attrTipoManifestExtracardiaca] = @attrTipoManifestExtracardiaca,
		[attrOtroTipoManifestExtracardiaca] = @attrOtroTipoManifestExtracardiaca,
		[attrManifestElectro] = @attrManifestElectro,
		[attrNTproBN] = @attrNTproBN,
		[attrTroponinT] = @attrTroponinT,
		[attrGrosorVentri] = @attrGrosorVentri,
		[attrFracEyecc] = @attrFracEyecc,
		[attrDeformLong] = @attrDeformLong,
		[attrResoNucleGodolinio] = @attrResoNucleGodolinio,
		[attrTipoAnormGadolinio] = @attrTipoAnormGadolinio,
		[attrGammagr] = @attrGammagr,
		[attrAmiloidosis] = @attrAmiloidosis,
		[attrAttrCm] = @attrAttrCm,
		[attrFechaAttrCm] = @attrFechaAttrCm,
		[attrTipoAttrCm] = @attrTipoAttrCm,
		[attrInterFamaco] = @attrInterFamaco,
		[attrDesenlace] = @attrDesenlace,
		[attrFechaFallece] = @attrFechaFallece,
		[attrEdadFallece] = @attrEdadFallece,
		[UpdateDate] = getDate()
WHERE [AttrNumero] = @AttrNumero;

IF(@@ROWCOUNT > 0 )
	SET @result = 1;
GO
