import app from './app'

const PORT =  process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is runnig on PORT: ${PORT}`)
})