### Widgets Layer

The `widgets` layer is responsible for:

1. **Reusable Components**: Defining reusable UI components that encapsulate specific functionality.
2. **Composition**: Combining multiple feature components into cohesive, reusable widgets.

The `widgets` layer provides modular, reusable components that can be used across different pages enhancing consistency and reducing duplication.

Widgets are organized into separate slices which can contain segments belonging to the widget specific business domain.

```
src/
├── widgets/
│   ├── geader/
│   │   ├── ui/
│   │   ├── api/
│   │   ├── model/
│   │   ├── lib/
│   │   ├── config/
```

Widgets can only be used by `pages` and `app` layers.
