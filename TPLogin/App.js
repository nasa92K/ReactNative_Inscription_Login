import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LoginScreen } from './screens/LoginScreen';
import { InscriptionScreen } from './screens/InscriptionScreen';
import { ProduitsScreen } from './screens/ProduitsScreen';
import styles from './AppStyles';

export default function App() {
  const [ecran, setEcran] = useState('login');
  const [utilisateur, setUtilisateur] = useState(null);

  // Utilisateur connecté : liste des produits
  if (utilisateur) {
    return (
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <ProduitsScreen
          utilisateur={utilisateur}
          onDeconnexion={() => setUtilisateur(null)}
        />
      </SafeAreaProvider>
    );
  }

  // Personne n'est connecté : connexion ou inscription
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <View style={styles.racine}>
        <View style={styles.ecran}>
          {ecran === 'login'
            ? <LoginScreen onConnecte={setUtilisateur} />
            : <InscriptionScreen />}
        </View>

        <SafeAreaView edges={['bottom']} style={styles.zoneLien}>
          <Pressable onPress={() => setEcran(ecran === 'login' ? 'inscription' : 'login')}>
            <Text style={styles.lien}>
              {ecran === 'login'
                ? "Pas encore de compte ? S'inscrire"
                : 'Déjà inscrit ? Se connecter'}
            </Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}
