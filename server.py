import http.server
import socketserver
import os


class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            # Serve 'index.html' when the root / is requested
            self.path = "/index.html"
        elif "." not in os.path.basename(self.path):
            # If no file extension is specified, assume .html
            self.path += ".html"
        return http.server.SimpleHTTPRequestHandler.do_GET(self)


PORT = 8080

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Serving on http://localhost:{PORT}")
    httpd.serve_forever()
