import React, { useState } from 'react';

const DiaryList = ({ diaries, onEdit }) => {
const [editingId, setEditingId] = useState(null);
const [editFormData, setEditFormData] = useState({
title: '',
date: '',
img: ''
});

return (
<div className="diary-list">
    <h2>나의 일기 목록</h2>
    </div>
);
};

export default DiaryList;