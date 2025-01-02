### Pages Layer

The `pages` layer is responsible for:

1. **Page Components**: Defining components that represent entire pages or views.
2. **Composition**: Composing multiple feature components and UI elements to form a complete page.
3. **State Management**: Managing page-specific state and data fetching.
4. **Layouts**: Applying specific layouts to different pages.

The `pages` layer acts as the bridge between the `app` layer and the `features` layer, organizing the application into distinct, navigable views.

Different pages are organized into separate slices which can contain segments belonging to the page specific business domain.

```
src/
├── pages/
│   ├── cart/
│   │   ├── ui/
│   │   ├── api/
│   │   ├── model/
│   │   ├── lib/
│   │   ├── config/
```

Code within the `pages` layer can only be used by the `app` layer.
