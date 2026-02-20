import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1335 } from "./fragment1335";
import type { FragmentToken1336 } from "./fragment1336";

export const FRAGMENT_1337 = gql(`
  fragment Fragment1337 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult1337 = ResultOf<typeof FRAGMENT_1337>;
type FragmentSelf1337 = NonNullable<FragmentResult1337>;

export type FragmentToken1337 =
  | FragmentSelf1337["__typename"]
  | FragmentSelf1337["typenameHint"] | FragmentToken1335 | FragmentToken1336;
