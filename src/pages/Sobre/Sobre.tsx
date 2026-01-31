import "./Sobre.css";
import pfpJpg from "#assets/MVIMG_20250718_143304.jpg";
import pfp2k from "#assets/PFP.webp";
import pfpFhd from "#assets/PFP FHD.webp";
import pfpHd from "#assets/PFP HD.webp";

export default function Sobre() {
	return (<>
			<h1 className="title">Sobre Mim</h1>
			<picture id="picture-pfp">
				<source
					media="(min-width: 2560px)"
					srcSet={pfp2k}
				/>
				<source
					media="(min-width: 1281px)"
					srcSet={pfpFhd}
				/>
				<source
					media="(max-width: 1280px)"
					srcSet={pfpHd}
				/>
				<img
					src={pfpJpg}
					id="pfp"
					alt="Foto de perfil de Erik."
				/>
			</picture>

			<h2 id="bio">Bio</h2>
			<p>Tenho 22 anos, sou apaixonado por tecnologia desde meados de 2013, quando ganhei meu primeiro computador 
				(um Core 2 Duo E7500 sem <abbr title="Placa de vídeo">GPU</abbr> e com 4GB de RAM) e me esforçava pra rodar os jogos que eu 
				curtia nele. E por conta dessa paixão trabalhei junto à minha mãe, na confecção e venda de cones trufados 
				e pipocas <i>gourmet</i> para juntar dinheiro e comprar meu primeiro PC efetivamente para jogos... Com este peguei gosto por 
				programar e entender o funcionamento básico de computadores, então me formei técnico em informática pelo&ensp;
				<abbr title="Instituto Federal do Paraná">IFPR</abbr> &#8212; câmpus Londrina e atualmente estou graduando em engenharia 
				de computação pela <abbr title="Universidade Tecnológica Federal do Paraná">UTFPR</abbr> &#8212; câmpus Cornélio Procópio.
			</p>
			
			<h2>Objetivo Profissional</h2>
			<p>
				Iniciar minha carreira de desenvolvedor como estagiário ou trainee, em uma das áreas que mais gosto 
				(Web, Jogos, Infra &#8212; DevOps) para um dia ser um tech lead / sênior respeitável na área.
			</p>

			<h2>Hobbies</h2>
			<p>
				No meu tempo livre gosto de jogar, fazer lives, tocar uma guitarra e aprender coisas novas, seja em 
				tecnologia ou outras áreas!
			</p>

			<h2></h2>
		
	</>);
}
