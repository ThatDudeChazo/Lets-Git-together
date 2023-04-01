function asteroidCollision(asteroids){
    const arr = []
    const arrneg = []
    let i
    for (let i = 0; i < asteroids.length; i++) {
        if(Math.sign(asteroids[i])==1 )
        {
            arr[i] = asteroids[i]
            

        }
        if(Math.sign(asteroids[i])==-1){

            arrneg[i] = asteroids[i]
            //console.log(arrneg)
        }
        
        if(Math.abs(arr[i-1])<Math.abs(arrneg[i]))
        {
        arr.pop()
        //console.log(arr)
        }
        if(arr[i-1]+arrneg[i]==0)
        {
            const arr=[]
            //console.log(arr)
            return arr
        }

        
        
    }
    
    
    return arr
 

}
console.log(asteroidCollision([5,10,-5]))
console.log(asteroidCollision([8,-8]))
console.log(asteroidCollision([10,2,-5]))
console.log(asteroidCollision([-2,-1,1,2]))