import { toast } from "react-toastify";
export const myToast = (msg, type = "error") => {
    toast[type](msg);
  };

// galary img
export const handleGalary = [
  {
    "id":1,
    "image": "https://theme-coderstation.com/assets/img/gallery/1.jpg",
    "division": "Donation"
  },
  {
    "id":2,
    "image": "https://theme-coderstation.com/assets/img/gallery/2.jpg",
    "division": "Donation"
  },
  {
    "id":3,
    "image": "https://theme-coderstation.com/assets/img/gallery/5.jpg",
    "division": "Education"
  },
  {
    "id":4,
    "image": "https://theme-coderstation.com/assets/img/gallery/4.jpg",
    "division": "Blood"
  },
  {
    "id":5,
    "image": "https://theme-coderstation.com/assets/img/gallery/3.jpg",
    "division": "Blood"
  },
  {
    "id":6,
    "image": "https://media.istockphoto.com/id/1491192988/photo/working-towards-a-bright-future.jpg?s=612x612&w=0&k=20&c=8l6p4Br4Jg0HiPTGVsc1V4r6melejSNF2lh3vFhnwXs=",
    "division": "Tecnology"
  },
  {
    "id":7,
    "image": "https://green.org/wp-content/uploads/2024/01/R-91-1024x683.jpg",
    "division": "Tecnology"
  },
  {
    "id":8,
    "image": "https://www.gardenandgreenhouse.net/wp-content/uploads/2017/01/Vertical-Hydroponic-Systems-1-1024x683.jpg",
    "division": "Tecnology"
  },
  {
    "id":9,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnP6oUT2ZnF3vvFXYdE6P7k5sCkVYCRcIVOQ&s",
    "division": "Education"
  }

]
