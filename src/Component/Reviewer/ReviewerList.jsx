import React from 'react'
import Reviewer_01 from '../../asset/reviewer/org 1.png'
import Reviewer_02 from '../../asset/reviewer/org 2.png'
import Reviewer_03 from '../../asset/reviewer/org 3.png'
import Reviewer from './Reviewer'

export default function ReviewerList() {
    return (
        <>
            <section className="section-5 reviewer">
                <div className="container">
                <h4 className="text-center pt-4 mb-5">Pengalaman Pengguna Transportasi Umum</h4>
                <div className="row">
                    <Reviewer 
                    img={Reviewer_01} 
                    feedback="Puas dengan fasilitas yang disediakan, tetapi karyawan terkesan cuek dan sopir ugal-ugalan" 
                    star={<><i class="fas fa-star star-orange mr-1"></i><i class="fas fa-star star-orange mr-1"></i><i
                    class="fas fa-star star-orange mr-1"></i><i class="fas fa-star star-orange mr-1"></i><i
                    class="fas fa-star"></i></>}
                    />
                    <Reviewer 
                    img={Reviewer_02} 
                    feedback="Fasilitas tidak menunjang untuk para Lansia. Halte terkesan jorok dan tidak terawat" 
                    star={<><i class="fas fa-star star-orange mr-1"></i><i class="fas fa-star mr-1"></i><i
                    class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star"></i></>}
                    />
                    <Reviewer 
                    img={Reviewer_03} 
                    feedback="Karyawan murah senyum, halte terawat dengan sangat baik, murah meriah
                    sehingga menghemat uang jajan" 
                    star={<><i class="fas fa-star star-orange mr-1"></i><i class="fas fa-star star-orange mr-1"></i><i
                    class="fas fa-star star-orange mr-1"></i><i class="fas fa-star star-orange mr-1"></i><i
                    class="fas fa-star star-orange"></i></>}
                    />
                    
                    
                </div>
                </div>
            </section>
        </>
    )
}
