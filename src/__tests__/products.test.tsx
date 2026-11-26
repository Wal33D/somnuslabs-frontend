import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { ProductArticle } from '@/components/site/ProductArticle';
import { catalog, getProduct, productPath } from '@/lib/products';

describe('product pages', () => {
  test.each(catalog)(
    '$name has an on-site page and an off-site call to action',
    product => {
      render(<ProductArticle product={product} />);

      expect(
        screen.getByRole('heading', { level: 1, name: product.name }),
      ).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      product.bullets.forEach(point => {
        expect(screen.getByText(point)).toBeInTheDocument();
      });

      const visit = screen.getByRole('link', {
        name: new RegExp(product.primaryCta),
      });
      expect(visit).toHaveAttribute('href', product.href);
      expect(visit).toHaveAttribute('target', '_blank');
      expect(visit).toHaveAttribute('rel', 'noopener noreferrer');

      expect(
        screen.getByRole('link', { name: 'Ask a question' }),
      ).toHaveAttribute('href', '/#contact');
    },
  );

  test('an unknown slug is not in the catalog', () => {
    expect(getProduct('not-a-product')).toBeUndefined();
  });
});

describe('home product links stay on this site', () => {
  test('chips, titles, and the footer open the product page', () => {
    render(<Home />);

    catalog.forEach(product => {
      const links = screen.getAllByRole('link', { name: product.name });
      expect(links.length).toBeGreaterThanOrEqual(2);
      links.forEach(link => {
        expect(link).toHaveAttribute('href', productPath(product));
      });
    });

    expect(
      screen.getByRole('link', { name: /Visit Deskwork/ }),
    ).toHaveAttribute('href', 'https://deskworkapp.com');
    expect(screen.getAllByRole('link', { name: 'Details' })).toHaveLength(
      catalog.length,
    );
  });
});
