const { resolve } = require('path');

const root = resolve(__dirname);

/** https://jestjs.io/docs/configuration */
module.exports = {
  rootDir:
    root /**  raiz do diretório que contém o arquivo de configuração do Jest */,
  setupFilesAfterEnv: [
    '<rootDir>/.jest/setup.ts'
  ] /** Uma lista de caminhos para módulos que executam algum código para configurar ou definir a estrutura de teste antes de cada arquivo de teste no conjunto ser executado.  */,
  displayName:
    'root-tests' /** Permite que uma etiqueta seja impressa ao lado de um teste durante sua execução. */,
  testMatch: [
    '<rootDir>/src/**/__tests__/*.tsx'
  ] /** Os padrões global que Jest usa para detectar arquivos de teste. */,
  testEnvironment:
    'jsdom' /** O ambiente de teste que será usado para teste. */,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/'
  ] /** Pastas ou arquivos a serem ignorados  */,
  collectCoverage: true /** Indica que as informações de coleta do teste devem ser coletadas e reportadas no console. */,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/types/**/*.d.ts'
  ] /** Um padrão glob relativo à rootDircorrespondência dos arquivos dos quais as informações de cobertura precisam ser coletadas. */
};
