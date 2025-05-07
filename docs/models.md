# Models Documentation

## Item Model

The Item model represents products in the system.

### Properties
```php
protected $casts = [
    'tax' => 'float',
    'price' => 'float',
    'status' => 'integer',
    'discount' => 'float',
    'avg_rating' => 'float',
    'set_menu' => 'integer',
    'category_id' => 'integer',
    'store_id' => 'integer',
    'reviews_count' => 'integer',
    'recommended' => 'integer',
    'maximum_cart_quantity' => 'integer',
    'organic' => 'integer',
    'veg' => 'integer',
    'images' => 'array',
    'module_id' => 'integer',
    'is_approved' => 'integer',
    'stock' => 'integer',
    'min_price' => 'float',
    'max_price' => 'float',
    'order_count' => 'integer',
    'rating_count' => 'integer',
    'unit_id' => 'integer',
    'is_halal' => 'integer',
];
```

### Relationships
- `carts()`: MorphMany relationship with Cart model
- `temp_product()`: HasOne relationship with TempProduct model
- `translations()`: MorphMany relationship with Translation model

### Scopes
- `scopeRecommended()`: Returns recommended items
- `scopeDiscounted()`: Returns items with discount
- `scopeModule()`: Filters items by module
- `scopeActive()`: Returns active and approved items

## Order Model

The Order model represents customer orders.

### Properties
- `status`: Order status
- `total_amount`: Total order amount
- `payment_method`: Payment method used
- `delivery_address`: Delivery address
- `created_at`: Order creation date

### Relationships
- `items()`: HasMany relationship with Item model
- `store()`: BelongsTo relationship with Store model
- `customer()`: BelongsTo relationship with User model

## Store Model

The Store model represents online stores.

### Properties
- `name`: Store name
- `status`: Store status
- `business_model`: Store business model
- `max_order`: Maximum orders allowed
- `created_at`: Store creation date

### Relationships
- `items()`: HasMany relationship with Item model
- `orders()`: HasMany relationship with Order model
- `owner()`: BelongsTo relationship with User model
