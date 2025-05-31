# 🌴 Neversad Studio - Site Web Miami Aesthetic

Site web premium pour studio photo avec design Miami Vice rose néon et fonctionnalités interactives avancées.

## 🎨 Identité Visuelle

- **Thème**: Miami Vice moderne avec palette rose néon
- **Couleurs principales**:
  - Rose fluo: `#FF006E` (accents, CTA)
  - Rose pastel: `#FF8CC8` (hovers)
  - Noir profond: `#0A0A0A` (base)
  - Blanc pur: `#FFFFFF` (textes)
- **Effets**: Grids néon, glitch subtils, glow effects, ombres colorées

## 🛠 Stack Technique

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS + Framer Motion
- **3D/Animations**: Three.js (pour visite virtuelle)
- **Formulaires**: React Hook Form + Zod
- **Images**: Next/Image avec Cloudinary
- **Déploiement**: Vercel

## 📁 Architecture du Projet

```
neversad-studio/
├── src/
│   ├── app/                    # App Router Next.js
│   │   ├── page.tsx           # Homepage
│   │   ├── portfolio/         # Galerie photos
│   │   ├── booking/           # Système réservation
│   │   └── studio/            # Visite virtuelle
│   ├── components/
│   │   ├── ui/               # Composants réutilisables
│   │   ├── sections/         # Sections homepage
│   │   ├── portfolio/        # Galerie interactive
│   │   ├── booking/          # Formulaires réservation
│   │   └── 3d/              # Composants Three.js
│   ├── lib/                  # Utilitaires, configs
│   └── styles/              # CSS global, Tailwind config
├── public/
│   ├── images/              # Assets statiques
│   └── models/              # Modèles 3D studio
└── README.md
```

## 🚀 Fonctionnalités Principales

### 1. Homepage Hero Immersive

- **Hero section** avec animation de texte glitch
- **Background video** en loop avec overlay rose néon
- **CTA animé** avec glow effect au hover
- **Scroll reveal** pour tous les éléments

### 2. Portfolio Interactif

- **Galerie fullscreen** avec navigation fluide
- **Filtres animés** par catégorie (Portrait, Mariage, Corporate, Lifestyle)
- **Lightbox avancée** avec zoom haute définition
- **Mode avant/après** avec slider pour retouches
- **Lazy loading** progressif avec blur placeholder

### 3. Système de Réservation

- **Calendrier interactif** temps réel
- **Configurateur de séance**:
  - Type de shooting (dropdown animé)
  - Durée (slider avec prix dynamique)
  - Options supplémentaires (checkboxes stylées)
- **Estimation prix** en temps réel
- **Questionnaire pré-séance** (form multi-étapes)

### 4. Visite Virtuelle Studio

- **Environnement 3D** avec Three.js
- **Navigation libre** dans l'espace
- **Hotspots interactifs** montrant équipements
- **Preview setups** d'éclairage différents
- **Mode mobile** adapté (controls tactiles)

### 5. Sections Additionnelles

- **À propos** avec parallax et animations
- **Témoignages** carousel avec vidéos
- **Blog/Actualités** (3 derniers posts)
- **Contact** avec map interactive
- **Footer** minimaliste avec réseaux sociaux

## 🎭 Composants UI Clés

### MiamiButton

```tsx
// Bouton avec glow effect rose néon
interface MiamiButtonProps {
  variant: "primary" | "secondary" | "ghost";
  glowIntensity?: "low" | "medium" | "high";
  children: React.ReactNode;
}
```

### NeonGrid

```tsx
// Grid néon animé background
interface NeonGridProps {
  density: number;
  color: string;
  animated: boolean;
}
```

### PhotoGallery

```tsx
// Galerie avec filtres et lightbox
interface PhotoGalleryProps {
  photos: Photo[];
  categories: Category[];
  defaultFilter?: string;
}
```

### BookingForm

```tsx
// Form multi-étapes avec validation
interface BookingFormProps {
  availableSlots: TimeSlot[];
  onSubmit: (data: BookingData) => void;
}
```

## 📱 Responsive Design

- **Mobile First** avec breakpoints Tailwind
- **Touch gestures** pour galerie et visite 3D
- **Menu hamburger** animé sur mobile
- **Navigation adaptative** selon la taille d'écran

## ⚡ Performance

- **Images optimisées** avec Next/Image + Cloudinary
- **Lazy loading** pour photos et composants 3D
- **Code splitting** automatique Next.js
- **Compression** assets automatique
- **Lighthouse score** cible: 90+

## 🔧 Configuration Développement

### Installation

```bash
npm create next-app@latest neversad-studio --typescript --tailwind
cd neversad-studio
npm install framer-motion three @types/three react-hook-form zod
```

### Variables d'environnement

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_SITE_URL=
```

### Scripts principaux

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "type-check": "tsc --noEmit"
}
```

## 🎯 Points d'attention

- **Taille limitée**: Projet conçu pour tenir dans le contexte maximal
- **Pas de backend complexe**: Utilisation de services externes
- **Images légères**: Compression et lazy loading prioritaires
- **Code modulaire**: Composants réutilisables maximum
- **Performance mobile**: Optimisations tactile obligatoires

## 📋 Todo Implementation

1. Setup Next.js + Tailwind + TypeScript
2. Créer composants UI de base (MiamiButton, NeonGrid)
3. Implémenter homepage avec hero animé
4. Développer galerie portfolio interactive
5. Créer système de réservation
6. Intégrer visite virtuelle 3D
7. Optimiser performance et responsive
8. Tests et déploiement Vercel

---

_Design Miami Vice rose néon pour studio photo premium - Optimisé pour développement rapide et performance maximale_

## 🚀 Quick Setup

The project structure has been automatically created. To get started:

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and fill your API keys
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)
