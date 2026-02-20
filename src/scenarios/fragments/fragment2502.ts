import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2500 } from "./fragment2500";
import type { FragmentToken2501 } from "./fragment2501";

export const FRAGMENT_2502 = gql(`
  fragment Fragment2502 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult2502 = ResultOf<typeof FRAGMENT_2502>;
type FragmentSelf2502 = NonNullable<FragmentResult2502>;

export type FragmentToken2502 =
  | FragmentSelf2502["__typename"]
  | FragmentSelf2502["typenameHint"] | FragmentToken2500 | FragmentToken2501;
