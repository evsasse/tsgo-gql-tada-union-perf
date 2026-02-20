import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken123 } from "./fragment123";
import type { FragmentToken124 } from "./fragment124";

export const FRAGMENT_125 = gql(`
  fragment Fragment125 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult125 = ResultOf<typeof FRAGMENT_125>;
type FragmentSelf125 = NonNullable<FragmentResult125>;

export type FragmentToken125 =
  | FragmentSelf125["__typename"]
  | FragmentSelf125["typenameHint"] | FragmentToken123 | FragmentToken124;
