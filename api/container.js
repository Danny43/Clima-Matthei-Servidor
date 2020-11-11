const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

// routes
const Routes = require("../api/routes");
const TemperaturaRoutes = require("../api/routes/temperatura.routes");
const NubosidadRoutes = require("../api/routes/nubosidad.routes");
const VisibilidadRoutes = require("../api/routes/visibilidad.routes");
const TermometroSecoRoutes = require("../api/routes/termometro-seco.routes");
const TermometroHumedoRoutes = require("../api/routes/termometro-humedo.routes");
const GeotermometroRoutes = require("../api/routes/geotermometro.routes");
const DireccionVientoRoutes = require("../api/routes/direccion-viento.routes");
const PresionAtmosfericaRoutes = require("../api/routes/presion-atmosferica.routes");
const RegistroRoutes = require("../api/routes/registro.routes");
const RegistroFechaRoutes = require("../api/routes/registro-fecha.routes");
const UsuarioRoutes = require("../api/routes/usuario.routes");
const PermisoRoutes = require("../api/routes/permiso.routes");
const ExcelRoutes = require("../api/routes/excel.routes");

// business
const {
  TemperaturaBusiness,
  NubosidadBusiness,
  VisibilidadBusiness,
  TermometroSecoBusiness,
  TermometroHumedoBusiness,
  GeotermometroBusiness,
  DireccionVientoBusiness,
  PresionAtmosfericaBusiness,
  RegistroBusiness,
  UsuarioBusiness,
  PermisoBusiness,
  UsuarioPermisoBusiness,
  TemperaturaJournalBusiness,
  NubosidadJournalBusiness,
  VisibilidadJournalBusiness,
  TermometroSecoJournalBusiness,
  TermometroHumedoJournalBusiness,
  GeotermometroJournalBusiness,
  DireccionVientoJournalBusiness,
  PresionAtmosfericaJournalBusiness,
  RegistroJournalBusiness,
  UsuarioJournalBusiness,
} = require("../domain/");

// controllers
const {
  TemperaturaController,
  NubosidadController,
  VisibilidadController,
  TermometroSecoController,
  TermometroHumedoController,
  GeotermometroController,
  DireccionVientoController,
  PresionAtmosfericaController,
  RegistroController,
  UsuarioController,
  PermisoController,
} = require("../api/controllers");

// services
const {
   TemperaturaService, 
   NubosidadService, 
   VisibilidadService, 
   TermometroSecoService, 
   TermometroHumedoService, 
   GeotermometroService, 
   DireccionVientoService, 
   PresionAtmosfericaService, 
   RegistroService, 
   UsuarioService,
   UsuarioPermisoService,
   TemperaturaJournalService, 
   NubosidadJournalService, 
   VisibilidadJournalService, 
   TermometroSecoJournalService, 
   TermometroHumedoJournalService, 
   GeotermometroJournalService, 
   DireccionVientoJournalService, 
   PresionAtmosfericaJournalService, 
   RegistroJournalService, 
   UsuarioJournalService, 
   PermisoService,
  } = require("../services");

// repositories
const { 
  TemperaturaRepository, 
  NubosidadRepository, 
  VisibilidadRepository, 
  TermometroSecoRepository, 
  TermometroHumedoRepository, 
  GeotermometroRepository, 
  DireccionVientoRepository, 
  PresionAtmosfericaRepository, 
  RegistroRepository, 
  UsuarioRepository,
  UsuarioPermisoRepository,
  TemperaturaJournalRepository, 
  NubosidadJournalRepository, 
  VisibilidadJournalRepository, 
  TermometroSecoJournalRepository, 
  TermometroHumedoJournalRepository, 
  GeotermometroJournalRepository, 
  DireccionVientoJournalRepository, 
  PresionAtmosfericaJournalRepository, 
  RegistroJournalRepository, 
  UsuarioJournalRepository, 
  PermisoRepository,
} = require("../dal/repositories");

// db
const db = require("../dal/models");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    TemperaturaController: asClass(TemperaturaController).singleton(),
    TemperaturaRoutes: asFunction(TemperaturaRoutes).singleton(),
    NubosidadController: asClass(NubosidadController).singleton(),
    NubosidadRoutes: asFunction(NubosidadRoutes).singleton(),
    VisibilidadController: asClass(VisibilidadController).singleton(),
    VisibilidadRoutes: asFunction(VisibilidadRoutes).singleton(),
    TermometroSecoController: asClass(TermometroSecoController).singleton(),
    TermometroSecoRoutes: asFunction(TermometroSecoRoutes).singleton(),
    TermometroHumedoController: asClass(TermometroHumedoController).singleton(),
    TermometroHumedoRoutes: asFunction(TermometroHumedoRoutes).singleton(),
    GeotermometroController: asClass(GeotermometroController).singleton(),
    GeotermometroRoutes: asFunction(GeotermometroRoutes).singleton(),
    DireccionVientoController: asClass(DireccionVientoController).singleton(),
    DireccionVientoRoutes: asFunction(DireccionVientoRoutes).singleton(),
    PresionAtmosfericaController: asClass(PresionAtmosfericaController).singleton(),
    PresionAtmosfericaRoutes: asFunction(PresionAtmosfericaRoutes).singleton(),
    RegistroController: asClass(RegistroController).singleton(),
    RegistroRoutes: asFunction(RegistroRoutes).singleton(),
    UsuarioController: asClass(UsuarioController).singleton(),
    UsuarioRoutes: asFunction(UsuarioRoutes).singleton(),
    PermisoController: asClass(PermisoController).singleton(),
    PermisoRoutes: asFunction(PermisoRoutes).singleton(),
    RegistroFechaRoutes: asFunction(RegistroFechaRoutes).singleton(),
    ExcelRoutes: asFunction(ExcelRoutes).singleton(),
  })
  .register({
    config: asValue(config)
  })
  .register({
    db: asValue(db)
  })
  .register({
    TemperaturaService: asClass(TemperaturaService).singleton(),
    NubosidadService: asClass(NubosidadService).singleton(),
    VisibilidadService: asClass(VisibilidadService).singleton(),
    TermometroSecoService: asClass(TermometroSecoService).singleton(),
    TermometroHumedoService: asClass(TermometroHumedoService).singleton(),
    GeotermometroService: asClass(GeotermometroService).singleton(),
    DireccionVientoService: asClass(DireccionVientoService).singleton(),
    PresionAtmosfericaService: asClass(PresionAtmosfericaService).singleton(),
    RegistroService: asClass(RegistroService).singleton(),
    UsuarioService: asClass(UsuarioService).singleton(),
    PermisoService: asClass(PermisoService).singleton(),
    UsuarioPermisoService: asClass(UsuarioPermisoService).singleton(),
    TemperaturaJournalService: asClass(TemperaturaJournalService).singleton(),
    NubosidadJournalService: asClass(NubosidadJournalService).singleton(),
    VisibilidadJournalService: asClass(VisibilidadJournalService).singleton(),
    TermometroSecoJournalService: asClass(TermometroSecoJournalService).singleton(),
    TermometroHumedoJournalService: asClass(TermometroHumedoJournalService).singleton(),
    GeotermometroJournalService: asClass(GeotermometroJournalService).singleton(),
    DireccionVientoJournalService: asClass(DireccionVientoJournalService).singleton(),
    PresionAtmosfericaJournalService: asClass(PresionAtmosfericaJournalService).singleton(),
    RegistroJournalService: asClass(RegistroJournalService).singleton(),
    UsuarioJournalService: asClass(UsuarioJournalService).singleton(),
  })
  .register({
    TemperaturaRepository: asClass(TemperaturaRepository).singleton(),
    NubosidadRepository: asClass(NubosidadRepository).singleton(),
    VisibilidadRepository: asClass(VisibilidadRepository).singleton(),
    TermometroSecoRepository: asClass(TermometroSecoRepository).singleton(),
    TermometroHumedoRepository: asClass(TermometroHumedoRepository).singleton(),
    GeotermometroRepository: asClass(GeotermometroRepository).singleton(),
    DireccionVientoRepository: asClass(DireccionVientoRepository).singleton(),
    PresionAtmosfericaRepository: asClass(PresionAtmosfericaRepository).singleton(),
    RegistroRepository: asClass(RegistroRepository).singleton(),
    UsuarioRepository: asClass(UsuarioRepository).singleton(),
    PermisoRepository: asClass(PermisoRepository).singleton(),
    UsuarioPermisoRepository: asClass(UsuarioPermisoRepository).singleton(),
    TemperaturaJournalRepository: asClass(TemperaturaJournalRepository).singleton(),
    NubosidadJournalRepository: asClass(NubosidadJournalRepository).singleton(),
    VisibilidadJournalRepository: asClass(VisibilidadJournalRepository).singleton(),
    TermometroSecoJournalRepository: asClass(TermometroSecoJournalRepository).singleton(),
    TermometroHumedoJournalRepository: asClass(TermometroHumedoJournalRepository).singleton(),
    GeotermometroJournalRepository: asClass(GeotermometroJournalRepository).singleton(),
    DireccionVientoJournalRepository: asClass(DireccionVientoJournalRepository).singleton(),
    PresionAtmosfericaJournalRepository: asClass(PresionAtmosfericaJournalRepository).singleton(),
    RegistroJournalRepository: asClass(RegistroJournalRepository).singleton(),
    UsuarioJournalRepository: asClass(UsuarioJournalRepository).singleton(),
  })
  .register({
    TemperaturaBusiness: asClass(TemperaturaBusiness).singleton(),
    NubosidadBusiness: asClass(NubosidadBusiness).singleton(),
    VisibilidadBusiness: asClass(VisibilidadBusiness).singleton(),
    TermometroSecoBusiness: asClass(TermometroSecoBusiness).singleton(),
    TermometroHumedoBusiness: asClass(TermometroHumedoBusiness).singleton(),
    GeotermometroBusiness: asClass(GeotermometroBusiness).singleton(),
    DireccionVientoBusiness: asClass(DireccionVientoBusiness).singleton(),
    PresionAtmosfericaBusiness: asClass(PresionAtmosfericaBusiness).singleton(),
    RegistroBusiness: asClass(RegistroBusiness).singleton(),
    UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
    PermisoBusiness: asClass(PermisoBusiness).singleton(),
    UsuarioPermisoBusiness: asClass(UsuarioPermisoBusiness).singleton(),
    TemperaturaJournalBusiness: asClass(TemperaturaJournalBusiness).singleton(),
    NubosidadJournalBusiness: asClass(NubosidadJournalBusiness).singleton(),
    VisibilidadJournalBusiness: asClass(VisibilidadJournalBusiness).singleton(),
    TermometroSecoJournalBusiness: asClass(TermometroSecoJournalBusiness).singleton(),
    TermometroHumedoJournalBusiness: asClass(TermometroHumedoJournalBusiness).singleton(),
    GeotermometroJournalBusiness: asClass(GeotermometroJournalBusiness).singleton(),
    DireccionVientoJournalBusiness: asClass(DireccionVientoJournalBusiness).singleton(),
    PresionAtmosfericaJournalBusiness: asClass(PresionAtmosfericaJournalBusiness).singleton(),
    RegistroJournalBusiness: asClass(RegistroJournalBusiness).singleton(),
    UsuarioJournalBusiness: asClass(UsuarioJournalBusiness).singleton(),
  });

module.exports = container;
