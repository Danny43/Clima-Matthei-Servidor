let { Registro,
    Temperatura,
    TermometroSeco,
    TermometroHumedo,
    PresionAtmosferica,
    DireccionViento,
    Nubosidad,
    Visibilidad,
    Geotermometro
    } = require('./models');

let importExcel = require('convert-excel-to-json');
class ConvertSEPTIEMBRE{
   result;
   constructor(filename){
       this.result = importExcel({
           sourceFile: './excel/'+ filename
       });        
   }

   async getAguasCaidas(){
       var aguaCaida = [];

       aguaCaida.push(this.result.SEPTIEMBRE[3].E);
       aguaCaida.push(this.result.SEPTIEMBRE[3].F);
       aguaCaida.push(this.result.SEPTIEMBRE[3].G);
       aguaCaida.push(this.result.SEPTIEMBRE[3].H);
       aguaCaida.push(this.result.SEPTIEMBRE[3].I);
       aguaCaida.push(this.result.SEPTIEMBRE[3].J);
       aguaCaida.push(this.result.SEPTIEMBRE[3].K);
       aguaCaida.push(this.result.SEPTIEMBRE[3].L);
       aguaCaida.push(this.result.SEPTIEMBRE[3].M);
       aguaCaida.push(this.result.SEPTIEMBRE[3].N);
       aguaCaida.push(this.result.SEPTIEMBRE[3].O);
       aguaCaida.push(this.result.SEPTIEMBRE[3].P);
       aguaCaida.push(this.result.SEPTIEMBRE[3].Q);
       aguaCaida.push(this.result.SEPTIEMBRE[3].R);
       aguaCaida.push(this.result.SEPTIEMBRE[3].S);
       aguaCaida.push(this.result.SEPTIEMBRE[3].T);
       aguaCaida.push(this.result.SEPTIEMBRE[3].U);
       aguaCaida.push(this.result.SEPTIEMBRE[3].V);
       aguaCaida.push(this.result.SEPTIEMBRE[3].W);
       aguaCaida.push(this.result.SEPTIEMBRE[3].X);
       aguaCaida.push(this.result.SEPTIEMBRE[3].Y);
       aguaCaida.push(this.result.SEPTIEMBRE[3].Z);
       aguaCaida.push(this.result.SEPTIEMBRE[3].AA);
       aguaCaida.push(this.result.SEPTIEMBRE[3].AB);
       aguaCaida.push(this.result.SEPTIEMBRE[3].AC);
       aguaCaida.push(this.result.SEPTIEMBRE[3].AD);
       aguaCaida.push(this.result.SEPTIEMBRE[3].AE);
       aguaCaida.push(this.result.SEPTIEMBRE[3].AF);
       aguaCaida.push(this.result.SEPTIEMBRE[3].AG);
       aguaCaida.push(this.result.SEPTIEMBRE[3].AH);

       return aguaCaida;
   }

   async getTemperaturasMinimas(){
       var temperaturaMinima = [];

       temperaturaMinima.push(this.result.SEPTIEMBRE[5].E);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].F);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].G);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].H);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].I);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].J);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].K);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].L);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].M);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].N);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].O);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].P);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].Q);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].R);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].S);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].T);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].U);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].V);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].W);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].X);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].Y);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].Z);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].AA);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].AB);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].AC);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].AD);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].AE);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].AF);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].AG);
       temperaturaMinima.push(this.result.SEPTIEMBRE[5].AH);

       return temperaturaMinima;
   }

   async getTemperaturasMaximas(){
       var temperaturaMaxima = [];

       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].E);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].F);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].G);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].H);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].I);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].J);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].K);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].L);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].M);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].N);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].O);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].P);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].Q);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].R);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].S);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].T);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].U);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].V);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].W);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].X);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].Y);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].Z);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].AA);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].AB);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].AC);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].AD);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].AE);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].AF);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].AG);
       temperaturaMaxima.push(this.result.SEPTIEMBRE[6].AH);

       return temperaturaMaxima;
   }

   async getTermometrosSecosH0830(){
       var tS830 = [];

       tS830.push(this.result.SEPTIEMBRE[8].E);
       tS830.push(this.result.SEPTIEMBRE[8].F);
       tS830.push(this.result.SEPTIEMBRE[8].G);
       tS830.push(this.result.SEPTIEMBRE[8].H);
       tS830.push(this.result.SEPTIEMBRE[8].I);
       tS830.push(this.result.SEPTIEMBRE[8].J);
       tS830.push(this.result.SEPTIEMBRE[8].K);
       tS830.push(this.result.SEPTIEMBRE[8].L);
       tS830.push(this.result.SEPTIEMBRE[8].M);
       tS830.push(this.result.SEPTIEMBRE[8].N);
       tS830.push(this.result.SEPTIEMBRE[8].O);
       tS830.push(this.result.SEPTIEMBRE[8].P);
       tS830.push(this.result.SEPTIEMBRE[8].Q);
       tS830.push(this.result.SEPTIEMBRE[8].R);
       tS830.push(this.result.SEPTIEMBRE[8].S);
       tS830.push(this.result.SEPTIEMBRE[8].T);
       tS830.push(this.result.SEPTIEMBRE[8].U);
       tS830.push(this.result.SEPTIEMBRE[8].V);
       tS830.push(this.result.SEPTIEMBRE[8].W);
       tS830.push(this.result.SEPTIEMBRE[8].X);
       tS830.push(this.result.SEPTIEMBRE[8].Y);
       tS830.push(this.result.SEPTIEMBRE[8].Z);
       tS830.push(this.result.SEPTIEMBRE[8].AA);
       tS830.push(this.result.SEPTIEMBRE[8].AB);
       tS830.push(this.result.SEPTIEMBRE[8].AC);
       tS830.push(this.result.SEPTIEMBRE[8].AD);
       tS830.push(this.result.SEPTIEMBRE[8].AE);
       tS830.push(this.result.SEPTIEMBRE[8].AF);
       tS830.push(this.result.SEPTIEMBRE[8].AG);
       tS830.push(this.result.SEPTIEMBRE[8].AH);

       return tS830;
   }
   
   async getTermometrosSecosH1400(){
       var tS1400 = [];

       tS1400.push(this.result.SEPTIEMBRE[9].E);
       tS1400.push(this.result.SEPTIEMBRE[9].F);
       tS1400.push(this.result.SEPTIEMBRE[9].G);
       tS1400.push(this.result.SEPTIEMBRE[9].H);
       tS1400.push(this.result.SEPTIEMBRE[9].I);
       tS1400.push(this.result.SEPTIEMBRE[9].J);
       tS1400.push(this.result.SEPTIEMBRE[9].K);
       tS1400.push(this.result.SEPTIEMBRE[9].L);
       tS1400.push(this.result.SEPTIEMBRE[9].M);
       tS1400.push(this.result.SEPTIEMBRE[9].N);
       tS1400.push(this.result.SEPTIEMBRE[9].O);
       tS1400.push(this.result.SEPTIEMBRE[9].P);
       tS1400.push(this.result.SEPTIEMBRE[9].Q);
       tS1400.push(this.result.SEPTIEMBRE[9].R);
       tS1400.push(this.result.SEPTIEMBRE[9].S);
       tS1400.push(this.result.SEPTIEMBRE[9].T);
       tS1400.push(this.result.SEPTIEMBRE[9].U);
       tS1400.push(this.result.SEPTIEMBRE[9].V);
       tS1400.push(this.result.SEPTIEMBRE[9].W);
       tS1400.push(this.result.SEPTIEMBRE[9].X);
       tS1400.push(this.result.SEPTIEMBRE[9].Y);
       tS1400.push(this.result.SEPTIEMBRE[9].Z);
       tS1400.push(this.result.SEPTIEMBRE[9].AA);
       tS1400.push(this.result.SEPTIEMBRE[9].AB);
       tS1400.push(this.result.SEPTIEMBRE[9].AC);
       tS1400.push(this.result.SEPTIEMBRE[9].AD);
       tS1400.push(this.result.SEPTIEMBRE[9].AE);
       tS1400.push(this.result.SEPTIEMBRE[9].AF);
       tS1400.push(this.result.SEPTIEMBRE[9].AG);
       tS1400.push(this.result.SEPTIEMBRE[9].AH);
       
       return tS1400;
   }
   
   async getTermometrosSecosH1800(){
       var tS1800 = [];

       tS1800.push(this.result.SEPTIEMBRE[10].E);
       tS1800.push(this.result.SEPTIEMBRE[10].F);
       tS1800.push(this.result.SEPTIEMBRE[10].G);
       tS1800.push(this.result.SEPTIEMBRE[10].H);
       tS1800.push(this.result.SEPTIEMBRE[10].I);
       tS1800.push(this.result.SEPTIEMBRE[10].J);
       tS1800.push(this.result.SEPTIEMBRE[10].K);
       tS1800.push(this.result.SEPTIEMBRE[10].L);
       tS1800.push(this.result.SEPTIEMBRE[10].M);
       tS1800.push(this.result.SEPTIEMBRE[10].N);
       tS1800.push(this.result.SEPTIEMBRE[10].O);
       tS1800.push(this.result.SEPTIEMBRE[10].P);
       tS1800.push(this.result.SEPTIEMBRE[10].Q);
       tS1800.push(this.result.SEPTIEMBRE[10].R);
       tS1800.push(this.result.SEPTIEMBRE[10].S);
       tS1800.push(this.result.SEPTIEMBRE[10].T);
       tS1800.push(this.result.SEPTIEMBRE[10].U);
       tS1800.push(this.result.SEPTIEMBRE[10].V);
       tS1800.push(this.result.SEPTIEMBRE[10].W);
       tS1800.push(this.result.SEPTIEMBRE[10].X);
       tS1800.push(this.result.SEPTIEMBRE[10].Y);
       tS1800.push(this.result.SEPTIEMBRE[10].Z);
       tS1800.push(this.result.SEPTIEMBRE[10].AA);
       tS1800.push(this.result.SEPTIEMBRE[10].AB);
       tS1800.push(this.result.SEPTIEMBRE[10].AC);
       tS1800.push(this.result.SEPTIEMBRE[10].AD);
       tS1800.push(this.result.SEPTIEMBRE[10].AE);
       tS1800.push(this.result.SEPTIEMBRE[10].AF);
       tS1800.push(this.result.SEPTIEMBRE[10].AG);
       tS1800.push(this.result.SEPTIEMBRE[10].AH);

       return tS1800;
   }

   async getTermometrosHumedosH0830(){
       var tH830 = [];

       tH830.push(this.result.SEPTIEMBRE[11].E);
       tH830.push(this.result.SEPTIEMBRE[11].F);
       tH830.push(this.result.SEPTIEMBRE[11].G);
       tH830.push(this.result.SEPTIEMBRE[11].H);
       tH830.push(this.result.SEPTIEMBRE[11].I);
       tH830.push(this.result.SEPTIEMBRE[11].J);
       tH830.push(this.result.SEPTIEMBRE[11].K);
       tH830.push(this.result.SEPTIEMBRE[11].L);
       tH830.push(this.result.SEPTIEMBRE[11].M);
       tH830.push(this.result.SEPTIEMBRE[11].N);
       tH830.push(this.result.SEPTIEMBRE[11].O);
       tH830.push(this.result.SEPTIEMBRE[11].P);
       tH830.push(this.result.SEPTIEMBRE[11].Q);
       tH830.push(this.result.SEPTIEMBRE[11].R);
       tH830.push(this.result.SEPTIEMBRE[11].S);
       tH830.push(this.result.SEPTIEMBRE[11].T);
       tH830.push(this.result.SEPTIEMBRE[11].U);
       tH830.push(this.result.SEPTIEMBRE[11].V);
       tH830.push(this.result.SEPTIEMBRE[11].W);
       tH830.push(this.result.SEPTIEMBRE[11].X);
       tH830.push(this.result.SEPTIEMBRE[11].Y);
       tH830.push(this.result.SEPTIEMBRE[11].Z);
       tH830.push(this.result.SEPTIEMBRE[11].AA);
       tH830.push(this.result.SEPTIEMBRE[11].AB);
       tH830.push(this.result.SEPTIEMBRE[11].AC);
       tH830.push(this.result.SEPTIEMBRE[11].AD);
       tH830.push(this.result.SEPTIEMBRE[11].AE);
       tH830.push(this.result.SEPTIEMBRE[11].AF);
       tH830.push(this.result.SEPTIEMBRE[11].AG);
       tH830.push(this.result.SEPTIEMBRE[11].AH);

       return tH830;
   }

   async getTermometrosHumedosH1400(){
       var tH1400 = [];

       tH1400.push(this.result.SEPTIEMBRE[12].E);
       tH1400.push(this.result.SEPTIEMBRE[12].F);
       tH1400.push(this.result.SEPTIEMBRE[12].G);
       tH1400.push(this.result.SEPTIEMBRE[12].H);
       tH1400.push(this.result.SEPTIEMBRE[12].I);
       tH1400.push(this.result.SEPTIEMBRE[12].J);
       tH1400.push(this.result.SEPTIEMBRE[12].K);
       tH1400.push(this.result.SEPTIEMBRE[12].L);
       tH1400.push(this.result.SEPTIEMBRE[12].M);
       tH1400.push(this.result.SEPTIEMBRE[12].N);
       tH1400.push(this.result.SEPTIEMBRE[12].O);
       tH1400.push(this.result.SEPTIEMBRE[12].P);
       tH1400.push(this.result.SEPTIEMBRE[12].Q);
       tH1400.push(this.result.SEPTIEMBRE[12].R);
       tH1400.push(this.result.SEPTIEMBRE[12].S);
       tH1400.push(this.result.SEPTIEMBRE[12].T);
       tH1400.push(this.result.SEPTIEMBRE[12].U);
       tH1400.push(this.result.SEPTIEMBRE[12].V);
       tH1400.push(this.result.SEPTIEMBRE[12].W);
       tH1400.push(this.result.SEPTIEMBRE[12].X);
       tH1400.push(this.result.SEPTIEMBRE[12].Y);
       tH1400.push(this.result.SEPTIEMBRE[12].Z);
       tH1400.push(this.result.SEPTIEMBRE[12].AA);
       tH1400.push(this.result.SEPTIEMBRE[12].AB);
       tH1400.push(this.result.SEPTIEMBRE[12].AC);
       tH1400.push(this.result.SEPTIEMBRE[12].AD);
       tH1400.push(this.result.SEPTIEMBRE[12].AE);
       tH1400.push(this.result.SEPTIEMBRE[12].AF);
       tH1400.push(this.result.SEPTIEMBRE[12].AG);
       tH1400.push(this.result.SEPTIEMBRE[12].AH);

       return tH1400;
   }

   async getTermometrosHumedosH1800(){
       var tH1800 = [];

       tH1800.push(this.result.SEPTIEMBRE[13].E);
       tH1800.push(this.result.SEPTIEMBRE[13].F);
       tH1800.push(this.result.SEPTIEMBRE[13].G);
       tH1800.push(this.result.SEPTIEMBRE[13].H);
       tH1800.push(this.result.SEPTIEMBRE[13].I);
       tH1800.push(this.result.SEPTIEMBRE[13].J);
       tH1800.push(this.result.SEPTIEMBRE[13].K);
       tH1800.push(this.result.SEPTIEMBRE[13].L);
       tH1800.push(this.result.SEPTIEMBRE[13].M);
       tH1800.push(this.result.SEPTIEMBRE[13].N);
       tH1800.push(this.result.SEPTIEMBRE[13].O);
       tH1800.push(this.result.SEPTIEMBRE[13].P);
       tH1800.push(this.result.SEPTIEMBRE[13].Q);
       tH1800.push(this.result.SEPTIEMBRE[13].R);
       tH1800.push(this.result.SEPTIEMBRE[13].S);
       tH1800.push(this.result.SEPTIEMBRE[13].T);
       tH1800.push(this.result.SEPTIEMBRE[13].U);
       tH1800.push(this.result.SEPTIEMBRE[13].V);
       tH1800.push(this.result.SEPTIEMBRE[13].W);
       tH1800.push(this.result.SEPTIEMBRE[13].X);
       tH1800.push(this.result.SEPTIEMBRE[13].Y);
       tH1800.push(this.result.SEPTIEMBRE[13].Z);
       tH1800.push(this.result.SEPTIEMBRE[13].AA);
       tH1800.push(this.result.SEPTIEMBRE[13].AB);
       tH1800.push(this.result.SEPTIEMBRE[13].AC);
       tH1800.push(this.result.SEPTIEMBRE[13].AD);
       tH1800.push(this.result.SEPTIEMBRE[13].AE);
       tH1800.push(this.result.SEPTIEMBRE[13].AF);
       tH1800.push(this.result.SEPTIEMBRE[13].AG);
       tH1800.push(this.result.SEPTIEMBRE[13].AH);

       return tH1800;
   }

   async getPresionesAtmosfericasH0830(){
       var pA830 = [];

       pA830.push(this.result.SEPTIEMBRE[17].E);
       pA830.push(this.result.SEPTIEMBRE[17].F);
       pA830.push(this.result.SEPTIEMBRE[17].G);
       pA830.push(this.result.SEPTIEMBRE[17].H);
       pA830.push(this.result.SEPTIEMBRE[17].I);
       pA830.push(this.result.SEPTIEMBRE[17].J);
       pA830.push(this.result.SEPTIEMBRE[17].K);
       pA830.push(this.result.SEPTIEMBRE[17].L);
       pA830.push(this.result.SEPTIEMBRE[17].M);
       pA830.push(this.result.SEPTIEMBRE[17].N);
       pA830.push(this.result.SEPTIEMBRE[17].O);
       pA830.push(this.result.SEPTIEMBRE[17].P);
       pA830.push(this.result.SEPTIEMBRE[17].Q);
       pA830.push(this.result.SEPTIEMBRE[17].R);
       pA830.push(this.result.SEPTIEMBRE[17].S);
       pA830.push(this.result.SEPTIEMBRE[17].T);
       pA830.push(this.result.SEPTIEMBRE[17].U);
       pA830.push(this.result.SEPTIEMBRE[17].V);
       pA830.push(this.result.SEPTIEMBRE[17].W);
       pA830.push(this.result.SEPTIEMBRE[17].X);
       pA830.push(this.result.SEPTIEMBRE[17].Y);
       pA830.push(this.result.SEPTIEMBRE[17].Z);
       pA830.push(this.result.SEPTIEMBRE[17].AA);
       pA830.push(this.result.SEPTIEMBRE[17].AB);
       pA830.push(this.result.SEPTIEMBRE[17].AC);
       pA830.push(this.result.SEPTIEMBRE[17].AD);
       pA830.push(this.result.SEPTIEMBRE[17].AE);
       pA830.push(this.result.SEPTIEMBRE[17].AF);
       pA830.push(this.result.SEPTIEMBRE[17].AG);
       pA830.push(this.result.SEPTIEMBRE[17].AH);

       return pA830;
   }

   async getPresionesAtmosfericasH1400(){
       var pA1400 = [];

       pA1400.push(this.result.SEPTIEMBRE[18].E);
       pA1400.push(this.result.SEPTIEMBRE[18].F);
       pA1400.push(this.result.SEPTIEMBRE[18].G);
       pA1400.push(this.result.SEPTIEMBRE[18].H);
       pA1400.push(this.result.SEPTIEMBRE[18].I);
       pA1400.push(this.result.SEPTIEMBRE[18].J);
       pA1400.push(this.result.SEPTIEMBRE[18].K);
       pA1400.push(this.result.SEPTIEMBRE[18].L);
       pA1400.push(this.result.SEPTIEMBRE[18].M);
       pA1400.push(this.result.SEPTIEMBRE[18].N);
       pA1400.push(this.result.SEPTIEMBRE[18].O);
       pA1400.push(this.result.SEPTIEMBRE[18].P);
       pA1400.push(this.result.SEPTIEMBRE[18].Q);
       pA1400.push(this.result.SEPTIEMBRE[18].R);
       pA1400.push(this.result.SEPTIEMBRE[18].S);
       pA1400.push(this.result.SEPTIEMBRE[18].T);
       pA1400.push(this.result.SEPTIEMBRE[18].U);
       pA1400.push(this.result.SEPTIEMBRE[18].V);
       pA1400.push(this.result.SEPTIEMBRE[18].W);
       pA1400.push(this.result.SEPTIEMBRE[18].X);
       pA1400.push(this.result.SEPTIEMBRE[18].Y);
       pA1400.push(this.result.SEPTIEMBRE[18].Z);
       pA1400.push(this.result.SEPTIEMBRE[18].AA);
       pA1400.push(this.result.SEPTIEMBRE[18].AB);
       pA1400.push(this.result.SEPTIEMBRE[18].AC);
       pA1400.push(this.result.SEPTIEMBRE[18].AD);
       pA1400.push(this.result.SEPTIEMBRE[18].AE);
       pA1400.push(this.result.SEPTIEMBRE[18].AF);
       pA1400.push(this.result.SEPTIEMBRE[18].AG);
       pA1400.push(this.result.SEPTIEMBRE[18].AH);

       return pA1400;
   }

   async getPresionesAtmosfericasH1800(){
       var pA1800 = [];

       pA1800.push(this.result.SEPTIEMBRE[19].E);
       pA1800.push(this.result.SEPTIEMBRE[19].F);
       pA1800.push(this.result.SEPTIEMBRE[19].G);
       pA1800.push(this.result.SEPTIEMBRE[19].H);
       pA1800.push(this.result.SEPTIEMBRE[19].I);
       pA1800.push(this.result.SEPTIEMBRE[19].J);
       pA1800.push(this.result.SEPTIEMBRE[19].K);
       pA1800.push(this.result.SEPTIEMBRE[19].L);
       pA1800.push(this.result.SEPTIEMBRE[19].M);
       pA1800.push(this.result.SEPTIEMBRE[19].N);
       pA1800.push(this.result.SEPTIEMBRE[19].O);
       pA1800.push(this.result.SEPTIEMBRE[19].P);
       pA1800.push(this.result.SEPTIEMBRE[19].Q);
       pA1800.push(this.result.SEPTIEMBRE[19].R);
       pA1800.push(this.result.SEPTIEMBRE[19].S);
       pA1800.push(this.result.SEPTIEMBRE[19].T);
       pA1800.push(this.result.SEPTIEMBRE[19].U);
       pA1800.push(this.result.SEPTIEMBRE[19].V);
       pA1800.push(this.result.SEPTIEMBRE[19].W);
       pA1800.push(this.result.SEPTIEMBRE[19].X);
       pA1800.push(this.result.SEPTIEMBRE[19].Y);
       pA1800.push(this.result.SEPTIEMBRE[19].Z);
       pA1800.push(this.result.SEPTIEMBRE[19].AA);
       pA1800.push(this.result.SEPTIEMBRE[19].AB);
       pA1800.push(this.result.SEPTIEMBRE[19].AC);
       pA1800.push(this.result.SEPTIEMBRE[19].AD);
       pA1800.push(this.result.SEPTIEMBRE[19].AE);
       pA1800.push(this.result.SEPTIEMBRE[19].AF);
       pA1800.push(this.result.SEPTIEMBRE[19].AG);
       pA1800.push(this.result.SEPTIEMBRE[19].AH);

       return pA1800;
   }

   async getDireccionesVientosH0830(){
       var dV830 = [];

       dV830.push(this.result.SEPTIEMBRE[20].E);
       dV830.push(this.result.SEPTIEMBRE[20].F);
       dV830.push(this.result.SEPTIEMBRE[20].G);
       dV830.push(this.result.SEPTIEMBRE[20].H);
       dV830.push(this.result.SEPTIEMBRE[20].I);
       dV830.push(this.result.SEPTIEMBRE[20].J);
       dV830.push(this.result.SEPTIEMBRE[20].K);
       dV830.push(this.result.SEPTIEMBRE[20].L);
       dV830.push(this.result.SEPTIEMBRE[20].M);
       dV830.push(this.result.SEPTIEMBRE[20].N);
       dV830.push(this.result.SEPTIEMBRE[20].O);
       dV830.push(this.result.SEPTIEMBRE[20].P);
       dV830.push(this.result.SEPTIEMBRE[20].Q);
       dV830.push(this.result.SEPTIEMBRE[20].R);
       dV830.push(this.result.SEPTIEMBRE[20].S);
       dV830.push(this.result.SEPTIEMBRE[20].T);
       dV830.push(this.result.SEPTIEMBRE[20].U);
       dV830.push(this.result.SEPTIEMBRE[20].V);
       dV830.push(this.result.SEPTIEMBRE[20].W);
       dV830.push(this.result.SEPTIEMBRE[20].X);
       dV830.push(this.result.SEPTIEMBRE[20].Y);
       dV830.push(this.result.SEPTIEMBRE[20].Z);
       dV830.push(this.result.SEPTIEMBRE[20].AA);
       dV830.push(this.result.SEPTIEMBRE[20].AB);
       dV830.push(this.result.SEPTIEMBRE[20].AC);
       dV830.push(this.result.SEPTIEMBRE[20].AD);
       dV830.push(this.result.SEPTIEMBRE[20].AE);
       dV830.push(this.result.SEPTIEMBRE[20].AF);
       dV830.push(this.result.SEPTIEMBRE[20].AG);
       dV830.push(this.result.SEPTIEMBRE[20].AH);

       return dV830;
   }

   async getDireccionesVientosH1400(){
       var dV1400 = [];

       dV1400.push(this.result.SEPTIEMBRE[21].E);
       dV1400.push(this.result.SEPTIEMBRE[21].F);
       dV1400.push(this.result.SEPTIEMBRE[21].G);
       dV1400.push(this.result.SEPTIEMBRE[21].H);
       dV1400.push(this.result.SEPTIEMBRE[21].I);
       dV1400.push(this.result.SEPTIEMBRE[21].J);
       dV1400.push(this.result.SEPTIEMBRE[21].K);
       dV1400.push(this.result.SEPTIEMBRE[21].L);
       dV1400.push(this.result.SEPTIEMBRE[21].M);
       dV1400.push(this.result.SEPTIEMBRE[21].N);
       dV1400.push(this.result.SEPTIEMBRE[21].O);
       dV1400.push(this.result.SEPTIEMBRE[21].P);
       dV1400.push(this.result.SEPTIEMBRE[21].Q);
       dV1400.push(this.result.SEPTIEMBRE[21].R);
       dV1400.push(this.result.SEPTIEMBRE[21].S);
       dV1400.push(this.result.SEPTIEMBRE[21].T);
       dV1400.push(this.result.SEPTIEMBRE[21].U);
       dV1400.push(this.result.SEPTIEMBRE[21].V);
       dV1400.push(this.result.SEPTIEMBRE[21].W);
       dV1400.push(this.result.SEPTIEMBRE[21].X);
       dV1400.push(this.result.SEPTIEMBRE[21].Y);
       dV1400.push(this.result.SEPTIEMBRE[21].Z);
       dV1400.push(this.result.SEPTIEMBRE[21].AA);
       dV1400.push(this.result.SEPTIEMBRE[21].AB);
       dV1400.push(this.result.SEPTIEMBRE[21].AC);
       dV1400.push(this.result.SEPTIEMBRE[21].AD);
       dV1400.push(this.result.SEPTIEMBRE[21].AE);
       dV1400.push(this.result.SEPTIEMBRE[21].AF);
       dV1400.push(this.result.SEPTIEMBRE[21].AG);
       dV1400.push(this.result.SEPTIEMBRE[21].AH);

       return dV1400;
   }

   async getDireccionesVientosH1800(){
       var dV1800 = [];

       dV1800.push(this.result.SEPTIEMBRE[22].E);
       dV1800.push(this.result.SEPTIEMBRE[22].F);
       dV1800.push(this.result.SEPTIEMBRE[22].G);
       dV1800.push(this.result.SEPTIEMBRE[22].H);
       dV1800.push(this.result.SEPTIEMBRE[22].I);
       dV1800.push(this.result.SEPTIEMBRE[22].J);
       dV1800.push(this.result.SEPTIEMBRE[22].K);
       dV1800.push(this.result.SEPTIEMBRE[22].L);
       dV1800.push(this.result.SEPTIEMBRE[22].M);
       dV1800.push(this.result.SEPTIEMBRE[22].N);
       dV1800.push(this.result.SEPTIEMBRE[22].O);
       dV1800.push(this.result.SEPTIEMBRE[22].P);
       dV1800.push(this.result.SEPTIEMBRE[22].Q);
       dV1800.push(this.result.SEPTIEMBRE[22].R);
       dV1800.push(this.result.SEPTIEMBRE[22].S);
       dV1800.push(this.result.SEPTIEMBRE[22].T);
       dV1800.push(this.result.SEPTIEMBRE[22].U);
       dV1800.push(this.result.SEPTIEMBRE[22].V);
       dV1800.push(this.result.SEPTIEMBRE[22].W);
       dV1800.push(this.result.SEPTIEMBRE[22].X);
       dV1800.push(this.result.SEPTIEMBRE[22].Y);
       dV1800.push(this.result.SEPTIEMBRE[22].Z);
       dV1800.push(this.result.SEPTIEMBRE[22].AA);
       dV1800.push(this.result.SEPTIEMBRE[22].AB);
       dV1800.push(this.result.SEPTIEMBRE[22].AC);
       dV1800.push(this.result.SEPTIEMBRE[22].AD);
       dV1800.push(this.result.SEPTIEMBRE[22].AE);
       dV1800.push(this.result.SEPTIEMBRE[22].AF);
       dV1800.push(this.result.SEPTIEMBRE[22].AG);
       dV1800.push(this.result.SEPTIEMBRE[22].AH);

       return dV1800;
   }

   async getNubosidadesH0830(){
       var nub830 = [];

       nub830.push(this.result.SEPTIEMBRE[23].E);
       nub830.push(this.result.SEPTIEMBRE[23].F);
       nub830.push(this.result.SEPTIEMBRE[23].G);
       nub830.push(this.result.SEPTIEMBRE[23].H);
       nub830.push(this.result.SEPTIEMBRE[23].I);
       nub830.push(this.result.SEPTIEMBRE[23].J);
       nub830.push(this.result.SEPTIEMBRE[23].K);
       nub830.push(this.result.SEPTIEMBRE[23].L);
       nub830.push(this.result.SEPTIEMBRE[23].M);
       nub830.push(this.result.SEPTIEMBRE[23].N);
       nub830.push(this.result.SEPTIEMBRE[23].O);
       nub830.push(this.result.SEPTIEMBRE[23].P);
       nub830.push(this.result.SEPTIEMBRE[23].Q);
       nub830.push(this.result.SEPTIEMBRE[23].R);
       nub830.push(this.result.SEPTIEMBRE[23].S);
       nub830.push(this.result.SEPTIEMBRE[23].T);
       nub830.push(this.result.SEPTIEMBRE[23].U);
       nub830.push(this.result.SEPTIEMBRE[23].V);
       nub830.push(this.result.SEPTIEMBRE[23].W);
       nub830.push(this.result.SEPTIEMBRE[23].X);
       nub830.push(this.result.SEPTIEMBRE[23].Y);
       nub830.push(this.result.SEPTIEMBRE[23].Z);
       nub830.push(this.result.SEPTIEMBRE[23].AA);
       nub830.push(this.result.SEPTIEMBRE[23].AB);
       nub830.push(this.result.SEPTIEMBRE[23].AC);
       nub830.push(this.result.SEPTIEMBRE[23].AD);
       nub830.push(this.result.SEPTIEMBRE[23].AE);
       nub830.push(this.result.SEPTIEMBRE[23].AF);
       nub830.push(this.result.SEPTIEMBRE[23].AG);
       nub830.push(this.result.SEPTIEMBRE[23].AH);

       return nub830;
   }

   async getNubosidadesH1400(){
       var nub1400 = [];

       nub1400.push(this.result.SEPTIEMBRE[24].E);
       nub1400.push(this.result.SEPTIEMBRE[24].F);
       nub1400.push(this.result.SEPTIEMBRE[24].G);
       nub1400.push(this.result.SEPTIEMBRE[24].H);
       nub1400.push(this.result.SEPTIEMBRE[24].I);
       nub1400.push(this.result.SEPTIEMBRE[24].J);
       nub1400.push(this.result.SEPTIEMBRE[24].K);
       nub1400.push(this.result.SEPTIEMBRE[24].L);
       nub1400.push(this.result.SEPTIEMBRE[24].M);
       nub1400.push(this.result.SEPTIEMBRE[24].N);
       nub1400.push(this.result.SEPTIEMBRE[24].O);
       nub1400.push(this.result.SEPTIEMBRE[24].P);
       nub1400.push(this.result.SEPTIEMBRE[24].Q);
       nub1400.push(this.result.SEPTIEMBRE[24].R);
       nub1400.push(this.result.SEPTIEMBRE[24].S);
       nub1400.push(this.result.SEPTIEMBRE[24].T);
       nub1400.push(this.result.SEPTIEMBRE[24].U);
       nub1400.push(this.result.SEPTIEMBRE[24].V);
       nub1400.push(this.result.SEPTIEMBRE[24].W);
       nub1400.push(this.result.SEPTIEMBRE[24].X);
       nub1400.push(this.result.SEPTIEMBRE[24].Y);
       nub1400.push(this.result.SEPTIEMBRE[24].Z);
       nub1400.push(this.result.SEPTIEMBRE[24].AA);
       nub1400.push(this.result.SEPTIEMBRE[24].AB);
       nub1400.push(this.result.SEPTIEMBRE[24].AC);
       nub1400.push(this.result.SEPTIEMBRE[24].AD);
       nub1400.push(this.result.SEPTIEMBRE[24].AE);
       nub1400.push(this.result.SEPTIEMBRE[24].AF);
       nub1400.push(this.result.SEPTIEMBRE[24].AG);
       nub1400.push(this.result.SEPTIEMBRE[24].AH);

       return nub1400;
   }

   async getNubosidadesH1800(){
       var nub1800 = [];

       nub1800.push(this.result.SEPTIEMBRE[25].E);
       nub1800.push(this.result.SEPTIEMBRE[25].F);
       nub1800.push(this.result.SEPTIEMBRE[25].G);
       nub1800.push(this.result.SEPTIEMBRE[25].H);
       nub1800.push(this.result.SEPTIEMBRE[25].I);
       nub1800.push(this.result.SEPTIEMBRE[25].J);
       nub1800.push(this.result.SEPTIEMBRE[25].K);
       nub1800.push(this.result.SEPTIEMBRE[25].L);
       nub1800.push(this.result.SEPTIEMBRE[25].M);
       nub1800.push(this.result.SEPTIEMBRE[25].N);
       nub1800.push(this.result.SEPTIEMBRE[25].O);
       nub1800.push(this.result.SEPTIEMBRE[25].P);
       nub1800.push(this.result.SEPTIEMBRE[25].Q);
       nub1800.push(this.result.SEPTIEMBRE[25].R);
       nub1800.push(this.result.SEPTIEMBRE[25].S);
       nub1800.push(this.result.SEPTIEMBRE[25].T);
       nub1800.push(this.result.SEPTIEMBRE[25].U);
       nub1800.push(this.result.SEPTIEMBRE[25].V);
       nub1800.push(this.result.SEPTIEMBRE[25].W);
       nub1800.push(this.result.SEPTIEMBRE[25].X);
       nub1800.push(this.result.SEPTIEMBRE[25].Y);
       nub1800.push(this.result.SEPTIEMBRE[25].Z);
       nub1800.push(this.result.SEPTIEMBRE[25].AA);
       nub1800.push(this.result.SEPTIEMBRE[25].AB);
       nub1800.push(this.result.SEPTIEMBRE[25].AC);
       nub1800.push(this.result.SEPTIEMBRE[25].AD);
       nub1800.push(this.result.SEPTIEMBRE[25].AE);
       nub1800.push(this.result.SEPTIEMBRE[25].AF);
       nub1800.push(this.result.SEPTIEMBRE[25].AG);
       nub1800.push(this.result.SEPTIEMBRE[25].AH);

       return nub1800;
   }

   async getVisibilidadesH0830(){
       var vis830 = [];

       vis830.push(this.result.SEPTIEMBRE[26].E);
       vis830.push(this.result.SEPTIEMBRE[26].F);
       vis830.push(this.result.SEPTIEMBRE[26].G);
       vis830.push(this.result.SEPTIEMBRE[26].H);
       vis830.push(this.result.SEPTIEMBRE[26].I);
       vis830.push(this.result.SEPTIEMBRE[26].J);
       vis830.push(this.result.SEPTIEMBRE[26].K);
       vis830.push(this.result.SEPTIEMBRE[26].L);
       vis830.push(this.result.SEPTIEMBRE[26].M);
       vis830.push(this.result.SEPTIEMBRE[26].N);
       vis830.push(this.result.SEPTIEMBRE[26].O);
       vis830.push(this.result.SEPTIEMBRE[26].P);
       vis830.push(this.result.SEPTIEMBRE[26].Q);
       vis830.push(this.result.SEPTIEMBRE[26].R);
       vis830.push(this.result.SEPTIEMBRE[26].S);
       vis830.push(this.result.SEPTIEMBRE[26].T);
       vis830.push(this.result.SEPTIEMBRE[26].U);
       vis830.push(this.result.SEPTIEMBRE[26].V);
       vis830.push(this.result.SEPTIEMBRE[26].W);
       vis830.push(this.result.SEPTIEMBRE[26].X);
       vis830.push(this.result.SEPTIEMBRE[26].Y);
       vis830.push(this.result.SEPTIEMBRE[26].Z);
       vis830.push(this.result.SEPTIEMBRE[26].AA);
       vis830.push(this.result.SEPTIEMBRE[26].AB);
       vis830.push(this.result.SEPTIEMBRE[26].AC);
       vis830.push(this.result.SEPTIEMBRE[26].AD);
       vis830.push(this.result.SEPTIEMBRE[26].AE);
       vis830.push(this.result.SEPTIEMBRE[26].AF);
       vis830.push(this.result.SEPTIEMBRE[26].AG);
       vis830.push(this.result.SEPTIEMBRE[26].AH);

       return vis830;
   }

   async getVisibilidadesH1400(){
       var vis1400 = [];

       vis1400.push(this.result.SEPTIEMBRE[27].E);
       vis1400.push(this.result.SEPTIEMBRE[27].F);
       vis1400.push(this.result.SEPTIEMBRE[27].G);
       vis1400.push(this.result.SEPTIEMBRE[27].H);
       vis1400.push(this.result.SEPTIEMBRE[27].I);
       vis1400.push(this.result.SEPTIEMBRE[27].J);
       vis1400.push(this.result.SEPTIEMBRE[27].K);
       vis1400.push(this.result.SEPTIEMBRE[27].L);
       vis1400.push(this.result.SEPTIEMBRE[27].M);
       vis1400.push(this.result.SEPTIEMBRE[27].N);
       vis1400.push(this.result.SEPTIEMBRE[27].O);
       vis1400.push(this.result.SEPTIEMBRE[27].P);
       vis1400.push(this.result.SEPTIEMBRE[27].Q);
       vis1400.push(this.result.SEPTIEMBRE[27].R);
       vis1400.push(this.result.SEPTIEMBRE[27].S);
       vis1400.push(this.result.SEPTIEMBRE[27].T);
       vis1400.push(this.result.SEPTIEMBRE[27].U);
       vis1400.push(this.result.SEPTIEMBRE[27].V);
       vis1400.push(this.result.SEPTIEMBRE[27].W);
       vis1400.push(this.result.SEPTIEMBRE[27].X);
       vis1400.push(this.result.SEPTIEMBRE[27].Y);
       vis1400.push(this.result.SEPTIEMBRE[27].Z);
       vis1400.push(this.result.SEPTIEMBRE[27].AA);
       vis1400.push(this.result.SEPTIEMBRE[27].AB);
       vis1400.push(this.result.SEPTIEMBRE[27].AC);
       vis1400.push(this.result.SEPTIEMBRE[27].AD);
       vis1400.push(this.result.SEPTIEMBRE[27].AE);
       vis1400.push(this.result.SEPTIEMBRE[27].AF);
       vis1400.push(this.result.SEPTIEMBRE[27].AG);
       vis1400.push(this.result.SEPTIEMBRE[27].AH);

       return vis1400;
   }

   async getVisibilidadesH1800(){
       var vis1800 = [];

       vis1800.push(this.result.SEPTIEMBRE[28].E);
       vis1800.push(this.result.SEPTIEMBRE[28].F);
       vis1800.push(this.result.SEPTIEMBRE[28].G);
       vis1800.push(this.result.SEPTIEMBRE[28].H);
       vis1800.push(this.result.SEPTIEMBRE[28].I);
       vis1800.push(this.result.SEPTIEMBRE[28].J);
       vis1800.push(this.result.SEPTIEMBRE[28].K);
       vis1800.push(this.result.SEPTIEMBRE[28].L);
       vis1800.push(this.result.SEPTIEMBRE[28].M);
       vis1800.push(this.result.SEPTIEMBRE[28].N);
       vis1800.push(this.result.SEPTIEMBRE[28].O);
       vis1800.push(this.result.SEPTIEMBRE[28].P);
       vis1800.push(this.result.SEPTIEMBRE[28].Q);
       vis1800.push(this.result.SEPTIEMBRE[28].R);
       vis1800.push(this.result.SEPTIEMBRE[28].S);
       vis1800.push(this.result.SEPTIEMBRE[28].T);
       vis1800.push(this.result.SEPTIEMBRE[28].U);
       vis1800.push(this.result.SEPTIEMBRE[28].V);
       vis1800.push(this.result.SEPTIEMBRE[28].W);
       vis1800.push(this.result.SEPTIEMBRE[28].X);
       vis1800.push(this.result.SEPTIEMBRE[28].Y);
       vis1800.push(this.result.SEPTIEMBRE[28].Z);
       vis1800.push(this.result.SEPTIEMBRE[28].AA);
       vis1800.push(this.result.SEPTIEMBRE[28].AB);
       vis1800.push(this.result.SEPTIEMBRE[28].AC);
       vis1800.push(this.result.SEPTIEMBRE[28].AD);
       vis1800.push(this.result.SEPTIEMBRE[28].AE);
       vis1800.push(this.result.SEPTIEMBRE[28].AF);
       vis1800.push(this.result.SEPTIEMBRE[28].AG);
       vis1800.push(this.result.SEPTIEMBRE[28].AH);

       return vis1800;
   }

   async getHorasSol(){
       var horasSol = [];

       horasSol.push(this.result.SEPTIEMBRE[29].E);
       horasSol.push(this.result.SEPTIEMBRE[29].F);
       horasSol.push(this.result.SEPTIEMBRE[29].G);
       horasSol.push(this.result.SEPTIEMBRE[29].H);
       horasSol.push(this.result.SEPTIEMBRE[29].I);
       horasSol.push(this.result.SEPTIEMBRE[29].J);
       horasSol.push(this.result.SEPTIEMBRE[29].K);
       horasSol.push(this.result.SEPTIEMBRE[29].L);
       horasSol.push(this.result.SEPTIEMBRE[29].M);
       horasSol.push(this.result.SEPTIEMBRE[29].N);
       horasSol.push(this.result.SEPTIEMBRE[29].O);
       horasSol.push(this.result.SEPTIEMBRE[29].P);
       horasSol.push(this.result.SEPTIEMBRE[29].Q);
       horasSol.push(this.result.SEPTIEMBRE[29].R);
       horasSol.push(this.result.SEPTIEMBRE[29].S);
       horasSol.push(this.result.SEPTIEMBRE[29].T);
       horasSol.push(this.result.SEPTIEMBRE[29].U);
       horasSol.push(this.result.SEPTIEMBRE[29].V);
       horasSol.push(this.result.SEPTIEMBRE[29].W);
       horasSol.push(this.result.SEPTIEMBRE[29].X);
       horasSol.push(this.result.SEPTIEMBRE[29].Y);
       horasSol.push(this.result.SEPTIEMBRE[29].Z);
       horasSol.push(this.result.SEPTIEMBRE[29].AA);
       horasSol.push(this.result.SEPTIEMBRE[29].AB);
       horasSol.push(this.result.SEPTIEMBRE[29].AC);
       horasSol.push(this.result.SEPTIEMBRE[29].AD);
       horasSol.push(this.result.SEPTIEMBRE[29].AE);
       horasSol.push(this.result.SEPTIEMBRE[29].AF);
       horasSol.push(this.result.SEPTIEMBRE[29].AG);
       horasSol.push(this.result.SEPTIEMBRE[29].AH);

       return horasSol;
   }

   async getEvaporamientos(){
       var evaporamiento = [];

       evaporamiento.push(this.result.SEPTIEMBRE[30].E);
       evaporamiento.push(this.result.SEPTIEMBRE[30].F);
       evaporamiento.push(this.result.SEPTIEMBRE[30].G);
       evaporamiento.push(this.result.SEPTIEMBRE[30].H);
       evaporamiento.push(this.result.SEPTIEMBRE[30].I);
       evaporamiento.push(this.result.SEPTIEMBRE[30].J);
       evaporamiento.push(this.result.SEPTIEMBRE[30].K);
       evaporamiento.push(this.result.SEPTIEMBRE[30].L);
       evaporamiento.push(this.result.SEPTIEMBRE[30].M);
       evaporamiento.push(this.result.SEPTIEMBRE[30].N);
       evaporamiento.push(this.result.SEPTIEMBRE[30].O);
       evaporamiento.push(this.result.SEPTIEMBRE[30].P);
       evaporamiento.push(this.result.SEPTIEMBRE[30].Q);
       evaporamiento.push(this.result.SEPTIEMBRE[30].R);
       evaporamiento.push(this.result.SEPTIEMBRE[30].S);
       evaporamiento.push(this.result.SEPTIEMBRE[30].T);
       evaporamiento.push(this.result.SEPTIEMBRE[30].U);
       evaporamiento.push(this.result.SEPTIEMBRE[30].V);
       evaporamiento.push(this.result.SEPTIEMBRE[30].W);
       evaporamiento.push(this.result.SEPTIEMBRE[30].X);
       evaporamiento.push(this.result.SEPTIEMBRE[30].Y);
       evaporamiento.push(this.result.SEPTIEMBRE[30].Z);
       evaporamiento.push(this.result.SEPTIEMBRE[30].AA);
       evaporamiento.push(this.result.SEPTIEMBRE[30].AB);
       evaporamiento.push(this.result.SEPTIEMBRE[30].AC);
       evaporamiento.push(this.result.SEPTIEMBRE[30].AD);
       evaporamiento.push(this.result.SEPTIEMBRE[30].AE);
       evaporamiento.push(this.result.SEPTIEMBRE[30].AF);
       evaporamiento.push(this.result.SEPTIEMBRE[30].AG);
       evaporamiento.push(this.result.SEPTIEMBRE[30].AH);

       return evaporamiento;
   }

   async getGeotermometros2(){
       var geo2 = [];

       geo2.push(this.result.SEPTIEMBRE[31].E);
       geo2.push(this.result.SEPTIEMBRE[31].F);
       geo2.push(this.result.SEPTIEMBRE[31].G);
       geo2.push(this.result.SEPTIEMBRE[31].H);
       geo2.push(this.result.SEPTIEMBRE[31].I);
       geo2.push(this.result.SEPTIEMBRE[31].J);
       geo2.push(this.result.SEPTIEMBRE[31].K);
       geo2.push(this.result.SEPTIEMBRE[31].L);
       geo2.push(this.result.SEPTIEMBRE[31].M);
       geo2.push(this.result.SEPTIEMBRE[31].N);
       geo2.push(this.result.SEPTIEMBRE[31].O);
       geo2.push(this.result.SEPTIEMBRE[31].P);
       geo2.push(this.result.SEPTIEMBRE[31].Q);
       geo2.push(this.result.SEPTIEMBRE[31].R);
       geo2.push(this.result.SEPTIEMBRE[31].S);
       geo2.push(this.result.SEPTIEMBRE[31].T);
       geo2.push(this.result.SEPTIEMBRE[31].U);
       geo2.push(this.result.SEPTIEMBRE[31].V);
       geo2.push(this.result.SEPTIEMBRE[31].W);
       geo2.push(this.result.SEPTIEMBRE[31].X);
       geo2.push(this.result.SEPTIEMBRE[31].Y);
       geo2.push(this.result.SEPTIEMBRE[31].Z);
       geo2.push(this.result.SEPTIEMBRE[31].AA);
       geo2.push(this.result.SEPTIEMBRE[31].AB);
       geo2.push(this.result.SEPTIEMBRE[31].AC);
       geo2.push(this.result.SEPTIEMBRE[31].AD);
       geo2.push(this.result.SEPTIEMBRE[31].AE);
       geo2.push(this.result.SEPTIEMBRE[31].AF);
       geo2.push(this.result.SEPTIEMBRE[31].AG);
       geo2.push(this.result.SEPTIEMBRE[31].AH);

       return geo2;
   }

   async getGeotermometros5(){
       var geo5 = [];

       geo5.push(this.result.SEPTIEMBRE[32].E);
       geo5.push(this.result.SEPTIEMBRE[32].F);
       geo5.push(this.result.SEPTIEMBRE[32].G);
       geo5.push(this.result.SEPTIEMBRE[32].H);
       geo5.push(this.result.SEPTIEMBRE[32].I);
       geo5.push(this.result.SEPTIEMBRE[32].J);
       geo5.push(this.result.SEPTIEMBRE[32].K);
       geo5.push(this.result.SEPTIEMBRE[32].L);
       geo5.push(this.result.SEPTIEMBRE[32].M);
       geo5.push(this.result.SEPTIEMBRE[32].N);
       geo5.push(this.result.SEPTIEMBRE[32].O);
       geo5.push(this.result.SEPTIEMBRE[32].P);
       geo5.push(this.result.SEPTIEMBRE[32].Q);
       geo5.push(this.result.SEPTIEMBRE[32].R);
       geo5.push(this.result.SEPTIEMBRE[32].S);
       geo5.push(this.result.SEPTIEMBRE[32].T);
       geo5.push(this.result.SEPTIEMBRE[32].U);
       geo5.push(this.result.SEPTIEMBRE[32].V);
       geo5.push(this.result.SEPTIEMBRE[32].W);
       geo5.push(this.result.SEPTIEMBRE[32].X);
       geo5.push(this.result.SEPTIEMBRE[32].Y);
       geo5.push(this.result.SEPTIEMBRE[32].Z);
       geo5.push(this.result.SEPTIEMBRE[32].AA);
       geo5.push(this.result.SEPTIEMBRE[32].AB);
       geo5.push(this.result.SEPTIEMBRE[32].AC);
       geo5.push(this.result.SEPTIEMBRE[32].AD);
       geo5.push(this.result.SEPTIEMBRE[32].AE);
       geo5.push(this.result.SEPTIEMBRE[32].AF);
       geo5.push(this.result.SEPTIEMBRE[32].AG);
       geo5.push(this.result.SEPTIEMBRE[32].AH);

       return geo5;
   }

   async getGeotermometros10(){
       var geo10 = [];

       geo10.push(this.result.SEPTIEMBRE[33].E);
       geo10.push(this.result.SEPTIEMBRE[33].F);
       geo10.push(this.result.SEPTIEMBRE[33].G);
       geo10.push(this.result.SEPTIEMBRE[33].H);
       geo10.push(this.result.SEPTIEMBRE[33].I);
       geo10.push(this.result.SEPTIEMBRE[33].J);
       geo10.push(this.result.SEPTIEMBRE[33].K);
       geo10.push(this.result.SEPTIEMBRE[33].L);
       geo10.push(this.result.SEPTIEMBRE[33].M);
       geo10.push(this.result.SEPTIEMBRE[33].N);
       geo10.push(this.result.SEPTIEMBRE[33].O);
       geo10.push(this.result.SEPTIEMBRE[33].P);
       geo10.push(this.result.SEPTIEMBRE[33].Q);
       geo10.push(this.result.SEPTIEMBRE[33].R);
       geo10.push(this.result.SEPTIEMBRE[33].S);
       geo10.push(this.result.SEPTIEMBRE[33].T);
       geo10.push(this.result.SEPTIEMBRE[33].U);
       geo10.push(this.result.SEPTIEMBRE[33].V);
       geo10.push(this.result.SEPTIEMBRE[33].W);
       geo10.push(this.result.SEPTIEMBRE[33].X);
       geo10.push(this.result.SEPTIEMBRE[33].Y);
       geo10.push(this.result.SEPTIEMBRE[33].Z);
       geo10.push(this.result.SEPTIEMBRE[33].AA);
       geo10.push(this.result.SEPTIEMBRE[33].AB);
       geo10.push(this.result.SEPTIEMBRE[33].AC);
       geo10.push(this.result.SEPTIEMBRE[33].AD);
       geo10.push(this.result.SEPTIEMBRE[33].AE);
       geo10.push(this.result.SEPTIEMBRE[33].AF);
       geo10.push(this.result.SEPTIEMBRE[33].AG);
       geo10.push(this.result.SEPTIEMBRE[33].AH);

       return geo10;
   }

   async getGeotermometros20(){
       var geo20 = [];

       geo20.push(this.result.SEPTIEMBRE[34].E);
       geo20.push(this.result.SEPTIEMBRE[34].F);
       geo20.push(this.result.SEPTIEMBRE[34].G);
       geo20.push(this.result.SEPTIEMBRE[34].H);
       geo20.push(this.result.SEPTIEMBRE[34].I);
       geo20.push(this.result.SEPTIEMBRE[34].J);
       geo20.push(this.result.SEPTIEMBRE[34].K);
       geo20.push(this.result.SEPTIEMBRE[34].L);
       geo20.push(this.result.SEPTIEMBRE[34].M);
       geo20.push(this.result.SEPTIEMBRE[34].N);
       geo20.push(this.result.SEPTIEMBRE[34].O);
       geo20.push(this.result.SEPTIEMBRE[34].P);
       geo20.push(this.result.SEPTIEMBRE[34].Q);
       geo20.push(this.result.SEPTIEMBRE[34].R);
       geo20.push(this.result.SEPTIEMBRE[34].S);
       geo20.push(this.result.SEPTIEMBRE[34].T);
       geo20.push(this.result.SEPTIEMBRE[34].U);
       geo20.push(this.result.SEPTIEMBRE[34].V);
       geo20.push(this.result.SEPTIEMBRE[34].W);
       geo20.push(this.result.SEPTIEMBRE[34].X);
       geo20.push(this.result.SEPTIEMBRE[34].Y);
       geo20.push(this.result.SEPTIEMBRE[34].Z);
       geo20.push(this.result.SEPTIEMBRE[34].AA);
       geo20.push(this.result.SEPTIEMBRE[34].AB);
       geo20.push(this.result.SEPTIEMBRE[34].AC);
       geo20.push(this.result.SEPTIEMBRE[34].AD);
       geo20.push(this.result.SEPTIEMBRE[34].AE);
       geo20.push(this.result.SEPTIEMBRE[34].AF);
       geo20.push(this.result.SEPTIEMBRE[34].AG);
       geo20.push(this.result.SEPTIEMBRE[34].AH);

       return geo20;
   }

   async getGeotermometros30(){
       var geo30 = [];

       geo30.push(this.result.SEPTIEMBRE[35].E);
       geo30.push(this.result.SEPTIEMBRE[35].F);
       geo30.push(this.result.SEPTIEMBRE[35].G);
       geo30.push(this.result.SEPTIEMBRE[35].H);
       geo30.push(this.result.SEPTIEMBRE[35].I);
       geo30.push(this.result.SEPTIEMBRE[35].J);
       geo30.push(this.result.SEPTIEMBRE[35].K);
       geo30.push(this.result.SEPTIEMBRE[35].L);
       geo30.push(this.result.SEPTIEMBRE[35].M);
       geo30.push(this.result.SEPTIEMBRE[35].N);
       geo30.push(this.result.SEPTIEMBRE[35].O);
       geo30.push(this.result.SEPTIEMBRE[35].P);
       geo30.push(this.result.SEPTIEMBRE[35].Q);
       geo30.push(this.result.SEPTIEMBRE[35].R);
       geo30.push(this.result.SEPTIEMBRE[35].S);
       geo30.push(this.result.SEPTIEMBRE[35].T);
       geo30.push(this.result.SEPTIEMBRE[35].U);
       geo30.push(this.result.SEPTIEMBRE[35].V);
       geo30.push(this.result.SEPTIEMBRE[35].W);
       geo30.push(this.result.SEPTIEMBRE[35].X);
       geo30.push(this.result.SEPTIEMBRE[35].Y);
       geo30.push(this.result.SEPTIEMBRE[35].Z);
       geo30.push(this.result.SEPTIEMBRE[35].AA);
       geo30.push(this.result.SEPTIEMBRE[35].AB);
       geo30.push(this.result.SEPTIEMBRE[35].AC);
       geo30.push(this.result.SEPTIEMBRE[35].AD);
       geo30.push(this.result.SEPTIEMBRE[35].AE);
       geo30.push(this.result.SEPTIEMBRE[35].AF);
       geo30.push(this.result.SEPTIEMBRE[35].AG);
       geo30.push(this.result.SEPTIEMBRE[35].AH);

       return geo30;
   }

   async getGeotermometros50(){
       var geo50 = [];

       geo50.push(this.result.SEPTIEMBRE[36].E);
       geo50.push(this.result.SEPTIEMBRE[36].F);
       geo50.push(this.result.SEPTIEMBRE[36].G);
       geo50.push(this.result.SEPTIEMBRE[36].H);
       geo50.push(this.result.SEPTIEMBRE[36].I);
       geo50.push(this.result.SEPTIEMBRE[36].J);
       geo50.push(this.result.SEPTIEMBRE[36].K);
       geo50.push(this.result.SEPTIEMBRE[36].L);
       geo50.push(this.result.SEPTIEMBRE[36].M);
       geo50.push(this.result.SEPTIEMBRE[36].N);
       geo50.push(this.result.SEPTIEMBRE[36].O);
       geo50.push(this.result.SEPTIEMBRE[36].P);
       geo50.push(this.result.SEPTIEMBRE[36].Q);
       geo50.push(this.result.SEPTIEMBRE[36].R);
       geo50.push(this.result.SEPTIEMBRE[36].S);
       geo50.push(this.result.SEPTIEMBRE[36].T);
       geo50.push(this.result.SEPTIEMBRE[36].U);
       geo50.push(this.result.SEPTIEMBRE[36].V);
       geo50.push(this.result.SEPTIEMBRE[36].W);
       geo50.push(this.result.SEPTIEMBRE[36].X);
       geo50.push(this.result.SEPTIEMBRE[36].Y);
       geo50.push(this.result.SEPTIEMBRE[36].Z);
       geo50.push(this.result.SEPTIEMBRE[36].AA);
       geo50.push(this.result.SEPTIEMBRE[36].AB);
       geo50.push(this.result.SEPTIEMBRE[36].AC);
       geo50.push(this.result.SEPTIEMBRE[36].AD);
       geo50.push(this.result.SEPTIEMBRE[36].AE);
       geo50.push(this.result.SEPTIEMBRE[36].AF);
       geo50.push(this.result.SEPTIEMBRE[36].AG);
       geo50.push(this.result.SEPTIEMBRE[36].AH);

       return geo50;
   }

   async getGeotermometros100(){
       var geo100 = [];

       geo100.push(this.result.SEPTIEMBRE[37].E);
       geo100.push(this.result.SEPTIEMBRE[37].F);
       geo100.push(this.result.SEPTIEMBRE[37].G);
       geo100.push(this.result.SEPTIEMBRE[37].H);
       geo100.push(this.result.SEPTIEMBRE[37].I);
       geo100.push(this.result.SEPTIEMBRE[37].J);
       geo100.push(this.result.SEPTIEMBRE[37].K);
       geo100.push(this.result.SEPTIEMBRE[37].L);
       geo100.push(this.result.SEPTIEMBRE[37].M);
       geo100.push(this.result.SEPTIEMBRE[37].N);
       geo100.push(this.result.SEPTIEMBRE[37].O);
       geo100.push(this.result.SEPTIEMBRE[37].P);
       geo100.push(this.result.SEPTIEMBRE[37].Q);
       geo100.push(this.result.SEPTIEMBRE[37].R);
       geo100.push(this.result.SEPTIEMBRE[37].S);
       geo100.push(this.result.SEPTIEMBRE[37].T);
       geo100.push(this.result.SEPTIEMBRE[37].U);
       geo100.push(this.result.SEPTIEMBRE[37].V);
       geo100.push(this.result.SEPTIEMBRE[37].W);
       geo100.push(this.result.SEPTIEMBRE[37].X);
       geo100.push(this.result.SEPTIEMBRE[37].Y);
       geo100.push(this.result.SEPTIEMBRE[37].Z);
       geo100.push(this.result.SEPTIEMBRE[37].AA);
       geo100.push(this.result.SEPTIEMBRE[37].AB);
       geo100.push(this.result.SEPTIEMBRE[37].AC);
       geo100.push(this.result.SEPTIEMBRE[37].AD);
       geo100.push(this.result.SEPTIEMBRE[37].AE);
       geo100.push(this.result.SEPTIEMBRE[37].AF);
       geo100.push(this.result.SEPTIEMBRE[37].AG);
       geo100.push(this.result.SEPTIEMBRE[37].AH);

       return geo100;
   }

   async getRegistros(){
       var listReg = [];
       
       const aguaCaida = await this.getAguasCaidas();
       const horasSol = await this.getHorasSol();
       const evaporamiento = await this.getEvaporamientos();
       const temperaturaMinima = await this.getTemperaturasMinimas();
       const temperaturaMaxima = await this.getTemperaturasMaximas();
       const tS830 = await this.getTermometrosSecosH0830();
       const tS1400 = await this.getTermometrosSecosH1400();
       const tS1800 = await this.getTermometrosSecosH1800();
       const tH830 = await this.getTermometrosHumedosH0830();
       const tH1400 = await this.getTermometrosHumedosH1400();
       const tH1800 = await this.getTermometrosHumedosH1800();
       const pA830 = await this.getPresionesAtmosfericasH0830();
       const pA1400 = await this.getPresionesAtmosfericasH1400();
       const pA1800 = await this.getPresionesAtmosfericasH1800();
       const dV830 = await this.getDireccionesVientosH0830();
       const dV1400 = await this.getDireccionesVientosH1400();
       const dV1800 = await this.getDireccionesVientosH1400();
       const nub830 = await this.getNubosidadesH0830();
       const nub1400 = await this.getNubosidadesH1400();
       const nub1800 = await this.getNubosidadesH1800();
       const vis830 = await this.getVisibilidadesH0830();
       const vis1400 = await this.getVisibilidadesH1400();
       const vis1800 = await this.getVisibilidadesH1800();
       const geo2 = await this.getGeotermometros2();
       const geo5 = await this.getGeotermometros5();
       const geo10 = await this.getGeotermometros10();
       const geo20 = await this.getGeotermometros20();
       const geo30 = await this.getGeotermometros30();
       const geo50 = await this.getGeotermometros50();
       const geo100 = await this.getGeotermometros100();

       for (let index = 0; index < aguaCaida.length; index++) {

           var rgt = new Registro();

           var fech = new Date();
           fech.setMonth(8);
           fech.setFullYear(this.result.SEPTIEMBRE[0].D);

           var diaDelMes = index + 1;
           fech.setDate(diaDelMes);

           rgt.fecha = fech;
           rgt.agua_caida = aguaCaida[index];
           rgt.horas_sol = horasSol[index];
           rgt.evaporamiento = evaporamiento[index];

           var temperatura = new Temperatura();
           temperatura.minima = temperaturaMinima[index];
           temperatura.maxima = temperaturaMaxima[index];
           rgt.Temperatura = temperatura;

           var termometroSeco = new TermometroSeco();
           termometroSeco.h0830 = tS830[index];
           termometroSeco.h1400 = tS1400[index];
           termometroSeco.h1800 = tS1800[index];
           rgt.TermometroSeco = termometroSeco;

           var termometroHumedo = new TermometroHumedo();
           termometroHumedo.h0830 = tH830[index];
           termometroHumedo.h1400 = tH1400[index];
           termometroHumedo.h1800 = tH1800[index];
           rgt.TermometroHumedo = termometroHumedo;

           var presionAtmosferica = new PresionAtmosferica();
           presionAtmosferica.h0830 = pA830[index];
           presionAtmosferica.h1400 = pA1400[index];
           presionAtmosferica.h1800 = pA1800[index];
           rgt.PresionAtmosferica = presionAtmosferica;

           var direccionViento = new DireccionViento();
           direccionViento.h0830 = dV830[index];
           direccionViento.h1400 = dV1400[index];
           direccionViento.h1800 = dV1800[index];
           rgt.DireccionViento = direccionViento;

           var nubosidad = new Nubosidad();
           nubosidad.h0830 = nub830[index];
           nubosidad.h1400 = nub1400[index];
           nubosidad.h1800 = nub1800[index];
           rgt.Nubosidad = nubosidad;

           var visibilidad = new Visibilidad;
           visibilidad.h0830 = vis830[index];
           visibilidad.h1400 = vis1400[index];
           visibilidad.h1800 = vis1800[index];
           rgt.Visibilidad = visibilidad;

           var geotermometro = new Geotermometro();
           geotermometro.cm2 = geo2[index];
           geotermometro.cm5 = geo5[index];
           geotermometro.cm10 = geo10[index];
           geotermometro.cm20 = geo20[index];
           geotermometro.cm30 = geo30[index];
           geotermometro.cm50 = geo50[index];
           geotermometro.cm100 = geo100[index];
           rgt.Geotermometro = geotermometro;
           
           listReg.push(rgt);
       }

       return listReg;

   }
}
module.exports = ConvertSEPTIEMBRE;
