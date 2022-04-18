import { ITask } from "constants/interfaces/task";
import { useMutation, useQuery } from "react-query";
import { client } from "../config/client";

const TASKS = "/tasks";

const getTasks = async (quantity: string) => {
    const { data } = await client.get(`${TASKS}/?quantity=${quantity}`);
    return data.data;
};

const patchTask = async (task:ITask) => {
    const { data } = await client.patch(`${TASKS}/`, task);
    return data.data;
}

export const useGetTasks = (quantity: string) => {
    return useQuery(["tasks", quantity], () => getTasks(quantity));
};

export const useDoneTask = () => {
    return useMutation((task:ITask) =>
        patchTask(task));
}
