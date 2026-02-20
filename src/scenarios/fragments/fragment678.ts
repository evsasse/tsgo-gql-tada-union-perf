import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken676 } from "./fragment676";
import type { FragmentToken677 } from "./fragment677";

export const FRAGMENT_678 = gql(`
  fragment Fragment678 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult678 = ResultOf<typeof FRAGMENT_678>;
type FragmentSelf678 = NonNullable<FragmentResult678>;

export type FragmentToken678 =
  | FragmentSelf678["__typename"]
  | FragmentSelf678["typenameHint"] | FragmentToken676 | FragmentToken677;
