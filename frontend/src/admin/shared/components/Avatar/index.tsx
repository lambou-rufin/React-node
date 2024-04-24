import { FC } from 'react';
import './AvatarContainer.css';

const AvatarContainer: FC<any> = ({ imageUrl, size }) => {
  const containerStyle = {
    width: size,
    height: size,
  };

  return (
    <div className="avatar-container" style={containerStyle}>
      <img src={imageUrl} alt="Avatar" className="avatar-image" />
    </div>
  );
};

export default AvatarContainer;
