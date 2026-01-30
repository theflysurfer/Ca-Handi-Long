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

### VPS Hostinger

- **SSH** : `automation@69.62.108.82`
- **Config Nginx** : `/etc/nginx/sites-enabled/ca-handi-long`
- **Root** : `/home/automation/apps/ca-handi-long/dist`
- **SSL** : Let's Encrypt (auto-renew)

### Commandes de déploiement

```bash
# 1. Build local
npm run build

# 2. Upload sur le serveur
scp -r dist/* automation@69.62.108.82:/home/automation/apps/ca-handi-long/dist/
```

### SSH direct

```bash
ssh automation@69.62.108.82
cd /home/automation/apps/ca-handi-long
```

## Collaborateurs

- **theflysurfer** (owner)
- **clemsfou** (collaborator - write access)

## Repo GitHub

https://github.com/theflysurfer/Ca-Handi-Long
