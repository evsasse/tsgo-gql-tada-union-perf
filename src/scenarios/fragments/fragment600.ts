import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken598 } from "./fragment598";
import type { FragmentToken599 } from "./fragment599";

export const FRAGMENT_600 = gql(`
  fragment Fragment600 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult600 = ResultOf<typeof FRAGMENT_600>;
type FragmentSelf600 = NonNullable<FragmentResult600>;

export type FragmentToken600 =
  | FragmentSelf600["__typename"]
  | FragmentSelf600["typenameHint"] | FragmentToken598 | FragmentToken599;
