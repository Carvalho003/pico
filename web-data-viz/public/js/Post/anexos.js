
const inputPost = document.getElementById('ipt_anexos_post')

inputPost.addEventListener('change',  (e) => {
        
    preview_area_post.innerHTML = "";
    console.log(e)
    const files = e.target.files;

    if(files && files.length > 0){

        console.log('entrouu')
        
        if(files.length == 1){
            const reader = new FileReader()

            reader.onload = () => {

                const img = new Image();
                img.onload = () => {
                const width = img.width;
                const height = img.height

                
                

                console.log(reader.result)
                console.log(preview_area_post)
                preview_area_post.innerHTML += `<div style="width:${width};max-width:100%;height:${height}px;background-image: url('${reader.result}')" class="foto-post "></div>`;
                           
                }

                img.src = reader.result
                
            }
            

        reader.readAsDataURL(files[0])
        }else{
        for(let i = 0; i < files.length; i ++){
            const reader = new FileReader()

            reader.onload = () => {
                console.log(reader.result)
                console.log(preview_area_post)
                preview_area_post.innerHTML += `<div style="background-image: url('${reader.result}')" class="foto-post "></div>`;
                                      
                
                
            }
            

        reader.readAsDataURL(files[i])
        }
    }
    }
})

