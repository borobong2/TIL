# functional 에서 mobx 사용법

```javascript
import useStores from "~/mobx/useStores";

const { UserStore, MyStore } = useStores();
```

```javascript
useStores 내부

import React from 'react';
import {MobXProviderContext} from 'mobx-react';

/**
 * React hooks를 사용하는 컴포넌트에서 store를 가져올 때 사용한다.
 * 참조) https://mobx-react.js.org/recipes-migration#hooks-for-the-rescue
 */
function useStores() {
  return React.useContext(MobXProviderContext);
}

export default useStores;
```
