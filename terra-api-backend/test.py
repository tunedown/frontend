import requests
import time

def generate_lyrics(prompt="", gpt_description_prompt=None, tags=None, token="Your_Token_Here"):
    url = "https://studio-api.suno.ai/api/generate/v2/"
    headers = {
        'Authorization': f'Token {"27vBVYOihJHET0VS7bC2xCcF7C7rJFra"}',
        'Content-Type': 'application/json'
    }
    data = {
        'prompt': prompt,
        'gpt_description_prompt': gpt_description_prompt,
        'tags': tags,
        'mv': "chirp-v3-5"
    }
    data = {key: value for key, value in data.items() if value is not None}
    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 200:
        return response.json()
    else:
        return response.text

def check_audio_status(status_url, token):
    headers = {'Authorization': f'Token {token}'}
    while True:
        response = requests.get(status_url, headers=headers)
        if response.status_code == 200:
            data = response.json()
            if data.get('audio_url'): 
                return data['audio_url']
            else:
                print("Audio still processing. Waiting...")
                time.sleep(10)
        else:
            print("Failed to fetch status. Retrying...")
            time.sleep(10)

# Example usage
response = generate_lyrics(gpt_description_prompt="a pop song about HackMIT", token="Your_API_Token")
if 'au' in response:
    audio_url = check_audio_status(response['status_url'], "Your_API_Token")
    print(f"Audio URL: {audio_url}")
else:
    print("Error or missing status URL")
