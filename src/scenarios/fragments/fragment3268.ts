import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3266 } from "./fragment3266";
import type { FragmentToken3267 } from "./fragment3267";

export const FRAGMENT_3268 = gql(`
  fragment Fragment3268 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult3268 = ResultOf<typeof FRAGMENT_3268>;
type FragmentSelf3268 = NonNullable<FragmentResult3268>;

export type FragmentToken3268 =
  | FragmentSelf3268["__typename"]
  | FragmentSelf3268["typenameHint"] | FragmentToken3266 | FragmentToken3267;
