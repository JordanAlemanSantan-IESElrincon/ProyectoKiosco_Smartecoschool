package Dates;

public class Student {
    private int id;
    private String name;
    private String surnames;
    private int age;
    private String address;
    private int course;
    private String familyDates;
    private double note;

    public Student(int id, String name, String surnames, int age, String address, int course, String familyDates) {
        this.id = id;
        this.name = name;
        this.surnames = surnames;
        this.age = age;
        this.address = address;
        this.course = course;
        this.familyDates = familyDates;
    }

    public Student(String name, String surnames, int age, String address, int course, String familyDates) {
        this.name = name;
        this.surnames = surnames;
        this.age = age;
        this.address = address;
        this.course = course;
        this.familyDates = familyDates;
    }   

    public Student(String name, String surnames, int age, String address, int course, String familyDates, double note) {
        this.name = name;
        this.surnames = surnames;
        this.age = age;
        this.address = address;
        this.course = course;
        this.familyDates = familyDates;
        this.note = note;
    }   
    
    public Student(int id, String name, String surnames, int age, String address, int course, String familyDates, double note) {
        this.id = id;
        this.name = name;
        this.surnames = surnames;
        this.age = age;
        this.address = address;
        this.course = course;
        this.familyDates = familyDates;
        this.note = note;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSurnames() {
        return surnames;
    }

    public int getAge() {
        return age;
    }

    public String getAddress() {
        return address;
    }

    public int getCourse() {
        return course;
    }

    public String getFamilyDates() {
        return familyDates;
    }

    public double getNote() {
        return note;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurnames(String surname) {
        this.surnames = surname;
    }

    public void setAge(int nota) {
        this.age = nota;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setCourse(int course) {
        this.course = course;
    }

    public void setFamilyDates(String familyDate) {
        this.familyDates = familyDate;
    }

    public void setNote(double note) {
        this.note = note;
    }

    @Override
    public String toString() {
        return "Id: \t\t" + getId()
                + "\nName: \t\t" + getName()
                + "\nSurname: \t" + getSurnames()
                + "\nAge: \t\t" + getAge()
                + "\nAddress: \t" + getAddress()
                + "\nCourse: \t" + getCourse()
                + "\nFamilyDate: \t" + getFamilyDates() + "\n";
    }
}
