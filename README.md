# cube-run

# Development server

Instructions for Linux, for more instructions (eg. for Windows) see [here](https://gist.github.com/Samuel-Risner/2318e00383ebf54dfc96e7a04e691334)

Create virtual environment

```sh
virtualenv venv
```

Enter virtual environment

```sh
source venv/bin/activate
```

Install requirements

```sh
pip install -r requirements.txt
```

Run server

```sh
python server.py
```

Exit environment

```sh
deactivate
```

# Building

Install npm packages

```sh
npm install
```

Build javascript/typescript

```sh
npm run build_wp
```