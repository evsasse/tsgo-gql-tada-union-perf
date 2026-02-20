import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1864 } from "./fragment1864";
import type { FragmentToken1865 } from "./fragment1865";

export const FRAGMENT_1866 = gql(`
  fragment Fragment1866 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult1866 = ResultOf<typeof FRAGMENT_1866>;
type FragmentSelf1866 = NonNullable<FragmentResult1866>;

export type FragmentToken1866 =
  | FragmentSelf1866["__typename"]
  | FragmentSelf1866["typenameHint"] | FragmentToken1864 | FragmentToken1865;
