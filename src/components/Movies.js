
const Movies = ({input,movie,loading}) => {
    
   

    


    return (
        <div>
            {
                input===""?
                <h1>.</h1>
                :
            <div>
                {
                    loading?(
                        <h1>.</h1>
                        ):<div>{movie.map((el,i)=><div key={i} > 
                            <img style={{display:'flex',width:'50%'}} src={el.i.imageUrl} alt='' />
                            <h1>{el.l}</h1>
                            <h2>Rank:{el.rank}</h2>
                            </div>
                       )}
                        
                        </div>
                    }
            </div>
            }
        </div>
    )
}

export default Movies
