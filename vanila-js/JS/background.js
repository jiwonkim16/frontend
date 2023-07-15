const images = ["1.jpg", "2.jpg", "3.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)]  // 필요한 숫자는 0~2까지이기 때문에 *images.length
// Math object는 수학과 관련된 메서드의 모음

const bgImage = document.createElement("img")  // js에서 html태그를 만들어서 html에 추가
bgImage.src = `img/${chosenImage}`  // html img태그의 src는 img폴더 안에 images[0~2] 중 임의 값 → img src="img/0.jpg"

document.body.appendChild(bgImage)  // html의 body태그 내부에 bgImage를 추가