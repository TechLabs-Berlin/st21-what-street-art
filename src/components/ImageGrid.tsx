import { IonGrid, IonRow, IonCol } from '@ionic/react';
import './ImageGrid.css';

import { Artwork } from "../models/artwork";


{/* Implementing Firebase business */}
interface Props {
  data?: Artwork[];
}

export const ImageGrid: React.FC<Props> = (props) => {
  const { data } = props;


  {data?.map((item) => {


      return (

            <IonGrid>
              <IonRow class="ion-no-margin">

                <IonCol class="ion-no-padding" size = "4">
                    <div className="img-wrap">
                      <a href="/Art"> 
                        <img className="images" src={item.image} alt=""/>
                          <div className="overlay">
                            <div className="overlayText">{item.title}</div>
                         </div>
                      </a>
                    </div>
                </IonCol>

              </IonRow>
            </IonGrid>

    )});
      }};

      
export default ImageGrid;