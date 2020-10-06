import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore().collection('bags')
const storage = firebase.storage()


export const state = {
    items: [],
    item: []
}

export const mutations = {
    showInit (state, payload) {
      state.item = payload
    }
  }

export const actions = {
    upImage: (context, payload) => {
        return new Promise((resolve, reject) => {
            var uploadTask = storage
                .ref('images/bags/' + payload.name)
                .put(payload)
                .then(snapshot => {
                    snapshot.ref.getDownloadURL().then(url => {
                        resolve(url)
                    })
                })
        })
    },
    addItem: firestoreAction((context, payload) => {
        db.add({
            name: payload.name,
            price: payload.price,
            url: payload.url
        })
    }),
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('items', db)
    }),
    show({ commit, context }, payload) {
        db.doc(payload).get().then(function (doc) {
            const item = {
                name: doc.data().name,
                price: doc.data().price,
                url: doc.data().url
            }
            commit('showInit', item)
        })
    },
}