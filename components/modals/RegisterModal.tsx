"use client";

import React, { useState } from "react";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useRegisterModal } from "../../hooks/useRegisterModal";

export const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return <div></div>;
};
