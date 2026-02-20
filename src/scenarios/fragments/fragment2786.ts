import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2784 } from "./fragment2784";
import type { FragmentToken2785 } from "./fragment2785";

export const FRAGMENT_2786 = gql(`
  fragment Fragment2786 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult2786 = ResultOf<typeof FRAGMENT_2786>;
type FragmentSelf2786 = NonNullable<FragmentResult2786>;

export type FragmentToken2786 =
  | FragmentSelf2786["__typename"]
  | FragmentSelf2786["typenameHint"] | FragmentToken2784 | FragmentToken2785;
