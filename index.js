import { createClient } from "@supabase/supabase-js";

const form = document.querySelector("form");

const supabase = createClient(
  "https://kncyauuctrmdvvpysldk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuY3lhdXVjdHJtZHZ2cHlzbGRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyNTczODAsImV4cCI6MjAwMTgzMzM4MH0.A4WSPVtmFy1cJPf0kYdJamDOdWggDGhe_KYL1dbOG1I"
);

async function CreateItem(e) {
  e.preventDefault();

  let nombre_user = document.getElementById("nombre_user").value;
  let telefono_user = parseInt(document.getElementById("telefono_user").value);
  let correo = document.getElementById("correo").value;
  let tema_user = document.getElementById("tema_user").value;
  let text_user = document.getElementById("text_user").value;
  let navegador = navigator.userAgent;
  let sistema_operativo = navigator.platform;

  const { error } = await supabase.from("peticiones").insert({
    nombre_usuario: nombre_user,
    telefono_usuario: telefono_user,
    correo_usuario: correo,
    tema: tema_user,
    mensaje: text_user,
    navegador: navegador,
    sistema_operativo: sistema_operativo,
  });

  document.getElementById("succes-btn").style.display = "block";
  setTimeout(() => {
    document.getElementById("succes-btn").style.display = "none";
  }, 1500);
}

form.addEventListener("submit", CreateItem);
