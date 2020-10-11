import http.server
import socketserver
import json
import random

PORT = 1005

jokes = [
  {
    "id": 246,
    "type": "general",
    "setup": "What does a clock do when it's hungry?",
    "punchline": "It goes back four seconds!"
  },
  {
    "id": 127,
    "type": "general",
    "setup": "How do you get two whales in a car?",
    "punchline": "Start in England and drive West."
  },
  {
    "id": 3,
    "type": "general",
    "setup": "What's Forrest Gump's password?",
    "punchline": "1Forrest1"
  },
  {
    "id": 166,
    "type": "general",
    "setup": "What did one wall say to the other wall?",
    "punchline": "I'll meet you at the corner!"
  },
  {
    "id": 341,
    "type": "general",
    "setup": "Why did the house go to the doctor?",
    "punchline": "It was having window panes."
  },
  {
    "id": 38,
    "type": "general",
    "setup": "I'm reading a book about anti-gravity...",
    "punchline": "It's impossible to put down"
  },
  {
    "id": 138,
    "type": "general",
    "setup": "How does the moon cut his hair?",
    "punchline": "Eclipse it."
  },
  {
    "id": 238,
    "type": "general",
    "setup": "What do you do on a remote island?",
    "punchline": "Try and find the TV island it belongs to."
  },
  {
    "id": 371,
    "type": "general",
    "setup": "Why does a chicken coop only have two doors?",
    "punchline": "Because if it had four doors it would be a chicken sedan."
  },
  {
    "id": 214,
    "type": "general",
    "setup": "What do you call a duck that gets all A's?",
    "punchline": "A wise quacker."
  }
]


class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def _set_headers(self):
        # Setting the header
        self.send_header("Content-type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")

        # Whenever using 'send_header', you also have to call 'end_headers'
        self.end_headers()
        return

    def get_one_joke(self):
        return jokes[random.randint(0, 9)]

    def get_jokes(self):
        return jokes

    def do_GET(self):
        if self.path == '/jokes':
            self.send_response(200)
            self._set_headers()
            result = self.get_jokes()
            print(result)
            self.wfile.write(bytes(json.dumps(result), 'utf8'))
            return

        if self.path == '/jokes/one':
            self.send_response(200)
            self._set_headers()
            result = self.get_one_joke()
            self.wfile.write(bytes(json.dumps(result), 'utf8'))
            return

        self.send_response(404)
        self._set_headers()
        return


# Create an object of the above class
handler = MyHttpRequestHandler

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print("Server started at localhost:" + str(PORT))
    httpd.serve_forever()
