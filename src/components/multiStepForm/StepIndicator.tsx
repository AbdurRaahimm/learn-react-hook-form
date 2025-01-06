
interface StepIndicatorProps {
    currentStep: number;
    steps: string[];
  }
  

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <nav className="w-full max-w-4xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
      {/* Steps */}
      {
        steps.map((step, index) => (
            <div key={index} className="w-full">
            <div className="flex flex-col gap-2">
              <div className="text-sm text-indigo-600">Step {index+1} </div>
              <div className="text-sm font-medium">{step}</div>
            </div>
            <div className={`mt-2 h-1 w-full rounded ${index + 1 <= currentStep ? 'bg-indigo-600' : 'bg-gray-200'}`} />
          </div>
        ))
      }
      
    </div>
  </nav>
  )
}
