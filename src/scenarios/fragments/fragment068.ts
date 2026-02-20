import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken066 } from "./fragment066";
import type { FragmentToken067 } from "./fragment067";

export const FRAGMENT_068 = gql(`
  fragment Fragment068 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult068 = ResultOf<typeof FRAGMENT_068>;
type FragmentSelf068 = NonNullable<FragmentResult068>;

export type FragmentToken068 =
  | FragmentSelf068["__typename"]
  | FragmentSelf068["typenameHint"] | FragmentToken066 | FragmentToken067;
