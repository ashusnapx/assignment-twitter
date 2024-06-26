import React from 'react'
import { Button } from './ui/button';
import { Mail, PencilIcon, Trash2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-3 bg-yellow-400'>tt</div>
      <div className='col-span-1'>
        <div>
          <Button className='bg-red-200 text-red-600 hover:bg-red-300'>
            <Trash2 className='mr-2 h-4 w-4 ' /> Delete job
          </Button>

          <Button className='bg-orange-600 hover:bg-orange-700'>
            <PencilIcon className='mr-2 h-4 w-4 ' /> Edit job
          </Button>
        </div>
              <div>
                  <div>
                      
                  </div>
        </div>
      </div>
    </div>
  );
}

export default Hero