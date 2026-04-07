// ** React Imports
import { Fragment } from 'react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import '@assets/Boxyreact.css'
// import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import '@styles/react/libs/swiper/swiper.scss'
import SwiperCore, {
  Grid,
  Lazy,
  Virtual,
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Scrollbar,
  A11y
} from 'swiper'
SwiperCore.use([Navigation, Grid, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual, Scrollbar, A11y])
// ** Icons Imports
import {
  ShoppingCart,
  Monitor,
  Code,
  BookOpen,
  Check,
  Server,
  FileText,
  Activity,
  Truck,
  Edit2,
  PenTool,
  Package,
  Bookmark,
  Phone,
  Eye,
  Cpu,
  Heart,
  Award,
  ShoppingBag,
  AlertOctagon,
  MessageSquare,
  Box,
  Upload,
  File,
  Play, DollarSign, HelpCircle, Archive, Users,
  Filter,
  Smartphone
} from 'react-feather'

function handle_eproc() {
  window.open('https://eproc.alvindocs.com', "_blank")
}

function handle_sapb1() {
  window.open('https://sapb1.alvindocs.com', "_blank")
}

function handle_sapb1dev() {
  window.open('https://sapb1dev.alvindocs.com', "_blank")
}

function handle_pdt() {
  window.open('https://pdt.alvindocs.com', "_blank")
}

function handle_guestbook() {
  window.open('https://guest.alvindocs.com', "_blank")
}

function handle_sunfish() {
  window.open('https://sunfish.alvindocs.com', "_blank")
}

function handle_mtc() {
  window.open('https://mtc.alvindocs.com', "_blank")
}

function handle_elearning() {
  window.open('https://elearning.alvindocs.com', "_blank")
}

// function handle_kpi() {
//   window.open('https://kpi.alvindocs.com', "_blank")
// }

// function handle_lion() {
//   window.open('https://lion.alvindocs.com', "_blank")
// }

function handle_car_servation() {
  window.open(' https://teamup.com/ks731s4u77yz5v94sy', "_blank")
}

function handle_spk() {
  window.open('https://spk.alvindocs.com', "_blank")
}

function handle_ticket() {
  window.open('https://ticket.alvindocs.com', "_blank")
}

function handle_teamup() {
  window.open('https://teamup.com/ks2e0aa11cdf0cfff0', "_blank")
}

// function handle_wanotif() {
//   window.open('https://notif.alvindocs.com', "_blank")
// }

function handle_performance() {
  window.open('https://performancemanagement.alvindocs.com', "_blank")
}

function handle_zabbix() {
  window.open('https://zabbix.alvindocs.com', "_blank")
}

// function handle_assets() {
//   window.open('https://asset.alvindocs.com', "_blank")
// }

// function handle_funnel() {
//   window.open('https://funnel.alvindocs.com', "_blank")
// }

function handle_sapreguler() {
  window.open('http://192.168.1.93:9001/', "_blank")
}

// function handle_product() {
//   window.open('https://product.alvindocs.com', "_blank")
// }

function handle_acsmandiri() {
  window.open('https://acsmandiri.alvindocs.com', "_blank")
}

function handle_upload() {
  window.open('https://upload.alvindocs.com', "_blank")
}

function handle_bobj() {
  window.open('https://bobj.alvindocs.com', "_blank")
}


// function handle_kpi_amd() {
//   window.open('https://kpi.aliranmd.com', "_blank")
// }

function handle_userman() {
  window.open('https://userman.aliranmd.com', "_blank")
}

function handle_filedata() {
  window.open('https://files.alvindocs.com', "_blank")
}

function handle_mtc_amd() {
  window.open('https://mtc.aliranmd.com', "_blank")
}

function handle_tsplus_amd() {
  window.open('http://192.168.1.147:9001', "_blank")
}

// function handle_not_found() {
//   console.log("#")
// }

function handle_wazuh() {
  window.open('https://wazuh.alvindocs.com', "_blank")
}
function handle_cari_produk() {
  window.open('http://192.168.1.138:8000', "_blank")
}
function handle_moodle() {
  window.open('http://192.168.1.132', "_blank")
}
function handle_stirling() {
  window.open('https://stirling-pdf.alvindocs.com', "_blank")
}

function handle_aturan_kasir_umum() {
  window.open('https://alvindocatur.sharepoint.com/:f:/s/finc.treasury/Eu6anLQWgjtHpx-P0i1ySSABhqyDfW-MVg4BiQ_72NRhEw?e=ls65H5', "_blank")
}

function handle_aturan_kasir_sales() {
  window.open('https://alvindocatur.sharepoint.com/:f:/r/sites/finc.treasury/Shared%20Documents/Operational/Aturan%20Kasir%20khusus%20Sales?csf=1&web=1&e=dwQANv', "_blank")
}
// function MouseOver(event) {
//   event.target.style.background = '#fcd986'
// }

// function MouseOut(event) {
//   event.target.style.background = ""
// }

function handle_mandiri() {
  window.open('https://koprabymandiri.com', "_blank")
}

function handle_panin() {
  window.open('https://www.panbib.com/paninbib/login.jsp', "_blank")
}

function handle_bni() {
  window.open('https://bnidirect.bni.co.id', "_blank")
}

function handle_bca() {
  window.open('https://vpn.klikbca.com/+CSCOE+/logon.html', "_blank")
}

function handle_mbca() {
  window.open('https://mybcabisnis.bca.co.id/login', "_blank")
}

// onMouseOver={MouseOver} onMouseOut={MouseOut}

const AppGrid = ({ data }) => (
  <Row>
    {data.map((item, index) => (
      <Col lg='3' sm='6' key={index}>
        <div onClick={item.onClick} style={{ cursor: 'pointer' }}>
          <StatsHorizontal
            className="boxyreact p-1"
            icon={item.icon}
            color={item.color}
            stats={item.stats}
            statTitle={item.statTitle}
          />
        </div>
      </Col>
    ))}
  </Row>
)

const AllMenu = () => {
  // const AllMenu = ({ isRtl }) => {

  // const params = {
  //   className: 'swiper-centered-slides-2 swiper-container p-1',
  //   slidesPerView: 'auto',
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   slideToClickedSlide: true
  // }

   /* ================= ACS ================= */
  const acsApps = [
    { stats: 'e-Proc', statTitle: 'eproc.alvindocs.com', icon: <ShoppingCart size={80} />, color: 'primary', onClick: handle_eproc },
    { stats: 'SAP-B1', statTitle: 'sapb1.alvindocs.com', icon: <Monitor size={80} />, color: 'success', onClick: handle_sapb1 },
    { stats: 'SAP-B1 Dev', statTitle: 'sapb1dev.alvindocs.com', icon: <Monitor size={80} />, color: 'danger', onClick: handle_sapb1dev },
    { stats: 'SAP Regular', statTitle: 'tsplus.alvindocs.com:9001', icon: <Monitor size={80} />, color: 'warning', onClick: handle_sapreguler },
    { stats: 'Sunfish', statTitle: 'sunfish.alvindocs.com', icon: <Check size={80} />, color: 'primary', onClick: handle_sunfish },
    { stats: 'MTC', statTitle: 'mtc.alvindocs.com', icon: <Package size={80} />, color: 'success', onClick: handle_mtc },
    { stats: 'Performance', statTitle: 'Performance Management', icon: <Activity size={80} />, color: 'danger', onClick: handle_performance },
    { stats: 'Zabbix', statTitle: 'https://zabbix.alvindocs.com', icon: <Activity size={80} />, color: 'warning', onClick: handle_zabbix },
    { stats: 'BOBJ', statTitle: 'https://bobj.alvindocs.com/BOE/BI', icon: <Box size={80} />, color: 'primary', onClick: handle_bobj },
    { stats: 'SPK', statTitle: 'spk.alvindocs.com', icon: <Server size={80} />, color: 'success', onClick: handle_spk },
    { stats: 'Ticket', statTitle: 'ticket.alvindocs.com', icon: <PenTool size={80} />, color: 'danger', onClick: handle_ticket },
    { stats: 'Meeting Room', statTitle: 'teamup.alvindocs.com', icon: <Bookmark size={80} />, color: 'warning', onClick: handle_teamup },
    { stats: 'PDT', statTitle: 'pdt.alvindocs.com', icon: <Code size={80} />, color: 'primary', onClick: handle_pdt },
    { stats: 'E-Learning', statTitle: 'elearning.alvindocs.com', icon: <FileText size={80} />, color: 'success', onClick: handle_elearning },
    { stats: 'Kasir Umum', statTitle: 'Aturan Kasir Umum', icon: <Edit2 size={80} />, color: 'danger', onClick: handle_aturan_kasir_umum },
    { stats: 'Car Reservation', statTitle: 'teamup.alvindocs.com', icon: <Edit2 size={80} />, color: 'warning', onClick: handle_car_servation },
    { stats: 'Upload', statTitle: 'upload.alvindocs.com', icon: <Upload size={80} />, color: 'primary', onClick: handle_upload },
    { stats: 'ACS Mandiri', statTitle: 'acsmandiri.alvindocs.com', icon: <File size={80} />, color: 'success', onClick: handle_acsmandiri },
    { stats: 'Kasir Sales', statTitle: 'Aturan Kasir Khusus Sales', icon: <Box size={80} />, color: 'danger', onClick: handle_aturan_kasir_sales },
    { stats: 'Guest Book', statTitle: 'guestbook.alvindocs.com', icon: <BookOpen size={80} />, color: 'warning', onClick: handle_guestbook }

  ]

  /* ================= AMD ================= */
  const amdApps = [
    { stats: 'MTC', statTitle: 'mtc.aliranmd.com', icon: <Package size={80} />, color: 'primary', onClick: handle_mtc_amd },
    { stats: 'File Apps', statTitle: 'files.alvindocs.com', icon: <File size={80} />, color: 'success', onClick: handle_filedata },
    { stats: 'User Manage', statTitle: 'userman.aliranmd.com', icon: <Users size={80} />, color: 'danger', onClick: handle_userman },
    // { stats: 'KPI', statTitle: 'kpi.aliranmd.com', icon: <Activity size={80} />, color: 'warning', onClick: handle_kpi_amd },
    { stats: 'TS Plus - AMD', statTitle: 'tsplus.aliranmd.com', icon: <Package size={80} />, color: 'primary', onClick: handle_tsplus_amd }

  ]

  /* ================= AMD ================= */
  const cardApps = [
    { stats: 'Bank Mandiri', statTitle: 'Bank Mandiri', icon: <DollarSign size={80} />, color: 'primary', onClick: handle_mandiri },
    { stats: 'Bank Panin', statTitle: 'Bank Panin', icon: <DollarSign size={80} />, color: 'success', onClick: handle_panin },
    { stats: 'Bank BCA', statTitle: 'Bank BCA', icon: <DollarSign size={80} />, color: 'danger', onClick: handle_bca },
    { stats: 'M-BCA', statTitle: 'Business BCA', icon: <Smartphone size={80} />, color: 'warning', onClick: handle_mbca },
    { stats: 'Bank BNI', statTitle: 'Bank BNI', icon: <DollarSign size={80} />, color: 'primary', onClick: handle_bni }
  ]

   /* ================= STAGING ================= */
  const stagingApps = [
    { stats: 'WAZUH', statTitle: 'Wazuh', icon: <Package size={80} />, color: 'primary', onClick: handle_wazuh },
    { stats: 'Cari Produk ACS', statTitle: 'Kamus Istilah', icon: <Package size={80} />, color: 'success', onClick: handle_cari_produk },
    { stats: 'LMS ACS - Moodle', statTitle: 'E-Learning ACS', icon: <Package size={80} />, color: 'danger', onClick: handle_moodle },
    { stats: 'Stirling PDF', statTitle: 'Converter File', icon: <Package size={80} />, color: 'warning', onClick: handle_stirling }
    // ...Array.from({ length: 12 }, (_, i) => ({
    //   stats: `Link Apps ${i + 5}`,
    //   statTitle: '-',
    //   icon: <Package size={80} />,
    //   color: ['primary','success','danger','warning'][i % 4],
    //   onClick: handle_not_found
    // }))
  ]

  return (
    <Fragment>
      {/* <Breadcrumbs title='Alvindo Catur Sentosa' data={[{ title: 'Menu' }, { title: 'All Program' }]} /> */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
         {/* ================= SLIDE 1 ================= */}
        <SwiperSlide style={{ backgroundColor: '#FFEBB7', height: '100vh' }}>
          <div className='col-12' style={{ paddingRight: "40px", paddingLeft: "40px", paddingTop: "20px" }}>
              <center><h3 className='text-center'><b style={{ color: "red" }}>Alvindo Catur Sentosa</b></h3></center>
            <AppGrid data={acsApps} />
          </div>
        </SwiperSlide>

        {/* ================= SLIDE 2 ================= */}
        <SwiperSlide style={{ backgroundColor: '#BFEFFF', height: '100vh' }}>
            <div className='col-12' style={{ paddingRight: "40px", paddingLeft: "40px", paddingTop: "20px" }}>
              <center><h3 className='text-center'><b style={{ color: "red" }}>Aliran Masa Depan</b></h3></center>
            <AppGrid data={amdApps} />
          </div>
        </SwiperSlide>

        {/* ================= SLIDE 3 ================= */}
        <SwiperSlide style={{ backgroundColor: '#C8E6C9', height: '100vh' }}>
          <div className='col-12' style={{ paddingRight: "40px", paddingLeft: "40px", paddingTop: "20px" }}>
              <center><h3 className='text-center'><b style={{ color: "red" }}>Link Keuangan</b></h3></center>
            <AppGrid data={cardApps} />
          </div>
        </SwiperSlide>

        {/* ================= SLIDE 4 ================= */}
        <SwiperSlide style={{ backgroundColor: '#B7C9E2', height: '100vh' }}>
          <div className='col-12' style={{ paddingRight: "40px", paddingLeft: "40px", paddingTop: "20px" }}>
              <center><h3 className='text-center'><b style={{ color: "red" }}>Link Staging - ACS</b></h3></center>
            <AppGrid data={stagingApps} />
          </div>
        </SwiperSlide>
      </Swiper>
    </Fragment>
  )
}

export default AllMenu
