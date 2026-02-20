import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken130 } from "./fragment130";
import type { FragmentToken131 } from "./fragment131";

export const FRAGMENT_132 = gql(`
  fragment Fragment132 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult132 = ResultOf<typeof FRAGMENT_132>;
type FragmentSelf132 = NonNullable<FragmentResult132>;

export type FragmentToken132 =
  | FragmentSelf132["__typename"]
  | FragmentSelf132["typenameHint"] | FragmentToken130 | FragmentToken131;
