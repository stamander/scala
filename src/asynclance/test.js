const getGitUsername = async function(){
  const message = "gitのユーザーIDは"
  const url = "https://api.github.com/users/stamander"

  const json =  await fetch(url)
    .then(res =>{
      console.log('非同期成功')
      return res.json()
    }).catch(error =>{
      console.log('非同期失敗',error)
      return null
    });
    

    const username = json.login;
    console.log(message + username)
}

getGitUsername();