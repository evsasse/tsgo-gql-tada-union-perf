import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4864 } from "./fragment4864";
import type { FragmentToken4865 } from "./fragment4865";

export const FRAGMENT_4866 = gql(`
  fragment Fragment4866 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult4866 = ResultOf<typeof FRAGMENT_4866>;
type FragmentSelf4866 = NonNullable<FragmentResult4866>;

export type FragmentToken4866 =
  | FragmentSelf4866["__typename"]
  | FragmentSelf4866["typenameHint"] | FragmentToken4864 | FragmentToken4865;
