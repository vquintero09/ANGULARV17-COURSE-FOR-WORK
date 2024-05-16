import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppStandaloneComponent } from './app/app-standalone.component';

// ENFOQUE DE STANDALONE
bootstrapApplication(AppStandaloneComponent, appConfig)
  .catch((err) => console.error(err));

// INICIAR LA APLICACION USANDO UN ENFOQUE DE MODULO
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// platformBrowserDynamic()
// 	.bootstrapModule(AppModule)
// 	.catch((err) => console.error(err));
