import { useState } from 'react';
import { Card, Layout, EmptyState } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

const Index = () => {
  const [modal, setModal] = useState({ open: false });
  return (
    <Card>
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={modal.open}
        onCancel={() => setModal({ open: false })}
      />
      <EmptyState
        heading="Price Levels By Customer Tag"
        action={{
          content: 'Create Price Level',
          onAction: () => setModal({ open: true })
        }}
        secondaryAction={{ content: 'Learn more', url: 'https://help.shopify.com' }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Create different price levels for customers based on customer tag.</p>
      </EmptyState>
    </Card>
  )
};

export default Index;
