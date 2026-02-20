import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken620 } from "./fragment620";
import type { FragmentToken621 } from "./fragment621";

export const FRAGMENT_622 = gql(`
  fragment Fragment622 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult622 = ResultOf<typeof FRAGMENT_622>;
type FragmentSelf622 = NonNullable<FragmentResult622>;

export type FragmentToken622 =
  | FragmentSelf622["__typename"]
  | FragmentSelf622["typenameHint"] | FragmentToken620 | FragmentToken621;
