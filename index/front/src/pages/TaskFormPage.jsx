import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useTasks } from "../context/tasksContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      // navigate("/tasks");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue(
          "date",
          task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, []);

  return (
    <Card className="bg-white p-4 shadow-md rounded-md">
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="title" className="font-bold mb-2">Tablero</Label>
      <Input
        type="text"
        name="title"
        placeholder="Title"
        {...register("title")}
        autoFocus
        className="border border-gray-300 px-2 py-1 rounded-md w-full mb-2"
      />
      {errors.title && (
        <p className="text-red-500 text-xs italic">Por favor ingrese un título.</p>
      )}
  
      <Label htmlFor="description" className="font-bold mb-2">Descripción</Label>
      <Textarea
        name="description"
        id="description"
        rows="3"
        placeholder="Description"
        {...register("description")}
        className="border border-gray-300 px-2 py-1 rounded-md w-full mb-2"
      ></Textarea>
  
      <Label htmlFor="date" className="font-bold mb-2">Date</Label>
      <Input type="date" name="date" {...register("date")} className="border border-gray-300 px-2 py-1 rounded-md w-full mb-2" />
  
      <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Guardar
      </Button>
    </form>
  </Card>
  
  );
}