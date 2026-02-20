import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2761 } from "./fragment2761";
import type { FragmentToken2762 } from "./fragment2762";

export const FRAGMENT_2763 = gql(`
  fragment Fragment2763 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult2763 = ResultOf<typeof FRAGMENT_2763>;
type FragmentSelf2763 = NonNullable<FragmentResult2763>;

export type FragmentToken2763 =
  | FragmentSelf2763["__typename"]
  | FragmentSelf2763["typenameHint"] | FragmentToken2761 | FragmentToken2762;
