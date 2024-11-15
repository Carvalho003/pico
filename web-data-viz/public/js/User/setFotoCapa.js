document.addEventListener('DOMContentLoaded', function () {
    const inputImage = document.getElementById('ipt_foto');
    const inputCapa = document.getElementById('ipt_foto_capa')
    const image = document.getElementById('image');
    const cropButton = document.getElementById('cropButton');
    const previewCanvas = document.getElementById('previewCanvas');

    let foto = "";

    let cropper;
  
    // Quando uma imagem é selecionada
    inputImage.addEventListener('change', (event) => {
        foto = "foto"
      const files = event.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        
        reader.onload = () => {
          image.src = reader.result;
          image.style.display = 'block';
  
          // Inicializa o CropperJS
          if (cropper) {
            cropper.destroy();
          }
          cropper = new Cropper(image, {
            aspectRatio: 1, // Ajuste a proporção se necessário
            viewMode: 1
          });
        };
        reader.readAsDataURL(file);
      }
    });
  
    // Quando o botão "Cortar" é clicado
    cropButton.addEventListener('click', () => {
      if (cropper) {
        const croppedCanvas = cropper.getCroppedCanvas();
        croppedCanvas.toBlob((blob) => {
          console.log(blob)
          const formData = new FormData();
          formData.append("image", blob, `perfil${user.id}.png`);

           if(foto == "foto"){ 

          fetch(`http://localhost:3333/api/users/${user.id}/foto`, {
              method: 'PUT',
              body: formData
          }).then(res => res.json()).then(res => {
              console.log(res);
              user.foto = res.file
              sessionStorage.setItem("user", JSON.stringify(user))
              disableEditarPerfil()
              fillPerfil();
              foto_perfil_bola.style.backgroundImage = `url('../../uploads/${user.foto}')`
              crop_space.style.display = 'none'
          }).catch(e => {
              console.log(e)
          })
        }else{
            fetch(`http://localhost:3333/api/users/${user.id}/fotoCapa`, {
                method: 'PUT',
                body: formData
            }).then(res => res.json()).then(res => {
                console.log(res);
                user.fotoCapa = res.file
                sessionStorage.setItem("user", JSON.stringify(user))
                disableEditarPerfil()
                fillPerfil();
                foto_capa_perfil.style.backgroundImage = `url('../../uploads/${user.fotoCapa}')`
                crop_space.style.display = 'none'
            }).catch(e => {
                console.log(e)
            })
        }
  
        } )
      //   previewCanvas.width = croppedCanvas.width;
      //   previewCanvas.height = croppedCanvas.height;
      //   const ctx = previewCanvas.getContext('2d');
      //   ctx.drawImage(croppedCanvas, 0, 0);
      }
    });


    inputCapa.addEventListener('change',  (e) => {
        
        foto= "capa"
        console.log(e)
        const files = e.target.files;
    
        if(files && files.length > 0){

            console.log('entrouu')
            const file = files[0]
    
            const reader = new FileReader()
            reader.onload = () => {
                image.src = reader.result
                image.style.display = 'block';
            
    
                if(cropper) {
                    cropper.destroy();
                }
    
                cropper = new Cropper(image, {
                    aspectRatio:16 / 9,
                    viewMode: 1
                });
            }
            reader.readAsDataURL(file)
        }
    })

  });



let cropper
console.log(ipt_foto_capa)
