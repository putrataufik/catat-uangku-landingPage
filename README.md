# catat-uangku-landingPage

### Prosedur Update:
1. masuk ke ssh "ec2"
```bash
ssh user@your-ec2-ip

2. masuk ke project
```
cd catat-uangku-landingPage

3. Tarik Code yang baru dari github.
```sh
git pull
```
4. matikan docker compose
```sh
docker compose down
```
5. Build kembali dockernya 
```sh
docker compose up --build -d
```