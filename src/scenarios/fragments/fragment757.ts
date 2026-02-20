import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken755 } from "./fragment755";
import type { FragmentToken756 } from "./fragment756";

export const FRAGMENT_757 = gql(`
  fragment Fragment757 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult757 = ResultOf<typeof FRAGMENT_757>;
type FragmentSelf757 = NonNullable<FragmentResult757>;

export type FragmentToken757 =
  | FragmentSelf757["__typename"]
  | FragmentSelf757["typenameHint"] | FragmentToken755 | FragmentToken756;
