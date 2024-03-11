import React, { useState } from 'react';
 
import './Intro.css';
import Image from 'next/image';
import { categorys } from '@/constants/data';
import CustomButton from './CustomButton';
import Link from 'next/link';

const Intro = () => {

    
   return (
    <div className="gallery-section">
		<div className="container">
      <h2 className="text-center mb-4">Our Gallery</h2>
			<div className="gallery-box">
				<div className="box big">
					<Link href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCwMv49R61qm7nan5-gQ9s0n3ihqCf8ZKmz87oBI1UCUGTkse9" data-fancybox="gallery1">
						<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCwMv49R61qm7nan5-gQ9s0n3ihqCf8ZKmz87oBI1UCUGTkse9" className="img-fluid" alt='hi'/>
					</Link>
				</div>



				<div className="box">
					<Link href="https://www.mediamutation.com/wp-content/uploads/2017/03/Nature-HD-Wallpapers-for-Desktop-4K-3D-Nature-Beautiful-Wallpapers-free-download-for-Laptop-PC-5.jpg" data-fancybox="gallery1">
						<Image src="https://www.mediamutation.com/wp-content/uploads/2017/03/Nature-HD-Wallpapers-for-Desktop-4K-3D-Nature-Beautiful-Wallpapers-free-download-for-Laptop-PC-5.jpg" className="img-fluid" alt='hi'/>
					</Link>
				</div>
				<div className="box">
					<Link href="https://www.wallpaperup.com/uploads/wallpapers/2013/04/04/69762/ca9040dcf5a518069d7805e0e0190179-700.jpg" data-fancybox="gallery1">
						<Image src="https://www.wallpaperup.com/uploads/wallpapers/2013/04/04/69762/ca9040dcf5a518069d7805e0e0190179-700.jpg" className="img-fluid" alt='hi'/>
					</Link>
				</div>
				<div className="box horizontal">
					<Link href="https://live.staticflickr.com/4211/35742680691_f459003310_b.jpg" data-fancybox="gallery1">
						<Image src="https://live.staticflickr.com/4211/35742680691_f459003310_b.jpg" className="img-fluid" alt='hi'/>
					</Link>
				</div>
				<div className="box">
					<Link href="https://i.pinimg.com/originals/73/b1/14/73b114d47d261af05ed35c7ce64f1e19.jpg" data-fancybox="gallery1">
						<Image src="https://i.pinimg.com/originals/73/b1/14/73b114d47d261af05ed35c7ce64f1e19.jpg" className="img-fluid" alt='hi'/>
					</Link>
				</div>
				<div className="box vertical">
					<Link href="https://404store.com/2018/07/09/63f883.jpg" data-fancybox="gallery1">
						<Image src="https://404store.com/2018/07/09/63f883.jpg" className="img-fluid" alt='hi'/>
					</Link>
				</div>
				<div className="box vertical">
					<Link href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1" data-fancybox="gallery1">
						<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQu8nlAEzW63m0pKcq9csbtk-3ni_QlvW4uy6DgeaWbO4Fze1" className="img-fluid" alt='hi'/>
					</Link>
				</div>
				<div className="box horizontal">
					<Link href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" data-fancybox="gallery1">
						<Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" className="img-fluid" alt='hi'/>
					</Link>
				</div>
				<div className="box">
					<Link href="https://i.pinimg.com/474x/fd/c5/64/fdc564647e236a403c0247bcd1acba6c--moon-painting-sun-moon-stars.jpg" data-fancybox="gallery1">
						<Image src="https://i.pinimg.com/474x/fd/c5/64/fdc564647e236a403c0247bcd1acba6c--moon-painting-sun-moon-stars.jpg" className="img-fluid" alt='hi'/>
					</Link>
				</div>
				<div className="box">
					<Link href="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687" data-fancybox="gallery1">
						<Image src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687" className="img-fluid" alt='hi'/>
					</Link>
				</div>
				<div className="box vertical">
					<Link href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQmgqcbw34jPT7nIcg64C3prXhPgzFf34OhvZuAAHfShVnvAGw" data-fancybox="gallery1">
						<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQmgqcbw34jPT7nIcg64C3prXhPgzFf34OhvZuAAHfShVnvAGw" className="img-fluid" alt='hi'/>
					</Link>
				</div>
				<div className="box horizontal">
					<Link href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfSV9AGQi9c48oRysYiuSs9Bs4J3B2p4R3eh-z1hsS-Z01HD17" data-fancybox="gallery1">
						<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfSV9AGQi9c48oRysYiuSs9Bs4J3B2p4R3eh-z1hsS-Z01HD17" className="img-fluid" alt='hi'/>
					</Link>
				</div>
				<div className="box">
					<Link href="https://i.pinimg.com/474x/fd/c5/64/fdc564647e236a403c0247bcd1acba6c--moon-painting-sun-moon-stars.jpg" data-fancybox="gallery1">
						<Image src="https://i.pinimg.com/474x/fd/c5/64/fdc564647e236a403c0247bcd1acba6c--moon-painting-sun-moon-stars.jpg" className="img-fluid" alt='hi'/>
					</Link>
				</div>
				<div className="box">
					<Link href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" data-fancybox="gallery1">
						<Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" className="img-fluid" alt='hi'/>
					</Link>
				</div>

				
			</div>

		</div>
	</div>
   );
  
};

export default Intro;