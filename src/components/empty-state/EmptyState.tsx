import { FC } from "react";

import "./styles.css";
import icon from "./icon.svg";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

export const EmptyState: FC = (props) => {
  return (
    <IonCard className="empty_state">
      <img src={icon} />

      <IonCardHeader>
        <IonCardSubtitle>Sorry but...</IonCardSubtitle>
        <IonCardTitle>No artworks in this category.</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>Please try again later 🚀.</IonCardContent>
    </IonCard>
  );
};
