import { DOMAIN } from '@/constants/constants';
import { userType } from '@/types/auth';
import { IRegisterForm } from '@/types/form';

export const checkUserNickname = async (nickname: string) => {
  try {
    const res = await fetch(
      `api/users/check-nickname?nickname=${encodeURIComponent(nickname)}`,
    );

    return res;
  } catch (error) {
    throw new Error('유저 닉네임 중복 확인 fetch 요청 오류');
  }
};

export const getAuth = async (
  social: 'NAVER' | 'KAKAO' | 'GOOGLE',
  idToken: string,
) => {
  try {
    const response = await fetch(
      DOMAIN +
        `/api/auth/login?social=${social}&token=${encodeURIComponent(idToken)}`,
      {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error('Server responded with an error');
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error('로그인 fetch 요청 오류: ', error.message);
    }
  }
};

export const postUserRegister = async (data: IRegisterForm) => {
  const response = await fetch('api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());

  return response;
};

export const getMyProfile = async (token?: string) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const response = await fetch(`${DOMAIN}/api/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers,
  });

  const res = await response.json();

  return res;
};

export const getLogout = async () => {
  const response = await fetch(`${DOMAIN}/api/auth/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json());

  return response;
};

export const postProfileImage = async (image: File) => {
  const formData = new FormData();
  formData.append('image', image);

  const response = await fetch(`${DOMAIN}/api/users/upload-profile`, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });

  const res = await response.json();

  return res;
};

export const getSwitchUserRole = async (userType: userType) => {
  const response = await fetch(
    `${DOMAIN}/api/auth/switch-user?userType=${userType}`,
    {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const res = await response.json();

  return res;
};

export const accessTokenReissuance = async () => {
  try {
    const response = await fetch(`${DOMAIN}/api/auth/refresh`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'manual',
    });

    if (response.type === 'opaqueredirect') {
      window.location.replace(response.url);
    }

    return response;
  } catch (error) {
    console.error('엑세스 토큰 재발급 오류', error);
    throw error;
  }
};
