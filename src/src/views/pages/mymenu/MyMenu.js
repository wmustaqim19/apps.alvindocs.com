// ** React Imports
import { Fragment } from 'react'
import { Row, Col, Card } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import '@assets/Boxyreact.css'


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
  PenTool,
  Package,
  Bookmark
} from 'react-feather'

function handle_eproc() {
  window.open('https://eproc.alvindocs.com', "_blank")
}

function handle_sapb1() {
  window.open('https://sapb1.alvindocs.com', "_blank")
}

function handle_pdt() {
  window.open('https://pdt.alvindocs.com', "_blank")
}

function handle_guestbook() {
  window.open('https://guestbook.alvindocs.com', "_blank")
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

function handle_kpi() {
  window.open('https://kpi.alvindocs.com', "_blank")
}

function handle_lion() {
  window.open('https://lion.alvindocs.com', "_blank")
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

// function MouseOver(event) {
//   event.target.style.background = '#fcd986'
// }

// function MouseOut(event) {
//   event.target.style.background = ""
// }

// onMouseOver={MouseOver} onMouseOut={MouseOut}

const MyMenu = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs title='Alvindo Catur Sentosa' data={[{ title: 'Menu' }, { title: 'All Program' }]} /> */}

      <div className='row'>
        <div className='col-12' style={{paddingRight:"40px", paddingLeft:"40px", paddingTop:"20px"}}>

          <center><h2 className='text-center'><b>My All Program </b></h2></center>
          <br/>
          <Row>
            <Col lg='3' sm='6' >
              <div   onClick={handle_eproc}>
                <StatsHorizontal className="boxyreact" icon={<ShoppingCart size={80} />} color='primary' stats='e-Proc' statTitle='Aplikasi E-Procurement' statLink='eproc.alvindocs.com' />
              </div>
            </Col>
            <Col lg='3' sm='6' >
              <div  onClick={handle_sapb1}>
                <StatsHorizontal className="boxyreact" icon={<Monitor size={80} />} color='success' stats='SAP-B1' statTitle='Aplikasi SAP Sales' statLink='sapb1.alvindocs.com' />
              </div>
            </Col>
            <Col lg='3' sm='6' >
              <div  onClick={handle_pdt}>
                <StatsHorizontal className="boxyreact" icon={<Code size={80} />} color='danger' stats='PDT' statTitle='Aplikasi Barcode PDT' statLink='pdt.alvindocs.com' />
              </div>
            </Col>
            <Col lg='3' sm='6' >
              <div  onClick={handle_guestbook}>
                <StatsHorizontal className="boxyreact" icon={<BookOpen size={80} />} color='warning' stats='Guest Book' statTitle='Aplikasi Buku Tamu' statLink='guestbook.alvindocs.com' />
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg='3' sm='6' >
              <div  onClick={handle_sunfish}>
                <StatsHorizontal className="boxyreact" icon={<Check size={80} />} color='primary' stats='Sunfish' statTitle='Aplikasi Absensi' statLink='sunfish.alvindocs.com' />
              </div>
            </Col>
            <Col lg='3' sm='6' >
              <div  onClick={handle_mtc}>
                <StatsHorizontal className="boxyreact" icon={<Package size={80} />} color='success' stats='MTC' statTitle='Aplikasi MTC Produk' statLink='mtc.alvindocs.com' />
              </div>
            </Col>
            <Col lg='3' sm='6' >
              <div  onClick={handle_elearning}>
                <StatsHorizontal className="boxyreact" icon={<FileText size={80} />} color='danger' stats='e-Learning' statTitle='Aplikasi Pelatihan' statLink='elearning.alvindocs.com' />
              </div>
            </Col>
            <Col lg='3' sm='6' >
              <div  onClick={handle_kpi}>
                <StatsHorizontal className="boxyreact" icon={<Activity size={80} />} color='warning' stats='KPI' statTitle='Aplikasi Penilaian' statLink='kpi.alvindocs.com' />
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg='3' sm='6' >
              <div  onClick={handle_lion}>
                <StatsHorizontal className="boxyreact" icon={<Truck size={80} />} color='primary' stats='LION' statTitle='Aplikasi Cetak Resi' statLink='lion.alvindocs.com' />
              </div>
            </Col>
            <Col lg='3' sm='6' >
              <div  onClick={handle_spk}>
                <StatsHorizontal className="boxyreact" icon={<Server size={80} />} color='success' stats='SPK' statTitle='Aplikasi SPK' statLink='spk.alvindocs.com' />
              </div>
            </Col>
            <Col lg='3' sm='6' >
              <div  onClick={handle_ticket}>
                <StatsHorizontal className="boxyreact" icon={<PenTool size={80} />} color='danger' stats='Ticket' statTitle='Aplikasi Request Ticket' statLink='ticket.alvindocs.com' />
              </div>
            </Col>
            <Col lg='3' sm='6' >
              <div  onClick={handle_teamup}>
                <StatsHorizontal className="boxyreact" icon={<Bookmark size={80} />} color='warning' stats='Team UP' statTitle='Aplikasi Booking Room' statLink='teamup.alvindocs.com' />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  )
}

export default MyMenu
