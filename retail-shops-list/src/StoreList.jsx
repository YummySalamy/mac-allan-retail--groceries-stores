import React from 'react';
import { List, Card } from 'antd';

const StoreList = ({ storeData }) => {
  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={storeData}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.name}>
            <p>Dirección: {item.address}</p>
            {item.phone && <p>Teléfono: {item.phone}</p>}
            {item.url && <p>Sitio web: <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></p>}
            {item.star_count > 0 && <p>Calificación: {item.star_count} ({item.rating_count} reseñas)</p>}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default StoreList;
