import Image from "next/image";
import summersale from "/public/summersale.jpg";

export default function photo() {
	return <Image src={summersale} placeholder="blur" />;
}
