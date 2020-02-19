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
 }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

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
  router.use("/api", apiRoute);

  return router;
};
