"use client";

import React, { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import InteractiveEstimator, { EstimatorResult } from "@/components/InteractiveEstimator";
import TaxRiskChecker, { RiskResult } from "@/components/TaxRiskChecker";
import AIWorkflowDemo from "@/components/AIWorkflowDemo";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import DeadlineReminder from "@/components/DeadlineReminder";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import DashboardPreview from "@/components/DashboardPreview";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FloatingLineButton from "@/components/FloatingLineButton";

export default function Home() {
  // Shared States for Form Prefills
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [estimatorData, setEstimatorData] = useState<EstimatorResult | null>(null);
  const [riskResult, setRiskResult] = useState<RiskResult | null>(null);

  // Callbacks
  const handleEstimateComplete = useCallback((result: EstimatorResult) => {
    setEstimatorData(result);
    // Sync recommended package to preselected package state
    setSelectedPackage(result.recommendedPackage);
  }, []);

  const handleRiskComplete = useCallback((result: RiskResult) => {
    setRiskResult(result);
  }, []);

  const handleSelectPackage = useCallback((packageName: string) => {
    setSelectedPackage(packageName);
  }, []);

  return (
    <>
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero & Initial Mockup */}
        <Hero />

        {/* 2. Key Pillars Trust Bar */}
        <TrustBar />

        {/* 3. Services Grid */}
        <Services />

        {/* 4. Interactive AI Workflow Timeline & Mock Panels */}
        <AIWorkflowDemo />

        {/* 5. Cost Estimator Pricing Calculator */}
        <InteractiveEstimator onEstimateComplete={handleEstimateComplete} />

        {/* 6. Tax Risk Diagnostic Checker */}
        <TaxRiskChecker onCheckComplete={handleRiskComplete} />

        {/* 7. Detailed Pricing Packages & Add-on Table */}
        <Pricing onSelectPackage={handleSelectPackage} />

        {/* 8. Tax & Social Deadlines Reminders */}
        <DeadlineReminder />

        {/* 9. Dashboard Preview Portal Mockup */}
        <DashboardPreview />

        {/* 10. Industry Specific Solutions */}
        <Industries />

        {/* 11. Customer Onboarding Onboarding Process */}
        <Process />

        {/* 12. Dynamic Collapsible FAQ */}
        <FAQ />

        {/* 13. Conversion Lead Form */}
        <LeadForm
          prefilledPackage={selectedPackage}
          prefilledEstimatorData={estimatorData}
          prefilledRiskResult={riskResult}
        />
      </main>

      {/* Footer Details & Legal Disclaimers */}
      <Footer />

      {/* Floating Utilities */}
      <FloatingLineButton />
      <StickyMobileCTA />
    </>
  );
}
