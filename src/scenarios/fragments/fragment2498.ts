import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2496 } from "./fragment2496";
import type { FragmentToken2497 } from "./fragment2497";

export const FRAGMENT_2498 = gql(`
  fragment Fragment2498 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult2498 = ResultOf<typeof FRAGMENT_2498>;
type FragmentSelf2498 = NonNullable<FragmentResult2498>;

export type FragmentToken2498 =
  | FragmentSelf2498["__typename"]
  | FragmentSelf2498["typenameHint"] | FragmentToken2496 | FragmentToken2497;
