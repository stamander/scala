export default function callbackSample(){
  const url = "https://api.github.com/users/stamander"
  const fetchProfile = () =>{
    fetch(url)
    .then((res)=>{
      res.json()
        .then((json)=>{
          console.log("asyncronnos sample1",json)
          return json
        })
      .catch((error)=>{
        console.error(error)
      })

    })
    .catch((error)=>{
      console.error(error)
    })
  }

  const profile = fetchProfile()
  console.log("asyncronnos sample2",profile)
}