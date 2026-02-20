import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2300 } from "./fragment2300";
import type { FragmentToken2301 } from "./fragment2301";

export const FRAGMENT_2302 = gql(`
  fragment Fragment2302 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult2302 = ResultOf<typeof FRAGMENT_2302>;
type FragmentSelf2302 = NonNullable<FragmentResult2302>;

export type FragmentToken2302 =
  | FragmentSelf2302["__typename"]
  | FragmentSelf2302["typenameHint"] | FragmentToken2300 | FragmentToken2301;
