import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3707 } from "./fragment3707";
import type { FragmentToken3708 } from "./fragment3708";

export const FRAGMENT_3709 = gql(`
  fragment Fragment3709 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult3709 = ResultOf<typeof FRAGMENT_3709>;
type FragmentSelf3709 = NonNullable<FragmentResult3709>;

export type FragmentToken3709 =
  | FragmentSelf3709["__typename"]
  | FragmentSelf3709["typenameHint"] | FragmentToken3707 | FragmentToken3708;
