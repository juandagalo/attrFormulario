CREATE TABLE [attrComorbilidades]
(
	[attrComorbId] INT IDENTITY(1,1) PRIMARY KEY,

	[attrPacNum] INT NOT NULL,

	[attrComorb] SMALLINT NOT NULL,

	[CreateDate] SMALLDATETIME NOT NULL DEFAULT getDate(),

	CONSTRAINT FK_attrPersonas_attrComorbilidades_attrPacNum FOREIGN KEY ([attrPacNum])
		REFERENCES [attrPacientes]([attrNumero]),

	CONSTRAINT FK_tblConceptos_attrComorbilidades_attrComorb FOREIGN KEY (attrComorb)
		REFERENCES tblConceptos(conNumero)
);
Go




DROP PROCEDURE IF EXISTS dbo.[stpCreateComorbilidadAttr];  
GO 

CREATE PROCEDURE [stpCreateComorbilidadAttr]
	@userId INT,

	@attrPacNum INT,
	@attrComorb SMALLINT,

    @result INT OUTPUT
AS

SET NOCOUNT ON

SET @result = 0

INSERT INTO [attrComorbilidades](
	[AttrPacNum],
	[attrComorb]
)VALUES(
	@attrPacNum,
	@attrComorb
)


IF(@@ROWCOUNT > 0 )
	SET @result = SCOPE_IDENTITY();
GO




DROP PROCEDURE IF EXISTS dbo.[stpGetComorbilidadByComorbilidadId];  
GO 

CREATE PROCEDURE [stpGetComorbilidadByComorbilidadId]

	@userId INT,
	@comorbilidadId INT

AS

SET NOCOUNT ON

SELECT

	[attrComorbId],
	[attrPacNum],
	[attrComorb],
	[CreateDate]

FROM [attrComorbilidades]
WHERE [attrComorbId] = @comorbilidadId;

GO




DROP PROCEDURE IF EXISTS dbo.[stpGetComorbilidadByPacienteId];  
GO 

CREATE PROCEDURE [stpGetComorbilidadByPacienteId]

	@userId INT,
	@pacienteId INT

AS

SET NOCOUNT ON

SELECT

	[attrComorbId],
	[attrPacNum],
	[attrComorb],
	[CreateDate]

FROM [attrComorbilidades]
WHERE [attrPacNum] = @pacienteId;

GO