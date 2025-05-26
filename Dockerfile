# Gunakan image ringan Nginx versi Alpine
FROM nginx:alpine

# Salin konfigurasi custom nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Salin semua file statis ke folder HTML default nginx
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Perintah default (sudah bawaan dari base image sebenarnya, tapi ditulis eksplisit)
CMD ["nginx", "-g", "daemon off;"]
