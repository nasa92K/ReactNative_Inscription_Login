import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  racine: { flex: 1, backgroundColor: '#fff' },
  ecran: { flex: 1 },

  zoneLien: {
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  lien: { color: '#2563EB', fontSize: 15, fontWeight: '600' },

  bienvenue: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  titreBienvenue: { fontSize: 24, fontWeight: '700', marginBottom: 8, textAlign: 'center' },
  texte: { fontSize: 16, color: '#6B7280', marginBottom: 24 },

  bouton: {
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  boutonPresse: { opacity: 0.7 },
  boutonTexte: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
