import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken166 } from "./fragment166";
import type { FragmentToken167 } from "./fragment167";

export const FRAGMENT_168 = gql(`
  fragment Fragment168 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult168 = ResultOf<typeof FRAGMENT_168>;
type FragmentSelf168 = NonNullable<FragmentResult168>;

export type FragmentToken168 =
  | FragmentSelf168["__typename"]
  | FragmentSelf168["typenameHint"] | FragmentToken166 | FragmentToken167;
