import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken758 } from "./fragment758";
import type { FragmentToken759 } from "./fragment759";

export const FRAGMENT_760 = gql(`
  fragment Fragment760 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult760 = ResultOf<typeof FRAGMENT_760>;
type FragmentSelf760 = NonNullable<FragmentResult760>;

export type FragmentToken760 =
  | FragmentSelf760["__typename"]
  | FragmentSelf760["typenameHint"] | FragmentToken758 | FragmentToken759;
