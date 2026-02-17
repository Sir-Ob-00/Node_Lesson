import Students from "../models/student.js";

// CREATE OPERATION
export const createStudent = async (req, res) => {
    try {
        const { name, age, gpa } = req.body;
        const student = new Students({ name, age, gpa });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: "Error creating student" });
    }
};

// READ ALL
export const getStudents = async (req, res) => {
  try {
    const students = await Students.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students" });
  }
};

// READ ONE
export const getStudent = async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student" });
  }
};

//UPDATE
export const updateStudent = async (req, res) => {
  try {
    console.log("Updating student with ID:", req.params.id);
    console.log("Request body:", req.body);

    const { name, age, gpa } = req.body;

    const student = await Students.findByIdAndUpdate(
      req.params.id,
      { name, age, gpa },
      { new: true, runValidators: true }
    );

    if (!student) return res.status(404).json({ message: "Student not found" });

    res.json(student);
  } catch (error) {
    console.error("MongoDB update error:", error);
    res.status(500).json({ message: "Error updating student" });
  }
};


// DELETE
export const deleteStudent = async (req, res) => {
  try {
    const student = await Students.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student" });
  }
};