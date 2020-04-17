const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function({ 
  TemperaturaRoutes, 
  NubosidadRoutes, 
  VisibilidadRoutes,
  TermometroSecoRoutes,
  TermometroHumedoRoutes,
  GeotermometroRoutes,
  DireccionVientoRoutes,
  PresionAtmosfericaRoutes,
  RegistroRoutes,
  RegistroFechaRoutes,
  UsuarioRoutes,
  ExcelRoutes,
 }) {
  const router = Router();
  const apiRoute = Router();
  console.log('aqui llegamos al enrutador');

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

  console.log('aqui ya hicimos la conversion a json');
  apiRoute.use("/temperatura", TemperaturaRoutes);
  apiRoute.use("/nubosidad", NubosidadRoutes);
  apiRoute.use("/visibilidad", VisibilidadRoutes);
  apiRoute.use("/termometro-seco", TermometroSecoRoutes);
  apiRoute.use("/termometro-humedo", TermometroHumedoRoutes);
  apiRoute.use("/geotermometro", GeotermometroRoutes);
  apiRoute.use("/direccion-viento", DireccionVientoRoutes);
  apiRoute.use("/presion-atmosferica", PresionAtmosfericaRoutes);
  apiRoute.use("/registro", RegistroRoutes);
  apiRoute.use("/registro-fecha", RegistroFechaRoutes);
  apiRoute.use("/usuario", UsuarioRoutes);
  apiRoute.use("/excel", ExcelRoutes);
  router.use("/api", apiRoute);

  return router;
};
