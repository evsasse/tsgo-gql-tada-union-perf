import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1531 } from "./fragment1531";
import type { FragmentToken1532 } from "./fragment1532";

export const FRAGMENT_1533 = gql(`
  fragment Fragment1533 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult1533 = ResultOf<typeof FRAGMENT_1533>;
type FragmentSelf1533 = NonNullable<FragmentResult1533>;

export type FragmentToken1533 =
  | FragmentSelf1533["__typename"]
  | FragmentSelf1533["typenameHint"] | FragmentToken1531 | FragmentToken1532;
