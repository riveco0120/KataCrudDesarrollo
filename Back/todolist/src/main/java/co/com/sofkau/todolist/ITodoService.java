package co.com.sofkau.todolist;


public interface ITodoService {
    public Iterable<Todo> list();
    public Todo save(Todo tod);
    public void delete(Long id);
    public  Todo get(Long id);
}
