import { OverviewProductPresenterInterface, OverviewProductViewInterface } from "@/Interfaces/OverviewProduct/OverviewProductViewInterface";
import { ListProductRest } from "@/services/api/ListProductRest";

export class OverviewProductPresenter implements OverviewProductPresenterInterface {
  private view: OverviewProductViewInterface;
  private _service: ListProductRest

  constructor(view: OverviewProductViewInterface) {
    this.view = view;
    this._service = new ListProductRest();
  }

  getProduct(id: string): void {
    this._service
      .getProductsById(id)
      .then((product) => {
        this.view.setProduct(product.data)
      })
      .catch((error) => {
        this.view.showError(error);
        throw error;
      });
  }
}