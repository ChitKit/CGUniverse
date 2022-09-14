import { useSelect } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getModel_THUNK } from '../../../redux/actions/oneModelAction';

export default function searchResultModel() {
  const onemodel = useSelect((s) => s.onemodel);
  const dispatch = useDispatch();
  const { id } = useParams;
  useEffect(() => {
    dispatch(getModel_THUNK(id));
  }, []);
  return (
    <div>searchResultModel</div>
  );
}
