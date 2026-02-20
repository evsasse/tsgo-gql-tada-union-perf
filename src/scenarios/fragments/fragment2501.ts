import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2499 } from "./fragment2499";
import type { FragmentToken2500 } from "./fragment2500";

export const FRAGMENT_2501 = gql(`
  fragment Fragment2501 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult2501 = ResultOf<typeof FRAGMENT_2501>;
type FragmentSelf2501 = NonNullable<FragmentResult2501>;

export type FragmentToken2501 =
  | FragmentSelf2501["__typename"]
  | FragmentSelf2501["typenameHint"] | FragmentToken2499 | FragmentToken2500;
