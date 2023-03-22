import { FC } from 'react';

import { DirectoryCategory } from '../Directory/Directory';
import './categoryItem.styles.scss';

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const CategoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className='category-container'>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
