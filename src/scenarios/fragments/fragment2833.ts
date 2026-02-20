import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2831 } from "./fragment2831";
import type { FragmentToken2832 } from "./fragment2832";

export const FRAGMENT_2833 = gql(`
  fragment Fragment2833 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult2833 = ResultOf<typeof FRAGMENT_2833>;
type FragmentSelf2833 = NonNullable<FragmentResult2833>;

export type FragmentToken2833 =
  | FragmentSelf2833["__typename"]
  | FragmentSelf2833["typenameHint"] | FragmentToken2831 | FragmentToken2832;
