import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Dropdown from 'react-bootstrap/Dropdown'

function Navbar() {
    return (
        <>

            <nav id="mdb-navbar" className="  navbar fixed-top navbar-expand-lg navbar-light bg-white shadow-2">
                <div className="container-fluid">
                    <button id="sidenav-toggler" data-mdb-toggle="sidenav" data-mdb-target="#mdb-sidenav" type="button" className="btn shadow-0 p-0 me-3" aria-expanded="false"><i className="fas fa-bars fa-lg" /></button>
                    <a className="navbar-brand me-2" id="mdb-navbar-brand-logo" href="/">Book World
                    </a>

                    <span id="dpl-navbar-new-right-buttons" className="navbar-nav ms-auto d-flex flex-row">
                        <ul id="main-navbar" className="nav navbar-nav nav-flex-icons ml-auto ms-auto flex-row">
                            <li className="nav-item me-3 me-lg-0 d-none d-sm-inline-block dropdown">
                                <a className="nav-link dropdown-toggle" id="new-mdb-technologies-dropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="new-mdb-technologies-dropdown" data-popper-placement="null" data-mdb-popper="none">
                                    <li><h5 className="dropdown-header">Bootstrap 5</h5></li>
                                    <li>
                                        <a className="dropdown-item" href="/docs/b5/angular/">
                                            <span>Angular</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/docs/b5/react/">
                                            <span>React<i className="fas fa-check ms-2" style={{ color: '#00B74A' }} /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/docs/b5/vue/">
                                            <span>Vue</span>
                                        </a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><h5 className="dropdown-header">Bootstrap 4</h5></li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            <span>Angular</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            <span>React</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            <span>Vue</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item me-3 me-lg-0 ">
                                <a className="nav-link" href="/blog/">
                                    <span className="d-none d-lg-inline-block">Blog</span>
                                    <i className="fas fa-fire-alt d-inline-block d-lg-none" />
                                </a>
                            </li>

                            <DropdownButton
                                // alignRight
                                title="Account"
                                id="dropdown-menu-align-right"

                            >
                                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
                            </DropdownButton>
                            <li className="nav-item d-none d-lg-inline-block">
                                <a className="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow" target="_blank">
                                    <i className="fab fa-github" />
                                </a>
                            </li>
                            <li style={{ marginTop: '2px', minHeight: '1px', minWidth: '1px' }} id="gtmDC-nav-unlogged" data-gtm-vis-recent-on-screen-2340190_1995={352} data-gtm-vis-first-on-screen-2340190_1995={352} data-gtm-vis-total-visible-time-2340190_1995={100} data-gtm-vis-has-fired-2340190_1995={1} data-gtm-vis-recent-on-screen-2340190_2000={355} data-gtm-vis-first-on-screen-2340190_2000={355} data-gtm-vis-total-visible-time-2340190_2000={100} data-gtm-vis-has-fired-2340190_2000={1} data-gtm-vis-recent-on-screen-2340190_2004={356} data-gtm-vis-first-on-screen-2340190_2004={356} data-gtm-vis-total-visible-time-2340190_2004={100} data-gtm-vis-has-fired-2340190_2004={1} data-gtm-vis-recent-on-screen-2340190_2005={358} data-gtm-vis-first-on-screen-2340190_2005={358} data-gtm-vis-total-visible-time-2340190_2005={100} data-gtm-vis-has-fired-2340190_2005={1} data-gtm-vis-recent-on-screen-2340190_2038={359} data-gtm-vis-first-on-screen-2340190_2038={359} data-gtm-vis-total-visible-time-2340190_2038={100} data-gtm-vis-has-fired-2340190_2038={1} data-gtm-vis-recent-on-screen-2340190_2049={364} data-gtm-vis-first-on-screen-2340190_2049={364} data-gtm-vis-total-visible-time-2340190_2049={100} data-gtm-vis-has-fired-2340190_2049={1} data-gtm-vis-recent-on-screen-2340190_2103={366} data-gtm-vis-first-on-screen-2340190_2103={366} data-gtm-vis-total-visible-time-2340190_2103={100} data-gtm-vis-has-fired-2340190_2103={1} data-gtm-vis-recent-on-screen-2340190_2123={367} data-gtm-vis-first-on-screen-2340190_2123={367} data-gtm-vis-total-visible-time-2340190_2123={100} data-gtm-vis-has-fired-2340190_2123={1} data-gtm-vis-recent-on-screen-2340190_2124={368} data-gtm-vis-first-on-screen-2340190_2124={368} data-gtm-vis-total-visible-time-2340190_2124={100} data-gtm-vis-has-fired-2340190_2124={1} data-gtm-vis-recent-on-screen-2340190_2132={369} data-gtm-vis-first-on-screen-2340190_2132={369} data-gtm-vis-total-visible-time-2340190_2132={100} data-gtm-vis-has-fired-2340190_2132={1} data-gtm-vis-recent-on-screen-2340190_2137={371} data-gtm-vis-first-on-screen-2340190_2137={371} data-gtm-vis-total-visible-time-2340190_2137={100} data-gtm-vis-has-fired-2340190_2137={1} data-gtm-vis-recent-on-screen-2340190_2196={372} data-gtm-vis-first-on-screen-2340190_2196={372} data-gtm-vis-total-visible-time-2340190_2196={100} data-gtm-vis-has-fired-2340190_2196={1} data-gtm-vis-recent-on-screen-2340190_2205={373} data-gtm-vis-first-on-screen-2340190_2205={373} data-gtm-vis-total-visible-time-2340190_2205={100} data-gtm-vis-has-fired-2340190_2205={1} data-gtm-vis-recent-on-screen-2340190_2311={374} data-gtm-vis-first-on-screen-2340190_2311={374} data-gtm-vis-total-visible-time-2340190_2311={100} data-gtm-vis-has-fired-2340190_2311={1} data-gtm-vis-recent-on-screen-2340190_2315={377} data-gtm-vis-first-on-screen-2340190_2315={377} data-gtm-vis-total-visible-time-2340190_2315={100} data-gtm-vis-has-fired-2340190_2315={1} data-gtm-vis-recent-on-screen-2340190_2319={378} data-gtm-vis-first-on-screen-2340190_2319={378} data-gtm-vis-total-visible-time-2340190_2319={100} data-gtm-vis-has-fired-2340190_2319={1} data-gtm-vis-recent-on-screen-2340190_2328={379} data-gtm-vis-first-on-screen-2340190_2328={379} data-gtm-vis-total-visible-time-2340190_2328={100} data-gtm-vis-has-fired-2340190_2328={1} data-gtm-vis-recent-on-screen-2340190_2329={380} data-gtm-vis-first-on-screen-2340190_2329={380} data-gtm-vis-total-visible-time-2340190_2329={100} data-gtm-vis-has-fired-2340190_2329={1} data-gtm-vis-recent-on-screen-2340190_2333={381} data-gtm-vis-first-on-screen-2340190_2333={381} data-gtm-vis-total-visible-time-2340190_2333={100} data-gtm-vis-has-fired-2340190_2333={1} /><li style={{ marginTop: '2px', minHeight: '1px', minWidth: '1px' }} id="gtmDC-login-button" data-gtm-vis-has-fired-2340190_1995={1} data-gtm-vis-has-fired-2340190_2000={1} data-gtm-vis-has-fired-2340190_2004={1} data-gtm-vis-has-fired-2340190_2005={1} data-gtm-vis-has-fired-2340190_2038={1} data-gtm-vis-has-fired-2340190_2123={1} data-gtm-vis-has-fired-2340190_2124={1} data-gtm-vis-has-fired-2340190_2196={1} data-gtm-vis-has-fired-2340190_2311={1} data-gtm-vis-has-fired-2340190_2315={1} data-gtm-vis-has-fired-2340190_2319={1} data-gtm-vis-has-fired-2340190_2328={1} data-gtm-vis-has-fired-2340190_2329={1} data-gtm-vis-has-fired-2340190_2333={1}>
                                <a className="auth-modal-toggle btn btn-primary ripple-surface ms-2 me-1" data-auth-modal-tab="sign-in">Login</a>
                            </li>
                        </ul></span>
                </div>
            </nav>
        </>
    )
}
export default Navbar