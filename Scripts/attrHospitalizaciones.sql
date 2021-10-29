Select * from hisPacientes;

CREATE TABLE [attrHospitalizaciones]
(
	[attrHospId] INT IDENTITY(1,1) PRIMARY KEY,

	[attrPacNum] INT NOT NULL,

	[attrIngresoUltimaHosp] SMALLDATETIME,

	[attrEgresoUltimaHosp] SMALLDATETIME,

	[attrDiagUltimaHosp] INT,

	[attrDiagEgresoUltimaHosp] INT, 

	[CreateDate] SMALLDATETIME NOT NULL DEFAULT getDate(),

	CONSTRAINT FK_attrPersonas_attrHospitalizacion_attrPacNum FOREIGN KEY ([attrPacNum])
		REFERENCES [attrPacientes]([attrNumero]),

	CONSTRAINT FK_hisDiagnosticos_attrHospitalizaciones_attrDiagEgresoUltimaHosp FOREIGN KEY (attrDiagEgresoUltimaHosp)
		REFERENCES hisDiagnosticos(diaNumero),

	CONSTRAINT FK_hisDiagnosticos_attrHospitalizaciones_attrDiagUltimaHosp FOREIGN KEY (attrDiagUltimaHosp)
		REFERENCES hisDiagnosticos(diaNumero)
);
Go




DROP PROCEDURE IF EXISTS dbo.[stpCreateHospitalizacionAttr];  
GO 

CREATE PROCEDURE [stpCreateHospitalizacionAttr]
	@userId INT,

	@attrPacNum INT,
	@attrIngresoUltimaHosp SMALLDATETIME,
	@attrEgresoUltimaHosp SMALLDATETIME,
	@attrDiagUltimaHosp INT,
	@attrDiagEgresoUltimaHosp INT,

    @result INT OUTPUT
AS

SET NOCOUNT ON

SET @result = 0

INSERT INTO [attrHospitalizaciones](
	[AttrPacNum],
	[AttrIngresoUltimaHosp],
	[AttrEgresoUltimaHosp],
	[AttrDiagUltimaHosp],
	[AttrDiagEgresoUltimaHosp]
)VALUES(
	@attrPacNum,
	@attrIngresoUltimaHosp,
	@attrEgresoUltimaHosp,
	@attrDiagUltimaHosp,
	@attrDiagEgresoUltimaHosp
)


IF(@@ROWCOUNT > 0 )
	SET @result = SCOPE_IDENTITY();
GO






DROP PROCEDURE IF EXISTS dbo.[stpGetHospitalizacionByHospitalizacionId];  
GO 

CREATE PROCEDURE [stpGetHospitalizacionByHospitalizacionId]

	@userId INT,
	@hospitalizacionId INT

AS

SET NOCOUNT ON

SELECT

	[attrHospId],
	[AttrPacNum],
	[AttrIngresoUltimaHosp],
	[AttrEgresoUltimaHosp],
	[AttrDiagUltimaHosp],
	[AttrDiagEgresoUltimaHosp]

FROM [attrHospitalizaciones]
WHERE [attrHospId] = @hospitalizacionId;

GO







DROP PROCEDURE IF EXISTS dbo.[stpGetHospitalizacionesByPacienteId];  
GO 

CREATE PROCEDURE [stpGetHospitalizacionesByPacienteId]

	@userId INT,
	@pacienteId INT

AS

SET NOCOUNT ON

SELECT

	[attrHospId],
	[AttrPacNum],
	[AttrIngresoUltimaHosp],
	[AttrEgresoUltimaHosp],
	[AttrDiagUltimaHosp],
	[AttrDiagEgresoUltimaHosp]

FROM [attrHospitalizaciones]
WHERE [AttrPacNum] = @pacienteId;

GO


Exec [stpGetHospitalizacionesByPacienteId] @userId = 1, @pacienteId = 5;


