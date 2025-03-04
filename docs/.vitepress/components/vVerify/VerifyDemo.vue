<template>
    <a-form v-verify:submit="{ ...rules, delay: delay }" @submit="handleSubmit" @validate="handleValidate"
        :layout="'vertical'" class="custom-form">
        <!-- 用户名 -->
        <a-form-item label="用户名" field="username" :label-col-props="{ span: 24 }" :wrapper-col-props="{ span: 24 }">
            <a-input name="username" placeholder="请输入用户名" allow-clear :style="{ width: '100%' }" />
        </a-form-item>

        <!-- 密码 -->
        <a-form-item label="密码" field="password" :label-col-props="{ span: 24 }" :wrapper-col-props="{ span: 24 }">
            <a-input-password name="password" placeholder="请输入密码" allow-clear :style="{ width: '100%' }" />
        </a-form-item>

        <!-- 确认密码 -->
        <a-form-item label="确认密码" field="confirmPassword" :label-col-props="{ span: 24 }"
            :wrapper-col-props="{ span: 24 }">
            <a-input-password name="confirmPassword" placeholder="请再次输入密码" allow-clear :style="{ width: '100%' }" />
        </a-form-item>

        <!-- 邮箱 -->
        <a-form-item label="邮箱" field="email" :label-col-props="{ span: 24 }" :wrapper-col-props="{ span: 24 }">
            <a-input name="email" placeholder="请输入邮箱" allow-clear :style="{ width: '100%' }" />
        </a-form-item>

        <!-- 手机号 -->
        <a-form-item label="手机号" field="phone" :label-col-props="{ span: 24 }" :wrapper-col-props="{ span: 24 }">
            <a-input name="phone" placeholder="请输入手机号" allow-clear :style="{ width: '100%' }" />
        </a-form-item>

        <!-- 提交按钮 -->
        <a-form-item :wrapper-col-props="{ span: 24 }">
            <a-button type="primary" html-type="submit" :loading="isSubmitting" :style="{ width: '100%' }">
                提交
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { vVerify } from '@cp-vuedir/core'
import { Notification } from '@arco-design/web-vue';

const isSubmitting = ref(false); // 提交按钮的加载状态
const hasErrors = ref(false); // 是否有错误

const delay = ref(1000); // 延迟校验时间

// 校验规则
const rules = {
    username: [
        { required: true, message: '用户名不能为空' },
        { min: 3, max: 10, message: '用户名长度必须在 3 到 10 个字符之间' },
        {
            asyncValidator: (value: string) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(value !== 'admin' ? null : '用户名已存在');
                    }, 1000);
                });
            },
        },
    ],
    password: [
        { required: true, message: '密码不能为空' },
        { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: '密码必须包含字母和数字，且长度至少为 8 位' },
    ],
    confirmPassword: [
        { required: true, message: '请再次输入密码' },
        {
            asyncValidator: (value: string, form: any) => {
                return value === form.password ? null : '两次输入的密码不一致';
            },
        },
    ],
    email: [
        { required: true, message: '邮箱不能为空' },
        { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入有效的邮箱地址' },
    ],
    phone: [
        { required: true, message: '手机号不能为空' },
        { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号' },
    ],
};

// 处理校验结果
const handleValidate = (event: CustomEvent) => {
    const { isValid } = event.detail;
    hasErrors.value = !isValid; // 更新是否有错误
};

// 提交表单
const handleSubmit = () => {
    isSubmitting.value = true; // 显示加载状态
    // 模拟提交逻辑
    setTimeout(() => {
        if (hasErrors.value) {
            // 如果有错误，显示提交失败
            Notification.error('提交失败，请检查表单错误');
        } else {
            // 如果没有错误，显示提交成功
            Notification.success('提交成功');
        }
        isSubmitting.value = false; // 隐藏加载状态
    }, delay.value);
};
</script>

<style scoped>
.custom-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.custom-form .arco-form-item {
    margin-bottom: 16px;
}

.custom-form .arco-form-item:last-child {
    margin-bottom: 0;
}

.custom-form .arco-input,
.custom-form .arco-input-password {
    border-radius: 4px;
}

.custom-form .arco-btn {
    border-radius: 4px;
    font-weight: 500;
}

.custom-form .arco-form-item-message {
    color: #f53f3f;
    font-size: 12px;
    margin-top: 4px;
}
</style>