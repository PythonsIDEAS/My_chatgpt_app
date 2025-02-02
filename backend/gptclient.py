import ssl
import certifi
from functools import partial
from g4f.client import Client  # Ensure that the g4f package is installed correctly

# Set SSL configuration
ssl.default_ca_certs = certifi.where()
ssl.create_default_context = partial(
    ssl.create_default_context,
    cafile=certifi.where()
)

class GPTClient:
    def __init__(self):
        # Initialize the GPT-4 client
        self.client = Client()
        self.history = []
    
    def add_message(self, role, content):
        """Add a message to the conversation history."""
        self.history.append({"role": role, "content": content})
    
    def get_response(self, user_message):
        """Get the GPT-4 response based on user input."""
        self.add_message("user", user_message)
        
        # Get response from GPT-4
        try:
            response = self.client.chat.completions.create(
                model="gpt-4",
                messages=self.history,
                web_search=False
            )
            
            assistant_response = response.choices[0].message.content
            self.add_message("assistant", assistant_response)  # Save the assistant's response
            
            return assistant_response
        except Exception as e:
            return str(e)