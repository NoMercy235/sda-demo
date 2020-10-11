import http.server
import socketserver
import json

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
    def do_GET(self):
        # Sending an '200 OK' response
        self.send_response(200)

        # Setting the header
        self.send_header("Content-type", "application/json")

        # Whenever using 'send_header', you also have to call 'end_headers'
        self.end_headers()

        self.wfile.write(bytes(json.dumps(jokes), 'utf8'))

        return


# Create an object of the above class
handler = MyHttpRequestHandler

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print("Server started at localhost:" + str(PORT))
    httpd.serve_forever()
