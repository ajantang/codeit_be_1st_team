## POST /exchange/:exchangedId/accept

### req template
- description: 포토카드 교환 승인
- path: /exchange/:exchangedId/accept
- method: POST
- params
    - exchangedId: 교환ID

### req example

- params
  - adfc1706-a7f6-4c6e-a006-1733a854afbb

### res template

- data
    - successStatus: 성공 여부
    - exchangeId: 교환 아이디
    - shopId: 상점 아이디
    - description: 교환 설명
    - id: 교환 시 제시한 카드 아이디
    - image: 교환 시 제시한 카드 이미지
    - name: 교환 시 제시한 카드 이름
    - grade: 교환 시 제시한 카드 등급
    - genre: 교환 시 제시한 카드 장르
    - price: 교환 시 제시한 카드 원가
    - nickname: 교환 시 제시한 카드 원작자

### res example

- data : {
  "successStatus": true,
  "exchangeId": "d3291be5-2080-4b6c-82c8-dc101dbd9175",
  "shopId": "b49e0270-04b4-4d69-aea8-f720c3cefbe6",
  "description": null,
  "id": "0f4939d0-aab9-48b8-a1b0-6958f97908d9",
  "image": "이미지 URL",
  "name": "qqqq",
  "grade": 0,
  "genre": 0,
  "price": 4,
  "nickname": "코드잇01"
}

## POST /exchange/:exchangedId/refuse

### req template
- description: 포토카드 교환 거절
- path: /exchange/:exchangedId/refuse
- method: POST
- params
    - exchangedId: 교환ID

### req example

- params
  - adfc1706-a7f6-4c6e-a006-1733a854afbb

### res template

- data
    - successStatus: 성공 여부
    - exchangeId: 교환 아이디
    - shopId: 상점 아이디
    - description: 교환 설명
    - id: 교환 시 제시한 카드 아이디
    - image: 교환 시 제시한 카드 이미지
    - name: 교환 시 제시한 카드 이름
    - grade: 교환 시 제시한 카드 등급
    - genre: 교환 시 제시한 카드 장르
    - price: 교환 시 제시한 카드 원가
    - nickname: 교환 시 제시한 카드 원작자

### res example

- data : {
  "successStatus": true,
  "exchangeId": "d3291be5-2080-4b6c-82c8-dc101dbd9175",
  "shopId": "b49e0270-04b4-4d69-aea8-f720c3cefbe6",
  "description": null,
  "id": "0f4939d0-aab9-48b8-a1b0-6958f97908d9",
  "image": "이미지 URL",
  "name": "qqqq",
  "grade": 0,
  "genre": 0,
  "price": 4,
  "nickname": "코드잇01"
}

## DELETE /exchange/:exchangeId

### req template
- description: 포토 카드 교환 취소
- path: /exchange/:exchangeId
- method: DELETE
- params
    - exchangeId: 교환ID

### req example

- params
  - adfc1706-a7f6-4c6e-a006-1733a854afbb

### res template

- data
    - successStatus: 성공 여부
    - exchangeId: 교환 아이디
    - shopId: 상점 아이디
    - description: 교환 설명
    - id: 교환 시 제시한 카드 아이디
    - image: 교환 시 제시한 카드 이미지
    - name: 교환 시 제시한 카드 이름
    - grade: 교환 시 제시한 카드 등급
    - genre: 교환 시 제시한 카드 장르
    - price: 교환 시 제시한 카드 원가
    - nickname: 교환 시 제시한 카드 원작자

### res example

- data : {
  "successStatus": true,
  "exchangeId": "d3291be5-2080-4b6c-82c8-dc101dbd9175",
  "shopId": "b49e0270-04b4-4d69-aea8-f720c3cefbe6",
  "description": null,
  "id": "0f4939d0-aab9-48b8-a1b0-6958f97908d9",
  "image": "이미지 URL",
  "name": "qqqq",
  "grade": 0,
  "genre": 0,
  "price": 4,
  "nickname": "코드잇01"
}