import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3708 } from "./fragment3708";
import type { FragmentToken3709 } from "./fragment3709";

export const FRAGMENT_3710 = gql(`
  fragment Fragment3710 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult3710 = ResultOf<typeof FRAGMENT_3710>;
type FragmentSelf3710 = NonNullable<FragmentResult3710>;

export type FragmentToken3710 =
  | FragmentSelf3710["__typename"]
  | FragmentSelf3710["typenameHint"] | FragmentToken3708 | FragmentToken3709;
