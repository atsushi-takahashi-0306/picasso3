import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const editDB = firebase.firestore().collection('bags').orderBy("inventry", "asc")
const db = firebase.firestore().collection('bags')
const storage = firebase.storage()


export const state = () => ({
    items: [],
    item: [],
    cart: [],
});


export const mutations = {
    showInit(state, payload) {
        state.item = payload
    },
    addCart(state, payload) {
        state.cart.push(payload)
    },
    removeCart(state, payload) {
        state.cart.splice(payload, 1)
    },
    incrementItemQuantity(state, { id }) {
        const cartItem = state.cart.find(item => item.id === id);
        cartItem.quantity++;
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
            url: payload.url,
            inventry: Number(payload.inventry)
        })
    }),
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('items', db)
    }),
    editInit: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('items', editDB)
    }),
    show({ commit, context }, itemId) {
        db.doc(itemId).get().then(function (doc) {
            const item = {
                name: doc.data().name,
                price: doc.data().price,
                url: doc.data().url
            }
            commit('showInit', item)
        })
    },
    remove: firestoreAction((context, id) => {
        if (confirm('削除してもよろしいですか？')) {
            db.doc(id).delete().then(function () {
                console.log("Document successfully deleted!");
            }).catch(function (error) {
                console.error("Error removing document: ", error)
                    .then(function (id) {
                    })
            });

        }
    }),
    update: firestoreAction((context, payload) => {
        if (confirm('編集してもよろしいですか？')) {
            db.doc(String(payload.id)).update({
                name: payload.name,
                price: payload.price,
                url: payload.url,
                inventry: Number(payload.inventry)
            })
        }
    }),
    addCart({ state, commit }, payload) {
        const cartItem = state.cart.find(item => item.id === payload.id)
        if (!cartItem) {
            commit('addCart', payload)
        } else {
            commit('incrementItemQuantity', cartItem);
        }
    },
    removeCart({ commit }, payload) {
        commit('removeCart', payload)
    },
}