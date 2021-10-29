CREATE TABLE [attrEncuestas]
(
	attrEncId INT IDENTITY(1,1) PRIMARY KEY,
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
	UpdateDate SMALLDATETIME DEFAULT getDate(),

	CONSTRAINT FK_attrEncuesta_attrPersonas_AttrNumero FOREIGN KEY ([AttrNumero])
		REFERENCES attrPacientes([AttrNumero]),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrIsuficiencia FOREIGN KEY (attrIsuficiencia)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrHinchazon FOREIGN KEY (attrHinchazon)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrDesncanso FOREIGN KEY (attrDesncanso)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrDificCaminar FOREIGN KEY (attrDificCaminar)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrDificJardin FOREIGN KEY (attrDificJardin)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrDificAfuera FOREIGN KEY (attrDificAfuera)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrDificDormir FOREIGN KEY (attrDificDormir)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrDificSocial FOREIGN KEY (attrDificSocial)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrDificTrabajo FOREIGN KEY (attrDificTrabajo)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrDificHobbie FOREIGN KEY (attrDificHobbie)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrDificSexual FOREIGN KEY (attrDificSexual)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrDificCoidas FOREIGN KEY (attrDificCoidas)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrDificRespir FOREIGN KEY (attrDificRespir)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrFatiga FOREIGN KEY (attrFatiga)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrHospital FOREIGN KEY (attrHospital)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrCostoMedico FOREIGN KEY (attrCostoMedico)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrEfectoSecund FOREIGN KEY (attrEfectoSecund)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrCargaFamili FOREIGN KEY (attrCargaFamili)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrAutoControl FOREIGN KEY (attrAutoControl)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrPreocuparse FOREIGN KEY (attrPreocuparse)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrConcentrarse FOREIGN KEY (attrConcentrarse)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_tlbConceptos_attrEncuenstas_attrDepresion FOREIGN KEY (attrDepresion)
            REFERENCES tblConceptos(conNumero)
);
go


DROP PROCEDURE IF EXISTS dbo.[stpCreateEncuesta];  
GO 

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

INSERT INTO [attrEncuestas] (
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
);

IF(@@ROWCOUNT > 0 )
	SET @result = SCOPE_IDENTITY();
GO




DROP PROCEDURE IF EXISTS dbo.[stpGetEncustaByPacienteId];  
GO 

CREATE PROCEDURE [stpGetEncustaByPacienteId]
	@userId INT,
	@pacienteId INT
AS

SET NOCOUNT ON

SELECT 
	attrEncId,
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
	attrDepresion,
	CreateDate,
	UpdateDate
FROM [attrEncuestas]
WHERE attrNumero = @pacienteId

GO


DROP PROCEDURE IF EXISTS dbo.[stpGetEncustaById];  
GO 

CREATE PROCEDURE [stpGetEncustaById]
	@userId INT,
	@encuestaId INT
AS

SET NOCOUNT ON

SELECT 
	attrEncId,
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
	attrDepresion,
	CreateDate,
	UpdateDate
FROM [attrEncuestas]
WHERE attrEncId = @encuestaId

GO


DROP PROCEDURE IF EXISTS dbo.[stpUpdateEncuestaAttr];  
GO 

CREATE PROCEDURE [dbo].[stpUpdateEncuestaAttr]
	@userId INT,

	@attrEncId INT,
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
	
UPDATE [attrEncuestas]
    SET
		attrIsuficiencia	=	@attrIsuficiencia,
		attrHinchazon	=	@attrHinchazon,
		attrDesncanso	=	@attrDesncanso,
		attrDificCaminar	=	@attrDificCaminar,
		attrDificJardin	=	@attrDificJardin,
		attrDificAfuera	=	@attrDificAfuera,
		attrDificDormir	=	@attrDificDormir,
		attrDificSocial	=	@attrDificSocial,
		attrDificTrabajo	=	@attrDificTrabajo,
		attrDificHobbie	=	@attrDificHobbie,
		attrDificSexual	=	@attrDificSexual,
		attrDificCoidas	=	@attrDificCoidas,
		attrDificRespir	=	@attrDificRespir,
		attrFatiga	=	@attrFatiga,
		attrHospital	=	@attrHospital,
		attrCostoMedico	=	@attrCostoMedico,
		attrEfectoSecund	=	@attrEfectoSecund,
		attrCargaFamili	=	@attrCargaFamili,
		attrAutoControl	=	@attrAutoControl,
		attrPreocuparse	=	@attrPreocuparse,
		attrConcentrarse	=	@attrConcentrarse,
		attrDepresion	=	@attrDepresion,
		[UpdateDate] = getDate()
WHERE attrEncId = @attrEncId;

IF(@@ROWCOUNT > 0 )
	SET @result = 1;
GO


select * from [attrEncuestas];