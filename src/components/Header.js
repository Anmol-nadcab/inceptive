import React, { Component } from "react";
class Header extends React.Component {
  render() {
    return (
      <>
        <div class="nk-header nk-header-fluid nk-header-fixed is-light">
          <div class="container-fluid">
            <div class="nk-header-wrap">
              <div class="nk-menu-trigger d-xl-none ml-n1">
                <a
                  href="#"
                  class="nk-nav-toggle nk-quick-nav-icon"
                  data-target="sidebarMenu"
                >
                  <em class="icon ni ni-menu"></em>
                </a>
              </div>
              <div class="nk-header-brand d-xl-none">
                <a href="html/crypto/index.html" class="logo-link">
                  <img
                    class="logo-light logo-img"
                    src="images/logo.png"
                    srcset="images/logo.png 2x"
                    alt="logo"
                  />
                  <img
                    class="logo-dark logo-img"
                    src="images/logo.png"
                    srcset="images/logo.png 2x"
                    alt="logo-dark"
                  />
                  {/* <span class="nio-version">Crypto</span> */}
                </a>
              </div>
              <div class="nk-header-news d-none d-xl-block">
                <div class="nk-news-list">
                  <a class="nk-news-item" href="#">
                    <div class="nk-news-icon">
                      <em class="icon ni ni-card-view"></em>
                    </div>
                    <div class="nk-news-text">
                      <p>
                        Do you know the latest update of 2019?{" "}
                        <span>
                          {" "}
                          A overview of our is now available on YouTube
                        </span>
                      </p>
                      <em class="icon ni ni-external"></em>
                    </div>
                  </a>
                </div>
              </div>
              <div class="nk-header-tools">
                <ul class="nk-quick-nav">
                  <li>
                    <div class="nk-block-head">
                      {/* <div class="nk-block-head-sub">
                        <span>Welcome!</span>
                      </div> */}
                      <div class="nk-block-between-md g-4">
                        <div class="nk-block-head-content">
                          {/* <h2 class="nk-block-title fw-normal">
                            Ia5ghTL2paqchJTR65nBKvZ
                          </h2> */}
                          {/* <div class="nk-block-des">
                            <p>
                              At a glance summary of your account. Have fun!
                            </p>
                          </div> */}
                        </div>
                        <div class="energy">
                          <div class="nk-block-head-content">
                            <ul class="nk-block-tools gx-3">
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                              <divx></divx>
                            </ul>
                            <div class="energy-container">
                              [ <b class="energy-text ">{"    "}Energy</b>{" "}
                              <span style={{ color: "green" }} class="timer">
                                5,6881.00
                              </span>
                              {"  "} J]
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown notification-dropdown mr-n1">
                    <a
                      href="#"
                      class="dropdown-toggle nk-quick-nav-icon"
                      data-toggle="dropdown"
                    >
                      <div class="icon-status icon-status-info">
                        <em class="icon ni ni-bell"></em>
                      </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s2">
                      <div class="dropdown-head">
                        <span class="sub-title nk-dropdown-title">
                          Notifications
                        </span>
                        <a href="#">Mark All as Read</a>
                      </div>
                      <div class="dropdown-body">
                        <div class="nk-notification">
                          <div class="nk-notification-item dropdown-inner">
                            <div class="nk-notification-icon">
                              <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                            </div>
                            <div class="nk-notification-content">
                              <div class="nk-notification-text">
                                You have requested to <span>Widthdrawl</span>
                              </div>
                              <div class="nk-notification-time">2 hrs ago</div>
                            </div>
                          </div>
                          <div class="nk-notification-item dropdown-inner">
                            <div class="nk-notification-icon">
                              <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                            </div>
                            <div class="nk-notification-content">
                              <div class="nk-notification-text">
                                Your <span>Deposit Order</span> is placed
                              </div>
                              <div class="nk-notification-time">2 hrs ago</div>
                            </div>
                          </div>
                          <div class="nk-notification-item dropdown-inner">
                            <div class="nk-notification-icon">
                              <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                            </div>
                            <div class="nk-notification-content">
                              <div class="nk-notification-text">
                                You have requested to <span>Widthdrawl</span>
                              </div>
                              <div class="nk-notification-time">2 hrs ago</div>
                            </div>
                          </div>
                          <div class="nk-notification-item dropdown-inner">
                            <div class="nk-notification-icon">
                              <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                            </div>
                            <div class="nk-notification-content">
                              <div class="nk-notification-text">
                                Your <span>Deposit Order</span> is placed
                              </div>
                              <div class="nk-notification-time">2 hrs ago</div>
                            </div>
                          </div>
                          <div class="nk-notification-item dropdown-inner">
                            <div class="nk-notification-icon">
                              <em class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                            </div>
                            <div class="nk-notification-content">
                              <div class="nk-notification-text">
                                You have requested to <span>Widthdrawl</span>
                              </div>
                              <div class="nk-notification-time">2 hrs ago</div>
                            </div>
                          </div>
                          <div class="nk-notification-item dropdown-inner">
                            <div class="nk-notification-icon">
                              <em class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                            </div>
                            <div class="nk-notification-content">
                              <div class="nk-notification-text">
                                Your <span>Deposit Order</span> is placed
                              </div>
                              <div class="nk-notification-time">2 hrs ago</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="dropdown-foot center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown user-dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      <div class="user-toggle">
                        <div class="user-avatar sm">
                          <em class="icon ni ni-user-alt"></em>
                        </div>
                        {/* <div class="user-info d-none d-md-block">
                          <div class="user-status user-status-unverified">
                            Unverified
                          </div>
                          <div class="user-name dropdown-indicator">
                            Profile
                          </div>
                        </div> */}
                      </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1">
                      <div class="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                        <div class="user-card">
                          <div class="user-avatar">
                            <span>AB</span>
                          </div>
                          <div class="user-info">
                            <span class="lead-text">Nadcab Technology</span>
                            <span class="sub-text">user@inrx.network.com</span>
                          </div>
                        </div>
                      </div>
                      <div class="dropdown-inner user-account-info">
                        <h6 class="overline-title-alt">Nio Wallet Account</h6>
                        <div class="user-balance">
                          12.395769{" "}
                          <small class="currency currency-btc">BTC</small>
                        </div>
                        <div class="user-balance-sub">
                          Locked{" "}
                          <span>
                            0.344939{" "}
                            <span class="currency currency-btc">BTC</span>
                          </span>
                        </div>
                        <a href="#" class="link">
                          <span>Withdraw Funds</span>{" "}
                          <em class="icon ni ni-wallet-out"></em>
                        </a>
                      </div>
                      <div class="dropdown-inner">
                        <ul class="link-list">
                          <li>
                            <a href="html/crypto/profile.html">
                              <em class="icon ni ni-user-alt"></em>
                              <span>View Profile</span>
                            </a>
                          </li>
                          <li>
                            <a href="html/crypto/profile-security.html">
                              <em class="icon ni ni-setting-alt"></em>
                              <span>Account Setting</span>
                            </a>
                          </li>
                          <li>
                            <a href="html/crypto/profile-activity.html">
                              <em class="icon ni ni-activity-alt"></em>
                              <span>Login Activity</span>
                            </a>
                          </li>
                          <li>
                            <a class="dark-switch" href="#">
                              <em class="icon ni ni-moon"></em>
                              <span>Dark Mode</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="dropdown-inner">
                        <ul class="link-list">
                          <li>
                            <a href="#">
                              <em class="icon ni ni-signout"></em>
                              <span>Sign out</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Remove */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
