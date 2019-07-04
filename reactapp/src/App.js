import React from 'react';
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonMenuButton,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonContent,
  IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent
  
} from '@ionic/react';


function App() {
  return (
    <div >
 
      <IonToolbar color= "danger">
      <IonButtons slot="start">
        <IonMenuButton autoHide={false} />
      </IonButtons>
      <IonButtons slot="secondary">
        <IonButton>
          <IonIcon slot="icon-only" name="star" />
        </IonButton>
      </IonButtons>
      <IonTitle>Home</IonTitle>
    </IonToolbar>

     <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>React</IonCardSubtitle>
        <IonCardTitle>Ionic + React</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
    </IonCard>
 
    </div>
  );
}

export default App;
