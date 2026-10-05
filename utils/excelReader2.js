const XLSX=require('xlsx')
function getCellData(row,column)
{
    const workbook=XLSX.readFile('testdata/ApplicationData.xlsx')
    const sheet=workbook.Sheets['loginpage']
    const cellvalue=XLSX.utils.encode_cell({
        r:row-1,
        c:column-1
    })
    const cell=sheet[cellvalue]
return cell?cell.v:undefined

}
module.exports={getCellData}