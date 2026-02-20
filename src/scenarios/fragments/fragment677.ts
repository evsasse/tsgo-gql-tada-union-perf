import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken675 } from "./fragment675";
import type { FragmentToken676 } from "./fragment676";

export const FRAGMENT_677 = gql(`
  fragment Fragment677 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult677 = ResultOf<typeof FRAGMENT_677>;
type FragmentSelf677 = NonNullable<FragmentResult677>;

export type FragmentToken677 =
  | FragmentSelf677["__typename"]
  | FragmentSelf677["typenameHint"] | FragmentToken675 | FragmentToken676;
