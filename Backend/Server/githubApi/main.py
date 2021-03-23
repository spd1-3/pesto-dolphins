import requests

headers = {"Authorization":"token 9c631681838ec65c3034018489087626d2c67dcb"}

def run_query(query): 
    request = requests.post('https://api.github.com/graphql', json={'query': query}, headers=headers)
    if request.status_code == 200:
        return request.json()
    else:
        raise Exception("Query failed to run by returning code of {}. {}".format(request.status_code, query))
query = """        
{
  search(query: "org:spd1-3", type: REPOSITORY, last: 100) {
    nodes {
      ... on Repository {
        name
        defaultBranchRef {
          name
          target {
            ... on Commit {
              history(first: 100, since: "2021-01-11T00:00:00") {
                totalCount
                nodes {
                  ... on Commit {
                    committedDate
                    additions
                    author {
                      name
                      email
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
"""
result = run_query(query)
remaining_rate_limit = result["data"]
print("Remaining rate limit - {}".format(remaining_rate_limit))
