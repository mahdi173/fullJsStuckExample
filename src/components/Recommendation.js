


function Recommendation() {
    const currentMonth= new Date().getMonth()
    const isSpring=currentMonth >=2 && currentMonth<=5
      if(!isSpring){
           return  <div>Ce nest pas le moment</div>
      }
      return  <div>Cest le printemps</div>
}

export default Recommendation
