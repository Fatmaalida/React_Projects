// helper/get_data.jsx

const apiURL = "https://crm.batuhankorkmaz.com"; // API URL'inizi buraya ekleyin

/**
 * Genel bir fetch fonksiyonu
 * @param {string} endpoint - API uç noktası
 * @param {Object} body - Gönderilecek veri (default: null)
 * @param {string} method - HTTP yöntemi (default: POST)
 * @returns {Promise<Object>} - API'den dönen yanıt
 */
export const fetchData = async (endpoint, body = null, method = 'POST', headers = {}) => {
    const requestOptions = {
        method: method,
        headers: headers,
        body: body, // FormData doğrudan body olarak gönderilir
        redirect: "follow",
        mode: 'cors'
    };

    try {
        const response = await fetch(apiURL + endpoint, requestOptions);

        if (!response.ok) {
            throw new Error("Olumlu bir cevap gelmedi kontrol et.");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Fetch failed:", error);
        throw error; // Hata durumunda tekrar fırlat
    }
};


/**
 * Kullanıcı girişi için özel bir fonksiyon
 * @param {string} email - Kullanıcı e-postası
 * @param {string} password - Kullanıcı şifresi
 * @returns {Promise<string>} - Token
 */
export const userLogin = async (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const result = await fetchData("/api/auth/login/user", formData); // FormData gönderiliyor
    return result.token; // Token'ı döndür
};

/**
 * Kullanıcı kaydı için özel bir fonksiyon
 * @param {string} email - Kullanıcı e-postası
 * @param {string} password - Kullanıcı şifresi
 * @returns {Promise<Object>} - Kaydedilen kullanıcı bilgileri
 */
export const userRegister = async (email, password) => {
    const body = {
        email,
        password
    };
    const result = await fetchData("/api/auth/register", body); // Uç noktanızı güncelleyin
    return result; // Kaydedilen kullanıcı bilgilerini döndür
};

/**
 * Kullanıcı bilgilerini alma fonksiyonu
 * @param {string} token - Kullanıcı token'ı
 * @returns {Promise<Object>} - Kullanıcı bilgileri
 */
export const getUserInfo = async (token) => {

    const headers = {
        'Authorization': `Bearer ${token}`, // Token ile yetkilendirme
        'Content-Type': 'application/json'
    };
    const requestOptions = {
        method: "GET",
        redirect: "follow",
        mode: 'cors'
    };

    const result = await fetchData("/api/auth/profile/details", null, requestOptions.method, headers);
    return result;
};




export const getBalance = async (token) => {

    const headers = {
        'Authorization': `Bearer ${token}`, // Token ile yetkilendirme
        'Content-Type': 'application/json'
    };
    const requestOptions = {
        method: "GET",
        redirect: "follow",
        mode: 'cors'
    };

    const result = await fetchData("/api/auth/balance", null, requestOptions.method, headers);
    return result;
};



export const getMyQuote = async (token) => {

    const headers = {
        'Authorization': `Bearer ${token}`, // Token ile yetkilendirme
        'Content-Type': 'application/json'
    };
    const requestOptions = {
        method: "GET",
        redirect: "follow",
        mode: 'cors'
    };

    const result = await fetchData("/api/quote/lists/my", null, requestOptions.method, headers);
    return result;
};
