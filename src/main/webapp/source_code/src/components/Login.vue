<template>
  <div class="m-grid m-grid--hor m-grid--root m-page">
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--2 m-login-2--skin-1">
      <img src="../assets/bg-login.jpg" alt="" class="back-ground">
      <div class="m-grid__item m-grid__item--fluid	m-login__wrapper">
        <div class="m-login__container">
          <transition appear enter-active-class="fadeInDown">
            <div class="m-login__logo">
              <a href="#">
                <img src="../assets/logo.png">
              </a>
            </div>
          </transition>
          <transition appear enter-active-class="fadeInRight" leave-active-class="fadeOutLeft" mode="out-in" tag="div">
            <div class="m-login__signin" v-if="formName === 'Login'" key="0">
              <div class="m-login__head">
                <h3 class="m-login__title">
                  成绩管理系统
                </h3>
              </div>
              <form class="m-login__form m-form" action="">
                <div class="form-group m-form__group has-danger">
                  <input class="form-control m-input" type="text" placeholder="Email" name="email" autocomplete="off"
                         v-validate:login="['required']">
                  <!--<div class="form-control-feedback" v-if="$loginForm.login.valid">请输入有效的Email地址</div>-->
                </div>
                <div class="form-group m-form__group has-danger">
                  <input class="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password">
                  <div class="form-control-feedback">请输入密码</div>
                </div>
                <div class="row m-login__form-sub">
                  <div class="col m--align-left m-login__form-left">
                    <label class="m-checkbox  m-checkbox--light">
                      <input type="checkbox" name="remember">
                      记住我
                      <span></span>
                    </label>
                  </div>
                  <div class="col m--align-right m-login__form-right">
                    <a href="javascript:" id="m_login_forget_password" class="m-link" @click="formName = 'forget'">
                      忘记密码 ?
                    </a>
                  </div>
                </div>
                <div class="m-login__form-action">
                  <a id="m_login_signin_submit"
                     class="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air  m-login__btn m-login__btn--primary">
                    登录
                  </a>
                </div>
              </form>
              <div class="m-login__account">
							<span class="m-login__account-msg">
								还没有账号 ?
							</span>
                &nbsp;&nbsp;
                <a href="javascript:" id="m_login_signup" class="m-link m-link--light m-login__account-link" @click="formName = 'signIn'">
                  注册
                </a>
              </div>
            </div>
            <div class="m-login__signup" v-if="formName === 'signIn'" key="1">
              <div class="m-login__head">
                <h3 class="m-login__title">
                  注册
                </h3>
                <div class="m-login__desc">
                  输入下列信息来创建用户:
                </div>
              </div>
              <form class="m-login__form m-form" action="">
                <div class="form-group m-form__group">
                  <input class="form-control m-input" type="text" placeholder="Fullname" name="fullname">
                </div>
                <div class="form-group m-form__group">
                  <input class="form-control m-input" type="text" placeholder="Email" name="email" autocomplete="off">
                </div>
                <div class="form-group m-form__group">
                  <input class="form-control m-input" type="password" placeholder="Password" name="password">
                </div>
                <div class="form-group m-form__group">
                  <input class="form-control m-input m-login__form-input--last" type="password" placeholder="Confirm Password"
                         name="rpassword">
                </div>
                <div class="row form-group m-form__group m-login__form-sub">
                  <div class="col m--align-left">
                    <label class="m-checkbox m-checkbox--light">
                      <input type="checkbox" name="agree">
                      我同意
                      <a href="#" class="m-link m-link--focus">
                        条件与款项
                      </a>
                      .
                      <span></span>
                    </label>
                    <span class="m-form__help"></span>
                  </div>
                </div>
                <div class="m-login__form-action">
                  <a id="m_login_signup_submit"
                     class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">
                    注册
                  </a>
                  &nbsp;&nbsp;
                  <a id="m_login_signup_cancel" class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn"
                     @click="formName = 'Login'">
                    取消
                  </a>
                </div>
              </form>
            </div>
            <div class="m-login__forget-password" v-if="formName === 'forget'" key="2">
              <div class="m-login__head">
                <h3 class="m-login__title">
                  忘记密码 ?
                </h3>
                <div class="m-login__desc">
                  输入您的邮箱来找回密码:
                </div>
              </div>
              <form class="m-login__form m-form" action="">
                <div class="form-group m-form__group">
                  <input class="form-control m-input" type="text" placeholder="Email" name="email" id="m_email" autocomplete="off">
                </div>
                <div class="m-login__form-action">
                  <a id="m_login_forget_password_submit"
                     class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">
                    发送
                  </a>
                  &nbsp;&nbsp;
                  <a id="m_login_forget_password_cancel" class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn"
                     @click="formName = 'Login'">
                    取消
                  </a>
                </div>
              </form>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  //  import $ from 'webpack-zepto'

  export default {
    name: 'Login',
    data () {
      return {
        formName: 'Login'
      }
    },
    mounted () {
    }
  }
</script>
<style type='text/scss' lang='scss' scope>
  .back-ground {
    z-index: -999;
    height: 100%;
    position: absolute;
  }
</style>
