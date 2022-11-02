#mobx 이미지 파일 첨부

###초기

```javascript
const imageForm = new FormData();
imageForm.append(‘image’, uri);
```

### 수정 후

````javascript
let photo = {
          uri: this.state.profileImage,
          type: 'image/jpeg',
          name: 'photo.jpg',
        };
        const imageForm = new FormData();
        imageForm.append('image', photo);
        (this.props as any).UserStore.uploadProfileImage(imageForm);
        ```
````
