# Ca Handi Long - Instructions Claude

Site vitrine pour le spectacle d'improvisation inclusif "Ça Handi Long".

## Stack

- **Framework**: React 19 + TypeScript + Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS + Framer Motion
- **Maps**: React Leaflet

## Déploiement

### 1. Build

```bash
cd Ca-Handi-Long
npm run build
```

Le build génère le dossier `dist/` avec les fichiers statiques.

### 2. Hébergement

Le site est déployé sur **deux environnements**:

| Environnement | URL | Déploiement |
|---------------|-----|-------------|
| **VPS Hostinger** | https://ca-handi-long.srv759970.hstgr.cloud | Manuel via SCP |
| **GitHub Pages** | https://theflysurfer.github.io/Ca-Handi-Long/ | Automatique via GitHub Actions |

### 3. Déployer sur VPS Hostinger

```bash
# Build local (base path = /)
npm run build

# Upload sur le serveur
scp -r dist/* srv759970:/home/automation/apps/ca-handi-long/dist/
```

**Config Nginx**: `/etc/nginx/sites-enabled/ca-handi-long`
**Root**: `/home/automation/apps/ca-handi-long/dist`
**SSL**: Let's Encrypt (auto-renew)

### 4. Déployer sur GitHub Pages

Le déploiement est **automatique** via GitHub Actions à chaque push sur `main`.

```bash
# Commit et push
git add .
git commit -m "feat: description"
git push origin main
```

Le workflow `.github/workflows/deploy.yml` :
1. Checkout le code
2. Installe les dépendances
3. Build avec `GITHUB_ACTIONS=true` (base path `/Ca-Handi-Long/`)
4. Déploie sur GitHub Pages

### 5. Workflow complet (les deux)

```bash
# 1. Build pour Hostinger (base = /)
npm run build
scp -r dist/* srv759970:/home/automation/apps/ca-handi-long/dist/

# 2. Commit et push (déclenche GitHub Pages)
git add .
git commit -m "feat: description"
git push origin main
```

## Base Path

Le fichier `vite.config.ts` gère automatiquement le base path:

```typescript
base: process.env.GITHUB_ACTIONS ? '/Ca-Handi-Long/' : '/',
```

- **Local/Hostinger**: `/` (racine)
- **GitHub Pages**: `/Ca-Handi-Long/` (sous-dossier)

## Collaborateurs

- **theflysurfer** (owner)
- **clemsfou** (collaborator - write access)

## Repo GitHub

https://github.com/theflysurfer/Ca-Handi-Long
