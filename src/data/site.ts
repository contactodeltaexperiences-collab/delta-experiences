export const site = {
	name: "Delta Experiences",
	tagline: "Más que un paseo, una experiencia",
	whatsappNumber: "5491165150504",
	whatsappMessage: "Hola, quisiera saber más sobre los tours de Delta Experiences 🌿",
	email: "contacto.deltaexperiences@gmail.com",
	phoneDisplay: "+54 911 6515-0504",
	instagramHandle: "deltaexperiencesarg",
	instagramUrl: "https://www.instagram.com/deltaexperiencesarg",
	heroVideoHls: "https://vz-4340bc4e-ca8.b-cdn.net/7b6466d1-da66-4621-a63f-226129fb42e6/playlist.m3u8",
	// TODO: pegar acá la URL del segundo video (el clickeable) de tu librería en Bunny Stream
	galleryVideoSrc: "",
	galleryVideoPoster: "/images/gallery-1.jpg",
	// TODO: reemplazar por tu access key gratuita de https://web3forms.com
	web3formsAccessKey: "REEMPLAZAR_CON_TU_ACCESS_KEY",
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
