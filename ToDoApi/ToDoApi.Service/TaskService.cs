using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoApi.Service
{
    public class TaskService
    {
        private static List<Model.Task> Tasks = new List<Model.Task>();

        public static void Add(Model.Task task)
        {
            task.Id = CreateNewId();
            Tasks.Add(task);
        }

        private static int CreateNewId()
        {
            int newId = 0;
            do
            {
                newId = new Random().Next();
            } while (Get(newId) != null);

            return newId;
        }

        public static List<Model.Task> GetAll()
        {
            return Tasks;
        }

        public static Model.Task Get(int id)
        {
            return Tasks.Where(x => x.Id == id).FirstOrDefault();
        }


        public static bool Delete(int id)
        {
            Model.Task taskDelete = Get(id);
            if (taskDelete != null)
            {
                Tasks.Remove(taskDelete);
                return true;
            }

            return false;
        }

    }
}
