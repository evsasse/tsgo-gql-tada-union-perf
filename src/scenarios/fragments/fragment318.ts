import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken316 } from "./fragment316";
import type { FragmentToken317 } from "./fragment317";

export const FRAGMENT_318 = gql(`
  fragment Fragment318 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult318 = ResultOf<typeof FRAGMENT_318>;
type FragmentSelf318 = NonNullable<FragmentResult318>;

export type FragmentToken318 =
  | FragmentSelf318["__typename"]
  | FragmentSelf318["typenameHint"] | FragmentToken316 | FragmentToken317;
