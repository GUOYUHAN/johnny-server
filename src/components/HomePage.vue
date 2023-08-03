<script setup>
import '../styles/css/animate.css'
import '../styles/css/icomoon.css'
import '../styles/css/bootstrap.css'
// import '../styles/css/magnific-popup.css'
import '../styles/css/style.css'

import { watch } from 'vue'
</script>

<template>
  <div>
    <div class="gtco-loader"></div>
    <div id="page">
      <nav class="gtco-nav" role="navigation">
        <div class="container">
          <div class="row">
            <div class="col-xs-2 text-left">
              <div id="gtco-logo"><a href="#">JOHNNY<span>.</span>GENZ</a></div>
            </div>
            <div class="col-xs-10 text-right menu-1">
              <ul>
                <li class="has-dropdown">
                  <a>Music</a>
                  <ul class="dropdown">
                    <li><a href="/music">Playlist</a></li>
                    <li><a href="#">TBD</a></li>
                    <li><a href="#">TBD</a></li>
                  </ul>
                </li>
                <li><a target="_blank" href="https://zuanzuan.club/cust">定制一个</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <header
        id="gtco-header"
        class="gtco-cover"
        role="banner"
        style="background-image: url(https://playboi-1319631503.cos.ap-beijing.myqcloud.com/johnny/img_1.jpg)"
        data-stellar-background-ratio="0.5"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-7 text-left">
              <div class="display-t">
                <div class="display-tc animate-box" data-animate-effect="fadeInUp">
                  <span class="date-post">{{ new Date().toLocaleString('en-US', { month: 'long' }) }}, 2023</span>
                  <h1 class="mb30"><a href="#">Hi, this is Johnny's club! What's good today?</a></h1>
                  <p><a target="_blank" href="https://www.instagram.com/guo_johnny/" class="text-link">Check my profile here</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="gtco-main">
        <div class="container">
          <div class="row row-pb-md">
            <div class="col-md-12">
              <ul id="gtco-post-list">
                <li class="full entry animate-box" data-animate-effect="fadeIn">
                  <a href="#">
                    <div
                      class="entry-img"
                      style="
                        background-image: url(https://playboi-1319631503.cos.ap-beijing.myqcloud.com/johnny/img_5.png);
                        background-position: -100px 0;
                      "
                    ></div>
                    <div class="entry-desc">
                      <h3>What does this site do?</h3>
                      <p>
                        Well, this is a purely personal site. It has several sections which you can look around. You can
                        find the shortcuts on the top right of this site. There are some music, my profile, and a
                        project that ou can play around. Enjoy your trip and the amazing Hong Kong Island picture!
                      </p>
                    </div>
                  </a>
                  <a href="#" class="post-meta"> Read more <span class="date-posted"></span></a>
                </li>

                <!-- <li class="two-third entry animate-box" data-animate-effect="fadeIn">
                  <a href="single.html">
                    <div class="entry-img" style="background-image: url(https://playboi-1319631503.cos.ap-beijing.myqcloud.com/johnny/img_1.jpg)"></div>
                    <div class="entry-desc">
                      <h3>Some DJ stuff - Check it out!</h3>
                      <p>What type of music you wanna see? Hip Hop, House, EDM, Techno......</p>
                    </div>
                  </a>
                  <a href="single.html" class="post-meta">Go to... <span class="date-posted"></span></a>
                </li>
                <li class="one-third entry animate-box" data-animate-effect="fadeIn">
                  <a href="single.html">
                    <div class="entry-img" style="background-image: url(https://playboi-1319631503.cos.ap-beijing.myqcloud.com/johnny/img_1.jpg)"></div>
                    <div class="entry-desc">
                      <h3>Post and note</h3>
                      <p>(Don't click it, cuz I'm lazy)</p>
                    </div>
                  </a>
                  <a href="single.html" class="post-meta">Go to ... <span class="date-posted"></span></a>
                </li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer id="gtco-footer" role="contentinfo">
        <div class="container">
          <!-- <div class="row row-pb-md">
            <div class="col-md-12">
              <h3 class="footer-heading">Recommendation</h3>
            </div>
            <div class="col-md-4">
              <div class="post-entry">
                <div class="post-img">
                  <a href="#"><img src="https://playboi-1319631503.cos.ap-beijing.myqcloud.com/johnny/img_1.jpg" class="img-responsive" alt="mistake here" /></a>
                </div>
                <div class="post-copy">
                  <h4><a href="#">popular</a></h4>
                  <a href="#" class="post-meta"><span class="date-posted">July, 2021</span></a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="post-entry">
                <div class="post-img">
                  <a href="#"><img src="https://playboi-1319631503.cos.ap-beijing.myqcloud.com/johnny/img_1.jpg" class="img-responsive" alt="mistake here" /></a>
                </div>
                <div class="post-copy">
                  <h4><a href="#">popular</a></h4>
                  <a href="#" class="post-meta"><span class="date-posted">July, 2021</span></a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="post-entry">
                <div class="post-img">
                  <a href="#"><img src="https://playboi-1319631503.cos.ap-beijing.myqcloud.com/johnny/img_1.jpg" class="img-responsive" alt="mistake here" /></a>
                </div>
                <div class="post-copy">
                  <h4><a href="#">popular</a></h4>
                  <a href="#" class="post-meta"><span class="date-posted">July, 2021</span></a>
                </div>
              </div>
            </div>
          </div> -->

          <div class="row copyright">
            <div class="col-md-12 text-center">
              <p>
                <small class="block"
                  >&copy; {{ new Date().getFullYear() }} Johnny.
                  <a href="https://beian.miit.gov.cn/" target="_blank">晋ICP备20007180号-1</a></small
                >
                <small class="block"
                  >By <a href="http://zuanzuan.club/">Johnny</a> Images Source:
                  <a href="http://zuanzuan.club/" target="_blank">Johnny</a></small
                >
              </p>
              <p>
                <ul class="gtco-social-icons">
                  <li><a target="_blank" href="https://www.instagram.com/guo_johnny/"><i class="icon-instagram"></i></a></li>
                  <li><a target="_blank" href="https://github.com/GUOYUHAN"><i class="icon-github"></i></a></li>
                  <li><a target="_blank" href="https://soundcloud.com/user-130855889"><i class="icon-soundcloud"></i></a></li>
                  <li><a target="_blank" href="https://youtube.com/@johnnyguo217"><i class="icon-youtube"></i></a></li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Crimson+Text:400,400i|Roboto+Mono');

html,
body {
  width: 100%;
  height: 100%;
}
</style>
