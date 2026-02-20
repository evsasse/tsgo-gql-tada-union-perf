import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken656 } from "./fragment656";
import type { FragmentToken657 } from "./fragment657";

export const FRAGMENT_658 = gql(`
  fragment Fragment658 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult658 = ResultOf<typeof FRAGMENT_658>;
type FragmentSelf658 = NonNullable<FragmentResult658>;

export type FragmentToken658 =
  | FragmentSelf658["__typename"]
  | FragmentSelf658["typenameHint"] | FragmentToken656 | FragmentToken657;
