import styles from './shapes.module.css';

export default function Shapes({ variant = 'small', color = 'blue' }) {
  // Set the CSS class based on the variant
  const getVariantClass = (variantName) => {
    switch(variantName) {
      case 'big':
        return styles.big;
      case 'big-blob':
        return styles.bigBlob;
      case 'small':
        return styles.small;
      default:
        return styles.small;
    }
  };
  
  // Map color prop to corresponding CSS utility class
  const getColorClass = (colorName) => {
    switch(colorName) {
      case 'blue':
        return 'u-background-blue';
      case 'orange':
        return 'u-background-orange';
      case 'dark-blue':
        return 'u-background-dark-blue';
      case 'dark-orange':
        return 'u-background-dark-orange';
      default:
        return 'u-background-blue';
    }
  };
  
  const variantClass = getVariantClass(variant);
  const colorClass = getColorClass(color);
  
  // For the big variant, we only need 2 shapes
  const shapesCount = variant === 'small' ? 3 : 2;
  
  return (
    <div className={`${styles.shapes} ${variantClass}`}>
      {[...Array(shapesCount)].map((_, index) => (
        <div key={index} className={`${styles.shape} ${colorClass}`}></div>
      ))}
    </div>
  );
}
