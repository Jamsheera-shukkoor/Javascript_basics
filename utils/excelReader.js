const XLSX=require('xlsx')
function getData()
{
    const workbook=XLSX.readFile('testdata/ApplicationData.xlsx')
    const sheet=workbook.Sheets['loginpage']
    const data=XLSX.utils.sheet_to_json(sheet)
    return data
}
module.exports={getData}