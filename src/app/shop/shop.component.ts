import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
document.addEventListener('DOMContentLoaded', () => {
  const productsSection = document.getElementById('productsSection') as HTMLElement;

  // Function to filter products based on selected checkboxes
  function filterProducts(): void {
      const inStockChecked = (document.getElementById('In Stock') as HTMLInputElement).checked;
      const outOfStockChecked = (document.getElementById('Out Of Stock') as HTMLInputElement).checked;
      const type1Checked = (document.getElementById('type1') as HTMLInputElement).checked;
      const type2Checked = (document.getElementById('type2') as HTMLInputElement).checked;
      const weight1Checked = (document.getElementById('weight1') as HTMLInputElement).checked;
      const weight2Checked = (document.getElementById('weight2') as HTMLInputElement).checked;
      const weight3Checked = (document.getElementById('weight3') as HTMLInputElement).checked;
      
      const products = document.querySelectorAll('.products-section .product') as NodeListOf<HTMLElement>;

      products.forEach(product => {
          const availability = product.getAttribute('data-availability');
          const type = product.getAttribute('data-type');
          const weight = product.getAttribute('data-weight');

          let showProduct = true;

          if (inStockChecked && availability !== 'In Stock') {
              showProduct = false;
          }
          if (outOfStockChecked && availability !== 'Out Of Stock') {
              showProduct = false; 
          }
          if (type1Checked && type !== '|') {
              showProduct = false;
          }
          if (type2Checked && type !== '||') {
              showProduct = false;
          }
          if (weight1Checked && weight !== '100gr') {
              showProduct = false;
          }
          if (weight2Checked && weight !== '500gr') {
              showProduct = false;
          }
          if (weight3Checked && weight !== '1000gr') {
              showProduct = false;
          }

          product.style.display = showProduct ? 'block' : 'none';
      });
  }

  // Attach change event listeners to checkboxes
  document.querySelectorAll('.avi input[type="checkbox"]').forEach(checkbox => {
      (checkbox as HTMLInputElement).addEventListener('change', filterProducts);
  });

  document.querySelectorAll('.type input[type="checkbox"]').forEach(checkbox => {
      (checkbox as HTMLInputElement).addEventListener('change', filterProducts);
  });

  document.querySelectorAll('.weight input[type="checkbox"]').forEach(checkbox => {
      (checkbox as HTMLInputElement).addEventListener('change', filterProducts);
  });

  
});
