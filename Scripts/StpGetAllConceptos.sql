
DROP PROCEDURE IF EXISTS dbo.[stpGetAllConceptosAttr];  
GO 

CREATE PROCEDURE [stpGetAllConceptosAttr]
    @userId INT
AS

SET NOCOUNT ON

Select @userId as [userId],conNumero, [conCodigo],[conTipo],[conNombre],[conParametro],[conInactivo],[conOrden] from [tblConceptos] 
where 
(tblConceptos.conTipo = 'PTR' or
tblConceptos.conTipo = 'CMB' or 
tblConceptos.conTipo = 'IDC' or
tblConceptos.conTipo = 'RSN' or
tblConceptos.conTipo = 'LHF' or
tblConceptos.conTipo = 'TDC' or
tblConceptos.conTipo = 'PSC' or 
tblConceptos.conTipo = 'TME' or
tblConceptos.conTipo = 'MEG' or
tblConceptos.conTipo = 'RMNG' or
tblConceptos.conTipo = 'TRMN' or
tblConceptos.conTipo = 'GPTP' or
tblConceptos.conTipo = 'TATR' or
tblConceptos.conTipo = 'IFM' or
tblConceptos.conTipo = 'MDD' or
tblConceptos.conTipo = 'CPL' or
tblConceptos.conTipo = 'ACS' or
tblConceptos.conTipo = 'DMR' or
tblConceptos.conTipo = 'ADN' or
tblConceptos.conTipo = 'TI'  or
tblConceptos.conTipo = 'ATTR') and
conInactivo = 0;


GO

DROP PROCEDURE IF EXISTS dbo.stpGetAllConceptosAttr;  
GO 



CREATE PROCEDURE [stpGetHisPacienteAttr]
	@UserId int,
	@tipoId smallint,
	@numeroId nvarchar(20)
AS

SET NOCOUNT ON

select @UserId as UserId, pacNumero, pacNombre, pacTipoId, pacNumeroId, pacFechaNac, pacSexo  from hisPacientes
where
	pacTipoId = @tipoId and
	pacNumeroId like @numeroId+'%'; 
GO

DROP PROCEDURE IF EXISTS dbo.[stpGetHisPacienteAttr];  
GO 



CREATE PROCEDURE [stpGetAllHisDiagnosticos]
    @userId INT
AS

SET NOCOUNT ON

Select diaNumero, diaCodigo, diaNombre, diaEdadIni, diaEdadFin, diaSexo from hisDiagnosticos;
GO

EXEC [stpGetAllHisDiagnosticos] @userId = 1;
Go

DROP PROCEDURE IF EXISTS dbo.[stpGetAllHisDiagnosticos];  
GO 

SELECT *
FROM INFORMATION_SCHEMA.COLUMNS
WHERE table_name = 'hisDiagnosticos'





