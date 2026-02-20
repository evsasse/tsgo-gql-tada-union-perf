import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken633 } from "./fragment633";
import type { FragmentToken634 } from "./fragment634";

export const FRAGMENT_635 = gql(`
  fragment Fragment635 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult635 = ResultOf<typeof FRAGMENT_635>;
type FragmentSelf635 = NonNullable<FragmentResult635>;

export type FragmentToken635 =
  | FragmentSelf635["__typename"]
  | FragmentSelf635["typenameHint"] | FragmentToken633 | FragmentToken634;
