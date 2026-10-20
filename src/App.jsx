import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TrailView from './components/TrailView';
import SlideHeader from './components/SlideHeader';
import SlideViewer from './components/SlideViewer';
import PresentationMode from './components/PresentationMode';
import RemoteControl from './components/RemoteControl';
import CajuLensModal from './components/CajuLensModal';
import GlossaryModal from './components/GlossaryModal';
import ProfessorDashboard from './components/ProfessorDashboard';
import PrintSummaryModal from './components/PrintSummaryModal';
import PdfCenterModal from './components/PdfCenterModal';
import { LESSONS_DATA } from './data/lessonsData';

export default function App() {
  const [activeLessonId, setActiveLessonId] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [isRemoteMode, setIsRemoteMode] = useState(false);
  const [isCajuLensModalOpen, setIsCajuLensModalOpen] = useState(false);
  const [isGlossaryModalOpen, setIsGlossaryModalOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [isPdfCenterOpen, setIsPdfCenterOpen] = useState(false);

  // Progresso salvo no LocalStorage
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem('aula_caju_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quizScores, setQuizScores] = useState(() => {
    try {
      const saved = localStorage.getItem('aula_caju_scores');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Salvar progresso
  useEffect(() => {
    try {
      localStorage.setItem('aula_caju_completed', JSON.stringify(completedLessons));
    } catch {}
  }, [completedLessons]);

  useEffect(() => {
    try {
      localStorage.setItem('aula_caju_scores', JSON.stringify(quizScores));
    } catch {}
  }, [quizScores]);

  // Sincronização BroadcastChannel em tempo real com controle remoto / projetor
  useEffect(() => {
    if ('BroadcastChannel' in window) {
      const channel = new BroadcastChannel('aula-caju-sync');

      channel.onmessage = (event) => {
        const { type, lessonId, slideIndex } = event.data || {};
        if (type === 'REMOTE_SYNC' || type === 'GOTO_SLIDE') {
          if (lessonId && lessonId !== activeLessonId) {
            setActiveLessonId(lessonId);
          }
          if (typeof slideIndex === 'number') {
            setCurrentSlideIndex(slideIndex);
          }
        }
      };

      return () => channel.close();
    }
  }, [activeLessonId]);

  const activeLesson = LESSONS_DATA.find(l => l.id === activeLessonId) || LESSONS_DATA[0];

  const handleSelectLesson = (lessonId) => {
    setActiveLessonId(lessonId);
    setCurrentSlideIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Broadcast sync
    if ('BroadcastChannel' in window) {
      const channel = new BroadcastChannel('aula-caju-sync');
      channel.postMessage({ type: 'GOTO_SLIDE', lessonId, slideIndex: 0 });
      channel.close();
    }
  };

  const handleNextSlide = () => {
    if (activeLesson && currentSlideIndex < activeLesson.slides.length - 1) {
      const nextIndex = currentSlideIndex + 1;
      setCurrentSlideIndex(nextIndex);

      if ('BroadcastChannel' in window) {
        const channel = new BroadcastChannel('aula-caju-sync');
        channel.postMessage({ type: 'GOTO_SLIDE', lessonId: activeLesson.id, slideIndex: nextIndex });
        channel.close();
      }
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      const prevIndex = currentSlideIndex - 1;
      setCurrentSlideIndex(prevIndex);

      if ('BroadcastChannel' in window) {
        const channel = new BroadcastChannel('aula-caju-sync');
        channel.postMessage({ type: 'GOTO_SLIDE', lessonId: activeLesson.id, slideIndex: prevIndex });
        channel.close();
      }
    }
  };

  const handleGoToSlide = (index) => {
    setCurrentSlideIndex(index);
    if ('BroadcastChannel' in window && activeLesson) {
      const channel = new BroadcastChannel('aula-caju-sync');
      channel.postMessage({ type: 'GOTO_SLIDE', lessonId: activeLesson.id, slideIndex: index });
      channel.close();
    }
  };

  const handleQuizCompleted = (lessonId, score) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons(prev => [...prev, lessonId]);
    }
    setQuizScores(prev => ({ ...prev, [lessonId]: score }));
  };

  // Se estiver no Modo Controle Remoto
  if (isRemoteMode) {
    return (
      <RemoteControl
        lesson={activeLesson}
        currentSlideIndex={currentSlideIndex}
        onNextSlide={handleNextSlide}
        onPrevSlide={handlePrevSlide}
        onGoToSlide={handleGoToSlide}
        onCloseRemote={() => setIsRemoteMode(false)}
        onSelectLesson={handleSelectLesson}
        allLessons={LESSONS_DATA}
      />
    );
  }

  // Se estiver no Modo Apresentação Fullscreen
  if (isPresentationMode && activeLessonId) {
    return (
      <PresentationMode
        lesson={activeLesson}
        currentSlideIndex={currentSlideIndex}
        onNextSlide={handleNextSlide}
        onPrevSlide={handlePrevSlide}
        onClose={() => setIsPresentationMode(false)}
        onOpenCajuLens={() => setIsCajuLensModalOpen(true)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-amber-50/50 text-stone-900 flex flex-col font-sans">
      {/* Barra de Navegação Superior */}
      <Navbar
        onOpenGlossary={() => setIsGlossaryModalOpen(true)}
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onOpenRemote={() => setIsRemoteMode(true)}
        onOpenSummary={() => setIsSummaryModalOpen(true)}
        onOpenPdfCenter={() => setIsPdfCenterOpen(true)}
        onTogglePresentation={() => setIsPresentationMode(true)}
        currentView={activeLessonId ? 'lesson' : 'trail'}
        completedLessons={completedLessons}
      />

      {/* Conteúdo Principal */}
      <main className="flex-1 flex flex-col">
        {activeLessonId ? (
          // VISUALIZADOR DE AULA (MODO ESTUDO MOBILE-FIRST)
          <div className="flex-1 flex flex-col">
            <SlideHeader
              lesson={activeLesson}
              currentSlideIndex={currentSlideIndex}
              totalSlides={activeLesson.slides.length}
              onOpenCajuLens={() => setIsCajuLensModalOpen(true)}
              onTogglePresentation={() => setIsPresentationMode(true)}
              onBackToTrail={() => setActiveLessonId(null)}
              onOpenGlossary={() => setIsGlossaryModalOpen(true)}
            />

            <SlideViewer
              lesson={activeLesson}
              currentSlideIndex={currentSlideIndex}
              onNextSlide={handleNextSlide}
              onPrevSlide={handlePrevSlide}
              onSelectSlide={handleGoToSlide}
              onOpenCajuLens={() => setIsCajuLensModalOpen(true)}
              onOpenSummary={() => setIsSummaryModalOpen(true)}
              onQuizCompleted={handleQuizCompleted}
            />
          </div>
        ) : (
          // TELA INICIAL: TRILHA DAS 12 AULAS
          <TrailView
            onSelectLesson={handleSelectLesson}
            completedLessons={completedLessons}
            onOpenGlossary={() => setIsGlossaryModalOpen(true)}
            onOpenDashboard={() => setIsDashboardOpen(true)}
            onOpenPdfCenter={() => setIsPdfCenterOpen(true)}
          />
        )}
      </main>

      {/* Modais Globais */}
      <PdfCenterModal
        isOpen={isPdfCenterOpen}
        onClose={() => setIsPdfCenterOpen(false)}
      />

      <CajuLensModal
        isOpen={isCajuLensModalOpen}
        onClose={() => setIsCajuLensModalOpen(false)}
        lesson={activeLesson}
      />

      <GlossaryModal
        isOpen={isGlossaryModalOpen}
        onClose={() => setIsGlossaryModalOpen(false)}
        onGoToLesson={handleSelectLesson}
      />

      <ProfessorDashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        completedLessons={completedLessons}
      />

      <PrintSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
        lesson={activeLesson}
      />
    </div>
  );
}
