package co.com.sofkau.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService implements ITodoService{

    @Autowired
    private ITodoRepository repository;

    @Override
    public Iterable<Todo> list(){
        return repository.findAll();
    }

    @Override
    public Todo save(Todo todo){
        return repository.save(todo);
    }

    @Override
    public void delete(Long id){
        repository.delete(get(id));
    }

    @Override
    public Todo get(Long id){
        return repository.findById(id).orElseThrow();
    }

}
