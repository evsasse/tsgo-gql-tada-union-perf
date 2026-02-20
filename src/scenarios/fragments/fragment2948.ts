import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2946 } from "./fragment2946";
import type { FragmentToken2947 } from "./fragment2947";

export const FRAGMENT_2948 = gql(`
  fragment Fragment2948 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult2948 = ResultOf<typeof FRAGMENT_2948>;
type FragmentSelf2948 = NonNullable<FragmentResult2948>;

export type FragmentToken2948 =
  | FragmentSelf2948["__typename"]
  | FragmentSelf2948["typenameHint"] | FragmentToken2946 | FragmentToken2947;
