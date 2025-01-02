### Entities Layer in Feature-Sliced Design

The `entities` layer is responsible for:

1. **Domain Models**: Defining the core business entities and their structures.
2. **State Management**: Managing the state related to these entities, often using state management libraries.
3. **Data Access**: Handling data fetching, updating, and persistence for the entities.
4. **Business Logic**: Implementing business rules and logic related to the entities.
5. **Reusable Components**: Providing components that represent and manipulate these entities.

The `entities` layer encapsulates the core business logic and data structures, ensuring consistency and reusability across the application.

The Entities code is grouped by its purpose in several segments:

```
src/
├── entities/
│   ├── Product/
│   │   ├── ui/
│   │   ├── api/
│   │   ├── model/
│   │   ├── lib/
│   │   ├── config/
```

Entities can be used by `features`, `widgets` and `pages`.
