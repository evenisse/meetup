import bottle

@bottle.route('/')
def server_static():
    return bottle.static_file('index.html', root='.')

@bottle.route('/js/<filename>')
def server_static_js(filename):
    return bottle.static_file(filename, root='./js')

@bottle.route('/js/libs/<filename>')
def server_static_js(filename):
    return bottle.static_file(filename, root='./js/libs')

@bottle.route('/css/<filename>')
def server_static_css(filename):
    return bottle.static_file(filename, root='./css')

@bottle.route('/images/<filename>')
def server_static_images(filename):
    return bottle.static_file(filename, root='./images')

bottle.run(host='localhost', port=8080)

