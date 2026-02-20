import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1061 } from "./fragment1061";
import type { FragmentToken1062 } from "./fragment1062";

export const FRAGMENT_1063 = gql(`
  fragment Fragment1063 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult1063 = ResultOf<typeof FRAGMENT_1063>;
type FragmentSelf1063 = NonNullable<FragmentResult1063>;

export type FragmentToken1063 =
  | FragmentSelf1063["__typename"]
  | FragmentSelf1063["typenameHint"] | FragmentToken1061 | FragmentToken1062;
