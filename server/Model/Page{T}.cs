﻿using System.Collections.Generic;

namespace webapi.Model
{
    public sealed class Page<T>
    {
        public IEnumerable<T> Items { get; set; }

        public long TotalSize { get; set; }
    }
}
