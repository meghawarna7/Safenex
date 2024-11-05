const HomePage = () => {
    const categories = ["Low-Sugar", "Protein", "Green"]; // Define categories

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6">Welcome to Our Healthy Menu</h1>
            <CategoryFilter categories={categories} /> {/* Pass categories here */}
        </div>
    );
};
