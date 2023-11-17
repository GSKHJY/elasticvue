const randomId = () => {
  return (Math.random() + 1).toString(36).substring(2) + (Math.random() + 1).toString(36).substring(2)
}

export const catIndices = {
  url: 'http://localhost:9200/_cat/indices/?h=index%2Chealth%2Cstatus%2Cuuid%2Cpri%2Crep%2Cdocs.count%2Cstore.size&bytes=b',
  json: [
    {
      'index': 'movies',
      'health': 'green',
      'status': 'open',
      'uuid': randomId(),
      'pri': '1',
      'rep': '1',
      'docs.count': 0,
      'store.size': 0
    },
    {
      'index': 'omdb',
      'health': 'green',
      'status': 'open',
      'uuid': randomId(),
      'pri': '1',
      'rep': '1',
      'docs.count': 0,
      'store.size': 0
    }
  ]
}
