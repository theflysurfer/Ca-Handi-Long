# Ca Handi Long - Instructions Claude

Site vitrine pour le spectacle d'improvisation inclusif "Ça Handi Long".

## Site en production

**URL** : https://ca-handi-long.srv759970.hstgr.cloud/

## Stack

- **Framework**: React 19 + TypeScript + Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS + Framer Motion
- **Maps**: React Leaflet

## Déploiement

### 1. Build

```bash
npm run build
```

Le build génère le dossier `dist/` avec les fichiers statiques.

### 2. Déployer sur VPS Hostinger

```bash
# Build local
npm run build

# Upload sur le serveur
scp -r dist/* srv759970:/home/automation/apps/ca-handi-long/dist/
```

**Config Nginx**: `/etc/nginx/sites-enabled/ca-handi-long`
**Root**: `/home/automation/apps/ca-handi-long/dist`
**SSL**: Let's Encrypt (auto-renew)

## Collaborateurs

- **theflysurfer** (owner)
- **clemsfou** (collaborator - write access)

## Repo GitHub

https://github.com/theflysurfer/Ca-Handi-Long
