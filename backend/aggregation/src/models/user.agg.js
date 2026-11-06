const response = userModel.aggregate([
    {
        '$sort': {
            'age': 1
        }
    }, {
        '$group': {
            '_id': '$city',
            'user': {
                '$push': '$username'
            }
        }
    }
])