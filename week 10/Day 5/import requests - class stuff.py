import requests
base_url = 'https://pokeapi.co/api/v2/'

def pokemon_by_id(id):
    endpoint = f'pokemon/{id}'
    print(base_url+endpoint)
    response = requests.get(base_url+endpoint)
    if 300 > response.status_code >= 200:

        return response.json()
    else:
        return


num = 600
while True:
    data = pokemon_by_id(num)

    if not data:
        break

    print(data['name'])
    num += 1