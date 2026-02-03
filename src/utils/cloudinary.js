
export const optimizeCloudinary = (url, options = {}) => {
    if (!url || !url.includes('cloudinary.com')) {
        return url;
    }

    const {
        width = 'auto',
        quality = 'auto',
        format = 'auto',
        crop = 'fill'
    } = options;

    // Build transformation string
    const transformations = `w_${width},q_${quality},f_${format},c_${crop}`;

    // Insert transformations into URL
    const parts = url.split('/upload/');
    if (parts.length === 2) {
        return `${parts[0]}/upload/${transformations}/${parts[1]}`;
    }

    return url;
};

export default optimizeCloudinary;
