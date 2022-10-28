<template>
  <div class="body">
    <div class="container">
      <h1>Second Brain</h1>
      <Form @submit="onSubmit">
        <div class="form-control">
          <Field name="email" type="text" :rules="validateUsername"/>
          <label>Email</label>
          <ErrorMessage class="error" name="email"  />
        </div>

        <div class="form-control">

          <Field name="password" type="password" :rules="validPassword"/>
          <label>Password</label>
          <ErrorMessage class="error" name="password"/>
        </div>


        <button class="btn">Login</button>
        <p class="text">Don't have an account? <a href="#">Register</a></p>
      </Form>

    </div>
  </div>
</template>

<script setup>
import {Form, Field,ErrorMessage} from "vee-validate"; // 为什么我在main.js全局注册不生效
// 登录数据
const loginForm = {
  email: '1',
  password: '1'
}
// 表单验证
const validateUsername = (value) => {
  if (!value) {
    console.log('required')
    return 'This field is required'
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    console.log('wrong')
    return 'This field must be a valid email';
  }
  return true
}

const validPassword = (value) => {
  if (!value) {
    console.log('required')
    return 'This field is required'
  }
  else if (value.length >= 8 && value.length < 15) {
    return 'the length of passwords must between 8 and 15'
  }
}


// 表单提交
const onSubmit = (values) => {
  return console.log(values)
}
</script>
<style scoped lang="less">
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
  box-sizing: border-box;
}

.body {
  background-color: steelblue;
  color: #fff;
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.container {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 5px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
    color: lightblue;
  }
}


.btn {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  background: lightblue;
  padding: 15px;
  font-family: inherit;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
}

.btn:focus {
  outline: 0;
}

.btn:active {
  transform: scale(0.98);
}

.text {
  margin-top: 30px;
}

.form-control {
  position: relative;
  margin: 20px 0 40px;
  width: 300px;

  input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #fff solid;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    color: #fff;
    //height: 200px;
    &:focus, &:valid {
      outline: 0;
      border-bottom-color: lightblue;
    }
  }

}


.form-control label {
  position: absolute;
  top: -15px;
  left: 0;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus + label span,
.form-control input:valid + label span {
  color: lightblue;
  transform: translateY(-30px);
}

.error {
  display: inline-block;
  color: #ce2525;
  margin-top: 5px;
}
</style>