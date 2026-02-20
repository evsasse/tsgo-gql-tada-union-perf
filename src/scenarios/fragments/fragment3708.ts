import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3706 } from "./fragment3706";
import type { FragmentToken3707 } from "./fragment3707";

export const FRAGMENT_3708 = gql(`
  fragment Fragment3708 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult3708 = ResultOf<typeof FRAGMENT_3708>;
type FragmentSelf3708 = NonNullable<FragmentResult3708>;

export type FragmentToken3708 =
  | FragmentSelf3708["__typename"]
  | FragmentSelf3708["typenameHint"] | FragmentToken3706 | FragmentToken3707;
