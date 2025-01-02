# App

The `app` layer is responsible for:

1. **Initialization**: Bootstrapping the application.
2. **Routing**: Setting up main routes and lazy loading feature modules.
3. **Global Services**: Providing application-wide services.
4. **Styling**: Defining global styles and themes.
5. **Configuration**: Managing environment-specific settings.
6. **Layouts**: Defining main application layouts.src/

```
├── app/
│   ├── app.component.ts
│   ├── app.routes.ts
│   ├── app.config.ts
│   ├── services/
```

It acts as the entry point and backbone of the application, ensuring proper setup and configuration. It usually has no Slices as it holds all business logic.

Code within the `app` layer is not meant to be used by any other layer.
