import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken122 } from "./fragment122";
import type { FragmentToken123 } from "./fragment123";

export const FRAGMENT_124 = gql(`
  fragment Fragment124 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult124 = ResultOf<typeof FRAGMENT_124>;
type FragmentSelf124 = NonNullable<FragmentResult124>;

export type FragmentToken124 =
  | FragmentSelf124["__typename"]
  | FragmentSelf124["typenameHint"] | FragmentToken122 | FragmentToken123;
