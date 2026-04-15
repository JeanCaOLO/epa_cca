# Dashboard Power BI

## 1. Project Description
Panel de visualización de reportes Power BI con navegación lateral. Permite a los usuarios acceder a diferentes informes embebidos mediante iframes, organizados en una barra lateral. Orientado a equipos que necesitan centralizar sus reportes en un solo lugar.

## 2. Page Structure
- `/` - Inicio (bienvenida y resumen)
- `/informe-1` - Informe 1: Reporte Carol G
- `/informe-2` - Informe 2
- `/informe-3` - Informe 3

## 3. Core Features
- [x] Sidebar de navegación lateral con pestañas
- [x] Panel central con iframe de Power BI
- [x] Página de inicio con bienvenida
- [x] Navegación entre reportes
- [ ] Configuración de URLs de Power BI por reporte
- [ ] Modo pantalla completa para iframes

## 4. Data Model Design
No se requiere base de datos. Las URLs de los reportes se configuran directamente en el código.

## 5. Backend / Third-party Integration Plan
- Supabase: ✅ Conectado — Autenticación con email/password
- Shopify: No requerido
- Stripe: No requerido

## 6. Development Phase Plan

### Phase 1: UI Principal y Navegación ✅
- Goal: Construir el layout completo con sidebar, panel de iframes y páginas de reportes
- Deliverable: Dashboard funcional con navegación lateral y visualización de iframes

### Phase 2: Sistema de Login con Supabase ✅
- Goal: Proteger el dashboard con autenticación
- Deliverable: Página de login, rutas protegidas, logout en TopBar

### Phase 3: Personalización de URLs
- Goal: Permitir configurar las URLs de Power BI para cada reporte
- Deliverable: Formulario o configuración para actualizar los iframes
