// Chamar as dependencias 
const { throws } = require('assert');
const { readFile } = require('fs/promises');
const {join} = require('path');
//chamar o arquivo de erro
const { error } = require('../src/constants')
//* Limite de linhas e tudo mais 
const DEFAULT_OPTIONS = {
    maxLines: 3,
    fields: ["id","name","profession", "age"]
}
// chamar os metodos do File
class File { 
    static async csvToJson(filePath){
        const  content = await File.getFileContent(filePath);
        const validation = await File.isValid(content);
        if(validation.valid) throw new  Error(validation.error)
        return content
    }

    static async getFileContent(filePath){
        const filename = join(__dirname, filePath);
        return (await readFile(filename)).toString("utf-8");
    }
    //* Esquema de validação 
    static isValid(csvString, options = DEFAULT_OPTIONS){
        //Quebra de linhas
        const [header,...fileWithoutHeader] = csvString.split('\n');
        const isHeaderValid =  header === options.fields.join(',')
        if (!isHeaderValid) {
            return{
                error: error.FILE_FIELDS_ERROR_MESSAGE,
                valid: false
            }     
        }
        const isContentLengthAccepted = ( 
            fileWithoutHeader.length > 0 &&
            fileWithoutHeader.length <= options.maxLines
        )
        if(!isContentLengthAccepted){
            return{
                error: error.FILE_FIELDS_ERROR_MESSAGE,
                valid: false
            }
            return{ valid: true }
        }
    }

}
//Função responsavel para verificar se é verdadeiro ou falso

(async () => { 
     const result = await File.csvToJson('./../mocks/threeItems-valid.csv');
    //  const result = await File.csvToJson('./../mocks/fourItems-invalid.csv');
    //* const result = await File.csvToJson('./../mocks/invalid-header.csv');
    console.log('result', result);
})();