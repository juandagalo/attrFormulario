CREATE TABLE attrCalidadVida
(
	attrCalId INT IDENTITY(1,1) PRIMARY KEY,
	attrNumero INT NOT NULL,
	attrFechaControlCalidad SMALLDATETIME,
	attrMovilidad SMALLINT,
	attrDolMalest SMALLINT,
	attrAnsiDepre SMALLINT,
	attrCuidPerso SMALLINT,
	attrActiCotid SMALLINT,

	CONSTRAINT FK_attrCalidadVida_attrPacientes_AttrNumero FOREIGN KEY ([AttrNumero])
		REFERENCES attrPacientes(attrNumero),
	CONSTRAINT FK_attrCalidadVida_tlbConceptos_attrMovilidad FOREIGN KEY (attrMovilidad)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_attrCalidadVida_tlbConceptos_attrDolMalest FOREIGN KEY (attrDolMalest)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_attrCalidadVida_tlbConceptos_attrAnsiDepre FOREIGN KEY (attrAnsiDepre)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_attrCalidadVida_tlbConceptos_attrCuidPerso FOREIGN KEY (attrCuidPerso)
            REFERENCES tblConceptos(conNumero),
	CONSTRAINT FK_attrCalidadVida_tlbConceptos_attrActiCotid FOREIGN KEY (attrActiCotid)
            REFERENCES tblConceptos(conNumero)
);
GO



DROP PROCEDURE IF EXISTS dbo.[stpCreateCalidadVida];  
GO 

CREATE PROCEDURE [stpCreateCalidadVida]
	@userId INT,

	@attrNumero INT,
	@attrFechaControlCalidad SMALLDATETIME,
	@attrMovilidad SMALLINT,
	@attrDolMalest SMALLINT,
	@attrAnsiDepre SMALLINT,
	@attrCuidPerso SMALLINT,
	@attrActiCotid SMALLINT,

	@result INT OUTPUT
AS

SET NOCOUNT ON

SET @result = 0

INSERT INTO attrCalidadVida (
	attrNumero,
	attrFechaControlCalidad,
	attrMovilidad,
	attrDolMalest,
	attrAnsiDepre,
	attrCuidPerso,
	attrActiCotid
)

VALUES (    
	@attrNumero,
	@attrFechaControlCalidad,
	@attrMovilidad,
	@attrDolMalest,
	@attrAnsiDepre,
	@attrCuidPerso,
	@attrActiCotid
);

IF(@@ROWCOUNT > 0 )
	SET @result = SCOPE_IDENTITY();
GO



DROP PROCEDURE IF EXISTS dbo.[stpGetCalidadVidaById];  
GO 

CREATE PROCEDURE [stpGetCalidadVidaById]
	@userId INT,
	@calidadVidaId INT
AS

SET NOCOUNT ON

SELECT 
	attrCalId,
	attrNumero,
	attrFechaControlCalidad,
	attrMovilidad,
	attrDolMalest,
	attrAnsiDepre,
	attrCuidPerso,
	attrActiCotid
FROM attrCalidadVida
WHERE attrCalId = @calidadVidaId

GO




DROP PROCEDURE IF EXISTS dbo.[stpGetCalidadVidaByPacienteId];  
GO 

CREATE PROCEDURE [stpGetCalidadVidaByPacienteId]
	@userId INT,
	@pacienteId INT
AS

SET NOCOUNT ON

SELECT 
	attrCalId,
	attrNumero,
	attrFechaControlCalidad,
	attrMovilidad,
	attrDolMalest,
	attrAnsiDepre,
	attrCuidPerso,
	attrActiCotid
FROM attrCalidadVida
WHERE attrNumero = @pacienteId

GO


Select * From attrCalidadVida